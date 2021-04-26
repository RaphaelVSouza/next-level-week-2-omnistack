import React, { TextareaHTMLAttributes } from 'react';
import Style from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;

}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
    return (
        <Style>
            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea id={name} {...rest} />
            </div>
        </Style>
    );
}

export default Textarea;