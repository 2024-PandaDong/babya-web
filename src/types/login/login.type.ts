import { Response } from "src/types/until/response.type";

export interface LoginResponse extends Response {
    data: {
        accessToken: string;
        refreshToken: string;
    };
}