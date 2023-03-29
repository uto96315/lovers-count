import { NextPage } from "next";

type Props = {
    title: string;
    clickFunc: () => void;
};

const Option: NextPage<Props> = ({ title, clickFunc }) => {
    return (
        <div
            className={styles.container}
            onClick={clickFunc}
        >
            <p>
                {title}
            </p>
        </div>
    );
};

export default Option;

const styles = {
    container: `
    py-2
    my-5
    drop-shadow-lg
    border-gray-200
    rounded-xl
    bg-white
    `,
};