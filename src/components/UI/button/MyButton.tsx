import React from 'react';
import './MyButton.css';

type Props = {
    disabled?: boolean;
    children?: React.ReactNode;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

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
