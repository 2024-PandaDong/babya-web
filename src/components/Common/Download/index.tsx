import React from 'react'
import * as S from "./style"
import {Link} from "react-router-dom";

const Download = () => {
    return (
            <S.Container>
                <S.Wrap>
                    <Link to="">Android Download</Link>
                    <Link to="">iOS Download</Link>
                </S.Wrap>
            </S.Container>
    )
}

export default Download;