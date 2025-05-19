

import style from './NavBar.module.css';


/* componentes */
import MenuPrincipal from "./MenuPrincipal/MenuPrincipal.jsx";
import MenuUsuario from './MenuUsuario/MenuUsuario.jsx';



const NavBar = () => {

    return (
        <nav className={style.navigator}>
            <MenuPrincipal />
            <MenuUsuario />
        </nav>
    )
}

export default NavBar;