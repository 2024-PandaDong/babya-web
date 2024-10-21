import React from 'react'
import * as S from "./style"
import {Link} from "react-router-dom";

const Download = () => {
    return (
            <S.Container>
                <S.Wrap>
                    <Link to="">
                        <S.Text>Android Download</S.Text>
                    </Link>
                    <Link to="">
                        <S.Text>iOS Download</S.Text>
                    </Link>
                </S.Wrap>
            </S.Container>
    )
}

export default Download;