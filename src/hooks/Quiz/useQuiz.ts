import {useEffect, useState} from "react";
import {babyaAxios} from "src/libs/axios/CustomAxios";

interface Props {
    "quizId": number,
    "quizCn": string,
    "answer": string,
    "regDt": string
}

const useQuiz = () => {
    const [data, setData] = useState<Props[]>([]);

    useEffect(() => {
        const QuizRead = async () => {
            await babyaAxios.get("quiz/list", {
                params: {
                    page: 1,
                    size: 10,
                }
            }).then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
            })
        }

        QuizRead();
    }, [])
    return {
        data,
    }
}

export default useQuiz;