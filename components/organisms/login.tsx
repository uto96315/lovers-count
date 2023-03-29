import { Button, Input } from "components/atoms";
import { login } from "functions";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";


type Props = {
};

const Login: NextPage<Props> = ({ }) => {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () => {
        const result = login(userName, pass);
        if (!result) {
            alert("ログインに失敗しました");
            setPass("");
            setUserName("");
        } else {
            const select = window.confirm("さすがさきちゃん！ログインしますか？");
            if (result) {
                console.log("はい");
                router.push("./countdownPage");
            } else {
                console.log("いいえ");
                return;
            }
        }
    };
    return (
        <div className={styles.container}>
            <Input style={styles.input} type="text" placeholder="お名前" value={userName} changeFunc={setUserName} />
            <Input style={styles.input} type="text" placeholder="パスワード" value={pass} changeFunc={setPass} />
            <Button
                text={"ログインする"}
                style={styles.button}
                clickFunc={handleLogin} />

            <div className={styles.link}>
                <Link href={"./questions"}>
                    パスワードがわからない？
                </Link>
            </div>
        </div>
    );
};

export default Login;

const styles = {
    container: `
    text-center
    pb-10
    mx-5
    bg-gray-200
    rounded-xl
    `,
    input: `
    rounded
    px-2
    py-1
    w-8/12
    mt-10
    `,
    button: `
    text-white
    mt-10
    px-4
    `,
    link: `
    mt-5
    text-slate-600
    underline
    underline-offset-4
    `,
};