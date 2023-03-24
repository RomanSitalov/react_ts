import React from 'react';
import classes from './MyButton.module.scss';

type Props = {
    disabled?: boolean;
    children?: React.ReactNode;
    onClick (event: React.MouseEvent<HTMLButtonElement>): void;
};

const MyButton: React.FC<Props> = ({
    children,
    onClick,
    disabled,
}) => {
    return (
        <button className={classes.myBtn} type="submit" disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

export default MyButton;
