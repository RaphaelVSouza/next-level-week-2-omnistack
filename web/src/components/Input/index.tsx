import React, { InputHTMLAttributes } from 'react';
import Style from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
    return (
        <Style>
            <div className="input-block">
                <label htmlFor={name}>{label}</label>
                <input type="text" id={name} {...rest} />
            </div>
        </Style>
    );
}

export default Input;