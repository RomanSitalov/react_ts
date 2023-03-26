import React from 'react'
import classes from './MySelect.module.scss'

interface OptionData {
    value: string,
    name: string,
}

interface Option {
    defaultValue: string,
    options: OptionData[],
    value?: string,
    onChange: (value: string) => void,
}

const MySelect: React.FC<Option> = ({ defaultValue, options, value, onChange }) => {

    return (
        <div>
            <select className={classes.mySelect} value={value} onChange={event => onChange(event.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {
                    options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)
                }
            </select>
        </div>
    );
};

export default MySelect;
