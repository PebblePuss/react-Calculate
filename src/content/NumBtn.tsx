import {Button} from "../component/Button";

export const NumBtn = () => {
    const Nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "00", "."];

    return (
        <div id={"NumBtn"}>
            {Nums.map(text => <Button name={text.toString()} func={() => alert("make") } />)}
        </div>
    )
}