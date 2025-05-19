

import style from './Cabeçalho.module.css';
import { useState } from 'react';

/* componentes */
import Logo from './Logo/Logo.jsx'
import BarraSearch from './BarraSearch/BarraSearch.jsx'
import AnuncioMeli from './AnuncioMeli/AnuncioMeli.jsx';
import Envio from './Envio/Envio.jsx'
import NavBar from './NavBar/NavBar.jsx';
import MenuHamburguer from './MenuResponsivo/MenuHamburguer.jsx';
import MenuContainer from './MenuResponsivo/MenuContainer/MenuContainer.jsx';
import IconCart from './IconCart/IconCart.jsx';


const Cabeçalho = () => {

    // menu responsivo
    const [menuToggle, setMenuToggle] = useState(false)
    const altenarEstadoMenu = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <header className={style['cabeçalho-principal']}>
            <Logo />
            <BarraSearch />
            <AnuncioMeli />
            <Envio />
            <NavBar />
            {/*responsivo*/}
            <IconCart />
            <MenuHamburguer onClick={altenarEstadoMenu} responsivo={false} />
            <MenuContainer estado={menuToggle} onClick={altenarEstadoMenu} />
        </header>
    )
}


export default Cabeçalho;