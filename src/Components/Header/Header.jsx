import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Style'
import Logo from '../../Assets/Logo/logo.png'

const Header = () => {
    return(
        <S.ContainerHeader>
            <S.ContainerFigureTitle>
                <S.FigureHeader>
                    <S.LogoHeader src={Logo} alt="Ilustração Logo HelioJr Dev" />
                </S.FigureHeader>
                <S.BoxTitleHeader>
                    <S.TitleHeader>Helio Jr Dev</S.TitleHeader>
                </S.BoxTitleHeader>
            </S.ContainerFigureTitle>
            <S.Navigation>
                <S.ListLinks>
                    <li>
                        <Link class='linksHeader' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link class='linksHeader' to='/bio'>Bio</Link>
                    </li>
                    <li>
                        <Link class='linksHeader' to='/projects'>Projetos</Link>
                    </li>
                    <li>
                        <Link class='linksHeader' to='/social'>Social</Link>
                    </li>
                    <li>
                        <Link class='linksHeader' to='/contact'>Contato</Link>
                    </li>
                </S.ListLinks>
                <S.BoxButton>
                    <S.ButtonMenu/>
                </S.BoxButton>
            </S.Navigation>
        </S.ContainerHeader>
    );
}

export default Header;