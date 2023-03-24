import React from 'react';
import classes from './MyInput.module.scss';

type Props = {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
};

const MyInput: React.FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <input className={classes.myInput} value={value} type="text" onChange={onChange} placeholder={placeholder} />
    );
}

export default MyInput;
