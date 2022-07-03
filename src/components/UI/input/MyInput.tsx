import React from 'react';
import './MyInput.css';


type Props = {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
};

const MyInput: React.FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <input value={value} type="text" onChange={onChange} placeholder={placeholder} />
    );
}

export default MyInput;
