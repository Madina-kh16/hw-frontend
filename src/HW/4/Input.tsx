import React, {Dispatch} from "react";


type InputPropsType = {
    currentText: string
    setCurrentText: Dispatch<React.SetStateAction<string>>
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setCurrentText(event.target.value)
    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
    );
};
