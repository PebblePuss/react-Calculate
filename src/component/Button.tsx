import { Btn } from "../interface/Btn";

export const Button = ({ name, func }: Btn) => {
    return (
        <button id={name+'Btn'} children={name} onClick={func} />
    );
}