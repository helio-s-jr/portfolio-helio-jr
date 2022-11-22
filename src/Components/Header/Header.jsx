import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <section>
            <Link to='/'>Home</Link>
            <Link to='/bio'>Biografia</Link>
            <Link to='/projects'>Projetos</Link>
            <Link to='/social'>Social</Link>
            <Link to='/contact'>Contato</Link>
        </section>
    );
}

export default Header;