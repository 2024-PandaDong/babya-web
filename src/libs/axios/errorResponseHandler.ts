import axios, { AxiosError } from "axios";
import CONFIG from "src/config/config.json";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/tokens/token.constants";
import token from "src/libs/token/token";
import { babyaAxios } from "src/libs/axios/CustomAxios";

let isRefreshing = false; // 토큰 갱신 중인지 여부를 나타내는 플래그
let refreshSubscribers: ((accessToken: string) => void)[] = []; // 토큰 갱신을 기다리는 콜백 함수 목록

// 새로운 액세스 토큰이 갱신되었을 때, 모든 대기 중인 요청에 이를 전달
const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribers.map((callback) => callback(accessToken));
};

// 토큰 갱신을 기다리는 콜백 함수를 추가
const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribers.push(callback);
};

// 에러 응답을 처리하는 핸들러 함수
const errorResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status }
        } = error;

        const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
        const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

        // 액세스 토큰과 리프레시 토큰이 존재하고, 상태 코드가 401인 경우
        if (
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status == 401
        ) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    // 리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청
                    const data = await axios.post(`${CONFIG.BABYA_Server}/auth/reissue`, {
                        refreshToken: usingRefreshToken,
                    });

                    const newAccessToken = data.data.data.accessToken;
                    // 새로운 액세스 토큰을 저장
                    token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
                    isRefreshing = false;
                    onTokenRefreshed(newAccessToken);
                } catch (error) {
                    // 토큰 갱신에 실패한 경우, 토큰을 삭제하고 로그인 페이지로 리다이렉트
                    token.clearToken();
                    window.location.href = '/';
                }
            }

            // 새로운 액세스 토큰을 사용할 수 있을 때까지 대기
            return new Promise((resolve, rejects) => {
                addRefreshSubscriber((accessToken: string) => {
                    if (originalRequest) {
                        // 원래 요청의 헤더에 새로운 액세스 토큰을 설정
                        originalRequest.headers![
                            REFRESH_TOKEN_KEY
                            ] = `Bearer ${accessToken}`;
                        resolve(babyaAxios(originalRequest));
                    } else {
                        rejects("originalRequest is undefined");
                    }
                });
            });
        }
    }
    // 에러를 그대로 반환합니다.
    return Promise.reject(error);
};

export default errorResponseHandler;
