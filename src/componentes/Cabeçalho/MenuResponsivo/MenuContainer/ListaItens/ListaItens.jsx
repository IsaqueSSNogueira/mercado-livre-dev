

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from './ListaItens.module.css';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt, faHandHoldingUsd, faShieldAlt, faFileSignature, faGift, faHistory, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket, faTshirt, faGlobe, faChartLine, faStore, faThList, faClipboard, faDollarSign, faBullhorn, faUserCircle, faStoreAlt, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ListaItens = () => {


    return (
        <>
        <ul className={style.containerLista}>
            <li><a href=''><FontAwesomeIcon icon={faHouse} className={style.icon} /><span>Início</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} /><span>Buscar</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faBell} className={style.icon} /><span>Notificações</span></a></li>
            <li className={style.itemCart}><Link to="/cart" title="Ir para o carrinho"><FontAwesomeIcon icon={faCartShopping} className={style.icon} /><span>Carrinho</span></Link></li>
            <li><a href=''><FontAwesomeIcon icon={faShoppingBag} className={style.icon} /><span>Minhas Compras</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faHeart} className={style.icon} /><span>Favoritos</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faTags} className={style.icon} /><span>Ofertas do Dia</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faTicketAlt} className={style.icon} /><span>Cupons</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faHandHoldingUsd} className={style.icon} /><span>Empréstimo</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faShieldAlt} className={style.icon} /><span>Seguros</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faFileSignature} className={style.icon} /><span>Assinatura</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faGift} className={style.icon} /><span>Presente</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faHistory} className={style.icon} /><span>Histórico</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faUser} className={style.icon} /><span>Conta</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faQuestionCircle} className={style.icon} /><span>Ajuda</span></a></li>
        </ul>

        <ul className={style.containerLista}>
            <li><a href=''><FontAwesomeIcon icon={faShoppingBasket} className={style.icon} /><span>Supermercado</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faTshirt} className={style.icon} /><span>Moda</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faGlobe} className={style.icon} /><span>Compra Internacional</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faChartLine} className={style.icon} /><span>Mais Vendidos</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faStore} className={style.icon} /><span>Lojas Oficiais</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faThList} className={style.icon} /><span>Categorias</span></a></li>
        </ul>

        <ul className={style.containerLista}>
            <li><a href=''><FontAwesomeIcon icon={faClipboard} className={style.icon} /><span>Resumo</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faDollarSign} className={style.icon} /><span>Vender</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faBullhorn} className={style.icon} /><span>Anúncios</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faUserCircle} className={style.icon} /><span>Bio Livre</span></a></li>
            <li><a href=''><FontAwesomeIcon icon={faStoreAlt} className={style.icon} /><span>Mercado Shops</span></a></li>
        </ul>

        <a href="" className={style.sobre}>Sobre o Mercado Livre</a>
           
        </>
        
    )
}

export default ListaItens;