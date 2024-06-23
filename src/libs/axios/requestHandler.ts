import { AxiosRequestConfig } from "axios"; // AxiosRequestConfig 타입을 axios에서 가져온다.
// 토큰 키 상수들을 가져온다.
import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/tokens/token.constants";
import token from "src/libs/token/token"; // 토큰 관련 유틸리티 함수를 가져온다.
// requestHandler 함수는 Axios 요청을 가로채어 설정을 수정한다.
const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
    // 만약 REFRESH_TOKEN_KEY에 해당하는 토큰이 없으면 세션 만료로 간주한다.
    if (token.getToken(REFRESH_TOKEN_KEY) === undefined) {
        // 세션 만료 메시지를 알린다.
        alert("세션만료");
        // 로그인 페이지로 리디렉션한다..
        window.location.href = "/login"
        // 설정을 그대로 반환한다.
        return config;
    };

    // 요청의 헤더에 기본 헤더와 함께 추가 헤더를 설정한다.
    config.headers = {
        ...config.headers,
        [REQUEST_TOKEN_KEY] : `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`, // 요청 토큰을 설정한다.
    };
    // 수정된 설정을 반환한다.
    return config;
};

// requestHandler 함수를 기본 내보내기로 내보낸다.
export default requestHandler;
