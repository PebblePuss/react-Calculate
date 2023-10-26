import {Button} from "../component/Button";

export const OperBtn = () => {
    const operators = ["%", "R", "X", "/", "+", "-", "="];
    return (
        <div id={"operBtn"}>
            {operators.map(text => <Button name={text} func={() => alert("Make")} />)}
        </div>
    )
}