import { Time } from "components/atoms";
import { NextPage } from "next";


type Props = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
const Times: NextPage<Props> = ({ days, hours, minutes, seconds }) => {

    const timeStyle = styles.time;

    return (
        <div className={styles.container}>
            <Time time={days} unit="日" className={timeStyle} />
            <Time time={hours} unit="時間" className={timeStyle} />
            <Time time={minutes} unit="分" className={timeStyle} />
            <Time time={seconds} unit="秒" className={timeStyle} />
        </div>
    );
};

export default Times;

const styles = {
    container: `
    flex
    `,
    time: `
    w-full
    text-center
    space-between
    `,
}