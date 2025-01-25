import { useContext, useState } from "react";
import { Button, Container, Input } from "semantic-ui-react";
import { DataContext } from "./DataContext";
import { useTimer } from "@/utils/useTimer";

function DebatePage() {
    let dataContext = useContext(DataContext);
    if (!dataContext) return;
    let [data, _] = dataContext;

    let [time, timerRunning, startTimer, pauseTimer, setTimer] = useTimer(10);
    let [inputValue, setInputValue] = useState<string>('0');

    return (<>
        <Container>
            { data[0] }
            <br/>
            Time: { time }; Running: { timerRunning ? 'true' : 'false' }
            <br/>
            <Button onClick={startTimer}>开始</Button>
            <Button onClick={pauseTimer}>暂停</Button>
            <Input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <Button attached='right' onClick={() => setTimer(parseInt(inputValue))}>修改</Button>
        </Container>
    </>);
}
export default DebatePage;