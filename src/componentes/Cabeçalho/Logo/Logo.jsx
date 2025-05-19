
import style from './Logo.module.css';
import logo from './../../../assets/img/logo2.png';
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <div className={style.logo}>
            <Link to="/">
                    <img src={logo} alt="Mercado Livre - Logo" />
            </Link>
        </div>
    )
}

export default Logo;