import React from 'react';
import './MyButton.css';
//import styles from "./MyButton.module.css";
//import * as style from "./style.module.scss";
//import styles from "./MyButton.module.css";

type Props = {
    disabled?: boolean;
    children?: React.ReactNode;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

//const dd = styles['my-btn'];

const MyButton: React.FC<Props> = ({
    children,
    onClick,
    disabled,
}) => {
    return (
        <button className="my-btn" type="submit" disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

export default MyButton;
