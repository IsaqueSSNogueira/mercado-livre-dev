

import style from './MenuHamburguer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';


const MenuHamburguer = ( {responsivo, onClick} ) => {

    const estilo = responsivo ? style.menuHamburguerResponsivo : style.menuHamburguer;

    return (

        <div className={estilo} onClick={onClick}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default MenuHamburguer;