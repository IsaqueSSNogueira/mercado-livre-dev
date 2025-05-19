

import style from './MenuDropUser.module.css';
import Perfil from './Perfil/Perfil';

import meliGraphic from './../../../../../../assets/img/meli_graphic.png';
import MercadoPago from './MercadoPago/MercadoPago';
import ListaItens from './ListaItens/ListaItens';

const MenuDropUser = ({ estado }) => {

    return (

        <div className={style['div-menu-user']} style={{display : estado ? "block" : "none"}}>
            <div className={style['container-auxiliar']}>
                <ul className={style['lista-itens-menu']}>
                    <li><Perfil /></li>
                    <li><a href="" target="_self" className={style['link-meli-graphic']}><img src={meliGraphic} className={style['meli-graphic']}></img></a></li>
                    <li><MercadoPago /></li>
                    <li><ListaItens /></li>
                </ul>
            </div>
        </div>
    )
}

export default MenuDropUser;