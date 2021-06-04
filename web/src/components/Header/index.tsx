import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface HeaderProps {
    title: string;
    description?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (

        <S.Header>
            <S.TopBar>
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>

                <img src={logoImg} alt="Proffy" />
            </S.TopBar>


            <S.HeaderContent>
                <strong>{props.title}</strong>

                {props.description && <p>{props.description}</p>}

                {props.children}
            </S.HeaderContent>
        </S.Header>
    );
}

export default Header;