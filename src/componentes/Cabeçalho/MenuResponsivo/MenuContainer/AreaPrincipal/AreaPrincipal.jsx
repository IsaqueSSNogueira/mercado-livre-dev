


import style from './AreaPrincipal.module.css'
import MenuHamburguer from './../../MenuHamburguer.jsx';
import PerfilUser from './PerfilUser/PerfilUser.jsx';
import meliImg from './../../../../../assets/icons/mini-meliplus.svg'
import mercadoPago from './../../../../../assets/icons/mercado-pago-v3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const AreaPrincipal = ({onClick}) => {

    return (

        <div className={style.areaPrincipal}>
            <MenuHamburguer onClick={onClick} responsivo={true} />
            <PerfilUser />
            <a href='' className={style.meliPlus}>Aproveite seus beneficios <span className={style.conteudoNaoNecessarioResponsivo}>por ser</span> <img src={meliImg} /><FontAwesomeIcon icon={faAngleRight} className={style.arrowIcon} /></a>
            <a href='' className={style.mercadoPago}><img src={mercadoPago} className={style.imgPago} />Mercado Pago <FontAwesomeIcon icon={faAngleRight} className={style.arrowIcon} /></a>
        </div>

    )
}
export default AreaPrincipal;