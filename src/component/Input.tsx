import {Inp} from "../interface/Inp";

export const Input = ( { mode, value }: Inp ) => {
    return (
        <input type={"text"} id={mode} value={value} disabled={true} />
    );
}