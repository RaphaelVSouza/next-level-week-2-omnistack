import React, { TextareaHTMLAttributes } from 'react';
import * as S from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;

}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
    return (
        <S.TextareaBlock>
            <div>
                <label htmlFor={name}>{label}</label>
                <textarea id={name} {...rest} />
            </div>
        </S.TextareaBlock>
    );
}

export default Textarea;