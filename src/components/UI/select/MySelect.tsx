import React from 'react'

type OptionData = {
    value: string,
    name: string,
}

type Options = {
    defaultValue: string,
    options: OptionData[],
    value: string,
    onChange: (value: string) => void,
}

const MySelect: React.FC<Options> = ({ defaultValue, options, value, onChange }) => {

    return (
        <div>
            <select value={value} onChange={event => onChange(event.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {
                    options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)
                }
            </select> 
        </div>
    );
};

export default MySelect;
