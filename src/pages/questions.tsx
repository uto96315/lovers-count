import { NextPage } from "next";
import questions from "data/questions";
import { MouseEvent, useState } from "react";
import Option from "components/molecules/option";
import { Button } from "components/atoms";
import { useRouter } from "next/router";

type Props = {};

const Questions: NextPage<Props> = ({ }) => {

    const router = useRouter();

    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [resultText, setResultText] = useState<string>("");
    const [passArr, setPassArr] = useState<string[]>([]);

    const handleAnswer = (selectedNumber: number, answerNumber: number, getedText: string) => {
        console.log("選択されたのは" + selectedNumber);
        console.log("答えは" + answerNumber);

        setResultText("");
        if (selectedNumber !== answerNumber) {
            setResultText("不正解です。\nおこだよ(ﾟ∀ﾟ)");
            return;
        }

        setResultText(`大正解！！\n「${getedText}」を獲得しました！`);
        const newArr = [...passArr, getedText];
        setPassArr(newArr);

        setTimeout(() => {
            if (questionIndex < 8) {
                setQuestionIndex(questionIndex + 1);
            } else {
                return;
            }
            setResultText("");
        }, 1000);
    };

    return (
        <div className={styles.container}>
            {
                questionIndex < 8 ? <div className={styles.subContainer}>
                    <h1 className={styles.title}>
                        第{questions[questionIndex].number}問
                    </h1>
                    <p className={styles.question}>
                        {questions[questionIndex].question}
                    </p>

                    {
                        questions[questionIndex].optionArr.map((option, index) => (
                            <Option
                                key={index}
                                title={option}
                                clickFunc={
                                    () =>
                                        handleAnswer(
                                            index,
                                            questions[questionIndex].correctNumber,
                                            questions[questionIndex].getedText
                                        )
                                }
                            />
                        ))
                    }

                    <p className={styles.result}>
                        {resultText}
                    </p>
                </div>
                    :
                    <div className={styles.correctContainer}>
                        <p className="text-center pb-1">全ての問題に正解しました！</p>
                        <p> パスワードを覚えたら戻るボタンを押してログインしてね！</p>
                        <div className=" text-center">
                            <Button
                                text={"戻る"}
                                style={styles.returnButton}
                                clickFunc={() => { router.back(); }}
                            />
                        </div>
                    </div>
            }

            <div className={styles.passContainer}>
                <div className={styles.passTitle}>
                    <p>獲得したパスワード</p>
                </div>
                {passArr.map((pass) => (
                    <div key={pass} className={styles.passDiv}>
                        {pass}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;

const styles = {
    container: ``,
    subContainer: `
    w-11/12
    m-auto
    mt-5
    py-5
    px-3
    bg-pink-200
    text-center
    `,
    title: `
    text-2xl
    p-1
    `,
    question: `
    py-2
    w-10/12
    m-auto
    `,
    result: `
    py-5
    `,
    passContainer: `
    w-8/12
    m-auto
    mt-5
    `,
    passTitle: `
    text-center
    mb-3
    `,
    passDiv: `
    p-5
    mb-3
    mx-2
    text-center
    text-xl
    rounded-full
    border
    border-3
    border-pink-200
    inline-block
    `,
    correctContainer: `
    w-10/12
    m-auto
    py-10
    `,
    returnButton: `
    my-10
    px-20
    py2
    `,
};