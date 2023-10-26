import {Input} from "../component/Input";

export const headCalculator = () => {
    return (
        <div>
            <Input value={"#"} mode={"firstNum"} />
            <Input value={"#"} mode={"operator"} />
            <Input value={"#"} mode={"Result"} />
        </div>
    )
}