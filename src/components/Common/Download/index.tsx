import React from 'react'
import * as S from "./style"
import {Link} from "react-router-dom";

const Download = () => {
    const handleDownload = () => {
        const fileUrl = '/app-release.apk';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = '애기야.apk';
        link.click();
    }

    return (
            <S.Container>
                <S.Wrap>
                    <Link to="#" onClick={handleDownload}>
                        <S.Text>Android Download</S.Text>
                    </Link>
                    <Link to="https://apps.apple.com/kr/app/애기야/id6736818972" target="_blank">
                        <S.Text>iOS Download</S.Text>
                    </Link>
                </S.Wrap>
            </S.Container>
    )
}

export default Download;