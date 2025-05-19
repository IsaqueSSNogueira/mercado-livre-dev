
import { Link } from 'react-router-dom';
import style from './IconCart.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const IconCart = () => {

    return (
        <Link to="/cart" className={style.linkCart} title="Ir para o carrinho"><FontAwesomeIcon icon={faCartShopping} className={style.iconCart} /></Link>
    )
}

export default IconCart;