import setTime from "functions/setTIme";
import { useEffect, useState } from "react";
import Times from "components/molecules/times";


const NowMeet = () => {
    const goalDate = new Date(2023, 3, 5, 10, 0, 0);
    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTime(goalDate, setRemainingTime);

    }, [goalDate]);
    return (
        <div className={styles.container}>
            <p>離れる時間まで残り</p>
            <div className={styles.times}>
                <Times
                    days={remainingTime.days}
                    hours={remainingTime.hours}
                    minutes={remainingTime.minutes}
                    seconds={remainingTime.seconds}
                />
            </div>
        </div>
    );
};

export default NowMeet;

const styles = {
    container: `
    h-auto
    bg-gray-100
    `,
    titleContainer: `
    text-center
    pt-5
    text-xl
    `,
    times: `
    mt-5
    pb-2
    `,
};