import { Time } from "components/atoms";
import Times from "components/molecules/times";
import setTime from "functions/setTIme";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";


const CountDownPage: NextPage = () => {
    const goalDate = new Date(2023, 2, 31, 10, 0, 0);
    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const meet: boolean = true; // 現在あっているかどうか

    useEffect(() => {
        setTime(goalDate, setRemainingTime);

    }, [goalDate]);


    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className=" text-xl py-3">
                    現在一緒にいます( ◠‿◠ )
                </p>
                <p>{meet ? "離れる時間まで残り..." : "会えるまで残り"}</p>
            </div>
            <div className={styles.times}>
                <Times
                    days={remainingTime.days}
                    hours={remainingTime.hours}
                    minutes={remainingTime.minutes}
                    seconds={remainingTime.seconds}
                />
            </div>

            {meet ? null
                : <div>
                    <Image src={"/IMG_5288.JPG"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4465.jpeg"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4482.JPG"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4576.jpeg"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4596.JPG"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4690.jpeg"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4691.jpeg"} alt={""} width={1000} height={0} />
                    <Image src={"/IMG_4824.JPG"} alt={""} width={1000} height={0} />
                </div>}

        </div>
    );
};

export default CountDownPage;

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