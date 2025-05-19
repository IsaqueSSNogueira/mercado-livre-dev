
import style from './User.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import MenuDropUser from "./MenuDropUser/MenuDropUser.jsx";
import { useState } from 'react';


const User = () => {


    const [estadoAtual, setEstadoAtual] = useState(false);

    const controlarEstado = (ativo) => {

        setEstadoAtual(ativo)
    }

    return (
            <li className={style["user-intem"]} 
                onMouseOver={() => controlarEstado(true)} 
                onMouseOut={() => controlarEstado(false)}>

                <a href="#" target="self" className={style['link-user']}>
                    <div className={style['circulo-iniciais-usuário']}>US</div>
                    <span>Usuário</span> 
                    <FontAwesomeIcon className={style['seta-baixo-icone']} icon={faAngleDown} />
                </a>

                <MenuDropUser estado={estadoAtual} />
            </li>
    )
}

export default User; 