import React from 'react';
import Style from './styles';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface HeaderProps {
    title: string;
    description?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Style>
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>

                    <img src={logoImg} alt="Proffy" />
                </div>


                <div className="header-content">
                    <strong>{props.title}</strong>

                    {props.description && <p>{props.description}</p>}

                    {props.children}
                </div>

            </header>
        </Style>
    );
}

export default Header;