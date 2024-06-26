import { Response } from "src/types/until/response.interface";

export interface PostType extends Response {
    data: {
        postId: string,
        title: string,
        category: number,
        state: string,
        nickname: string
    }
}