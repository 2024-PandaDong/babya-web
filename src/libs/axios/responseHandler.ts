import axios, {AxiosError} from "axios";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY} from "src/constants/token/token.constants";
import token from "src/libs/token/token";
import cookie from "src/libs/cookie/cookie";
import config from "src/config/config.json";

export const errorInterceptor = async (error: AxiosError) => {
    if (error.response) {
        const access_token = cookie.getCookie(ACCESS_TOKEN_KEY);
        const refresh_token = cookie.getCookie(REFRESH_TOKEN_KEY);
        const { config: originConfig, response: { status } } = error;

        if (access_token !== undefined && refresh_token !== undefined && status === 401) {
            try {
                const res =
                    await axios.post(`${config.BABYA_Server}/auth/reissue`, {
                        refreshToken: refresh_token!,
                    })
                const newAccessToken = res.data.data.access_token;

                babyaAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;

                cookie.setCookie(ACCESS_TOKEN_KEY, newAccessToken);

                originConfig.headers![REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;
                return axios(originConfig); 
            } catch (e) {
                token.clearToken();
                window.location.href = "/login";
            }
        }
    }
}