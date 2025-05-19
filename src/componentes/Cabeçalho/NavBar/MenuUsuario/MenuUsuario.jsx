
import style from './MenuUsuario.module.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import User from "./User/User.jsx"

const MenuUsuario = () => {

    return (
        <div className={style['nav-secundario']}>
            <ul className={style['lista-links']}>
                <User />
                <li><a href="" target="_self">Compras</a></li>
                <li><a href="" target="_self"  className={style['seta-baixo-link']}>Favoritos <FontAwesomeIcon className={style['seta-baixo-icone']} icon={faAngleDown} /></a></li>
                <li><a href="" target="_self"><FontAwesomeIcon icon={faBell}  className={style['icon']}/></a></li>
                <li><Link to='/cart' title="Ir para o carrinho"><FontAwesomeIcon icon={faCartShopping} className={style.iconCart} /></Link></li>
            </ul>
        </div>
    )
}

export default MenuUsuario;