

import style from './Perfil.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import meliIcon from './../../../../../../../assets/icons/mini-meliplus.svg';

const Perfil = () => {

    return (

            <a href="" target="_self" className={style.perfil}>
                    <div className={style['perfil-circulo-iniciais-usuário']}>
                        <span>US</span>
                        <img src={meliIcon} className={style['meli-icon']} />
                    </div>
                    <div className={style['perfil-user']}>
                        <span>Usuário</span>
                        <span className={style['perfil-meu-perfil']}>Meu perfil <FontAwesomeIcon icon={faChevronRight} className={style['perfil-meu-perfil-icon']} /></span>
                    </div>
            </a>

    )
}

export default Perfil;