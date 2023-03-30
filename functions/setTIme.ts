

const setTime = (
    targetDate: Date,
    setFunc: (newValue: any) => void
) => {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setFunc({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
};

export default setTime;