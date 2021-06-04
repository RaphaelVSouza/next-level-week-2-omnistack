import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

}

const Input: React.FC<InputProps> = ({ name, label, type = "text", ...rest }) => {
    return (
        <S.InputBlock >
            <label htmlFor={name}>
                {label}
                <input type={type} id={name} {...rest} />
            </label>
        </S.InputBlock>
    );
}

export default Input;