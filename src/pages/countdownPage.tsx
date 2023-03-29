import { Time } from "components/atoms";
import Times from "components/molecules/times";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";


const CountDownPage: NextPage = () => {
    const goalDate = new Date(2023, 3, 5, 10, 0, 0);
    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = goalDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setRemainingTime({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [goalDate]);


    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p>会えるまで残り</p>
            </div>
            <div className={styles.times}>
                <Times
                    days={remainingTime.days}
                    hours={remainingTime.hours}
                    minutes={remainingTime.minutes}
                    seconds={remainingTime.seconds}
                />
            </div>

            <div>
                <Image src={"/IMG_5288.JPG"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4465.jpeg"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4482.JPG"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4576.jpeg"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4596.JPG"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4690.jpeg"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4691.jpeg"} alt={""} width={1000} height={0} />
                <Image src={"/IMG_4824.JPG"} alt={""} width={1000} height={0} />
            </div>
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