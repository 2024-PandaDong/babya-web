import { Response } from "src/types/until/response.interface";

export interface PostContentType extends Response {
    data: {
        postId: string,
        title: string,
        content: string,
        category: number,
        nickname: string,
        view: number,
        commentCnt: number,
        createdAt: string,
        memberId: number,
        profileImg: string,
        files: {
            fileId: number,
            name: string,
            size: number,
            extension: string,
            url: string
        }[]
    }
}
