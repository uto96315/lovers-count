import { NextPage } from "next";

type Props = {
    time: number;
    unit: string;
    className: string;
};

const Time: NextPage<Props> = ({ time, unit, className }) => {
    return (
        <div className={className}>
            <div className={styles.time}>
                {time}
            </div>
            <div>
                {unit}
            </div>
        </div>
    );
};

export default Time;

const styles = {
    time: `
    text-2xl
    text-pink-400
    `,
    unit: ``,
}