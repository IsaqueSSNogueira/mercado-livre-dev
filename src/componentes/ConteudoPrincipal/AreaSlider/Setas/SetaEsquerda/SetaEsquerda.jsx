
import style from '../Setas.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const SetaEsquerda = ({ onClick }) => {

    return (
        <div onClick={onClick} className={`${style['div-setas']} ${style['div-seta-esquerda']}`}>

            <FontAwesomeIcon icon={faChevronLeft} className={style['seta-esquerda']} />
        </div>
    )
}

export default SetaEsquerda;