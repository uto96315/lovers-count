import { NextPage } from "next";

type Props = {
    type: string;
    placeholder: string;
    value: string | number;
    style: string;
    changeFunc: (newValue: string) => void;
};

const Input: NextPage<Props> = ({ type, placeholder, value, changeFunc, style }) => {
    return (
        <div className={styles.container}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => changeFunc(e.target.value)}
                className={style}
            />
        </div>
    );
};

export default Input;

const styles = {
    container: `

    `,
};