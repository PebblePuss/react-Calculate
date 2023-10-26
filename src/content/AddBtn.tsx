import {Button} from "../component/Button";

export const AddBtn = () => {
    const addBtn = ["M+", "M-", "exp", "Reset", "Back"];

    return (
        <div id={"AddBtn"}>
            {addBtn.map(text => <Button name={text} func={() => alert("Make")} />)}
        </div>
    )
}