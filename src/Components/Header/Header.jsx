import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './Style'
import Logo from '../../Assets/Logo/logo.png'

const Header = () => {
    return(
        <S.ContainerHeader>
            <figure>
                <img src={Logo} alt="Ilustração Logo HelioJr Dev" />
            </figure>
            <div>
                <h1>Helio Jr Dev</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link class= 'linkHeader' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/bio'>Bio</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li>
                        <Link to='/social'>Social</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </nav>
        </S.ContainerHeader>
    );
}

export default Header;