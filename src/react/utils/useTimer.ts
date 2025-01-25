import { useState } from "react";

type Timer = [number, boolean, () => void, () => void, (time: number) => void];

export function useTimer(timeout: number): Timer {
    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    const [id, setId] = useState<NodeJS.Timeout>();
    
    function startTimer() {
        if (running) return;
        let spot = time, started = Date.now();
        setRunning(true);
        setId(setInterval(() => {
            let now = Date.now();
            setTime(spot + (now - started));
        }, timeout));
    }

    function pauseTimer() {
        if (!running) return;
        clearInterval(id), setRunning(false);
    }

    function setTimer(newTime: number) {
        if (running) {
            clearInterval(id);
            let spot = newTime, started = Date.now();
            setId(setInterval(() => {
                let now = Date.now();
                setTime(spot + (now - started));
            }, timeout));
        } else setTime(newTime);
    }

    return [time, running, startTimer, pauseTimer, setTimer];
}
