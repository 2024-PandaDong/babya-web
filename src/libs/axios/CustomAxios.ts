import axios, { AxiosRequestConfig } from "axios"; // axios와 AxiosRequestConfig 타입을 axios 모듈에서 가져온다.
import CONFIG from "src/config/config.json"; // 프로젝트의 설정 파일을 가져온다.
// 토큰 키 상수들을 가져온다.
import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants";
import token from "src/libs/token/token"; // 토큰 관련 유틸리티 함수를 가져온다.
import requestHandler from "src/libs/axios/requestHandler"; // 요청을 처리하는 핸들러 함수를 가져온다.
// Axios 인스턴스를 생성하는 함수
const createAxiosInstance = (config: AxiosRequestConfig) => {
    // ACCESS_TOKEN_KEY에 해당하는 토큰을 가져온다.
    const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
    // 기본 설정을 구성한다.
    const baseConfig: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`, // 헤더에 Authorization을 추가한다.
        },
    };
    // 기본 설정과 전달받은 설정을 합쳐서 새로운 Axios 인스턴스를 생성한다.
    return axios.create({
        ...baseConfig,
        ...config
    });
}

// babyaAxios 인스턴스를 생성
export const babyaAxios = createAxiosInstance({
    baseURL: CONFIG.BABYA_Server, // 기본 URL을 설정 파일에서 가져온다.
    headers: {
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}` // 요청 토큰을 헤더에 추가한다.
    },
});

// 새로운 액세스 토큰을 설정하는 함수
export const babyaAxiosSetAccessToken = (newToken: string) => {
    // Axios 인스턴스의 기본 헤더에 새로운 토큰을 설정한다.
    babyaAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

// 요청 인터셉터를 설정하여 요청을 가로챈다.
babyaAxios.interceptors.request.use(
    requestHandler as any, // 요청 핸들러를 사용한다.
    (response) => response // 요청이 실패할 경우 그대로 응답을 반환한다.
);

// 응답 인터셉터를 설정하여 응답을 가로챈다.
babyaAxios.interceptors.response.use(
    (response) => response, // 응답이 성공할 경우 그대로 응답을 반환한다.
    requestHandler // 응답 핸들러를 사용한다.
);
