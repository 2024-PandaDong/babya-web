import axios from "axios"
import config from "src/config/config.json";
import cookie from "src/libs/cookie/cookie";
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import { requestHandler } from "src/libs/axios/requestHandler";
import { errorInterceptor as responseHandler } from "src/libs/axios/responseHandler";

const babyaAxios = axios.create({
    baseURL: config.BABYA_Server,
    headers: {
        [REQUEST_TOKEN_KEY]: `Bearer ${cookie.getCookie(ACCESS_TOKEN_KEY)}`
    }
})

babyaAxios.interceptors.request.use(requestHandler as any, (response) => response);
babyaAxios.interceptors.response.use((response) => response, responseHandler);

export default babyaAxios;