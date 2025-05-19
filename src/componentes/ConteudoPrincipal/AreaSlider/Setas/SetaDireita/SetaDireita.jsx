
import style from '../Setas.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const SetaDireita = ({ onClick }) => {

    return (
        <div onClick={onClick} className={`${style['div-setas']} ${style['div-seta-direita']}`}>
            <FontAwesomeIcon icon={faChevronRight} className={style['seta-direita']} />
        </div>


    )
}

export default SetaDireita;