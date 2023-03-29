import { NextPage } from "next";


type Props = {
    text: string;
    style: string;
    clickFunc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: NextPage<Props> = ({ text, style, clickFunc }) => {

    return (
        <div>
            <button className={styles.button + " " + style} onClick={clickFunc}>
                {text}
            </button>
        </div>
    );
};

export default Button;

const styles = {
    button: `
    rounded
    py-2
    px-2
    border
    bg-pink-200
    shadow
    `,
};