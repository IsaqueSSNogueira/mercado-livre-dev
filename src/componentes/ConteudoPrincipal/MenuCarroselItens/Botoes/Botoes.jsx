
import style from './Botoes.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Botoes = ( {lado, onClick } ) => {


    const direcao = lado === 'left' ? style.left : style.right;

    return (

        <div className={`${style.botaoContainer} ${direcao}`} onClick={() => onClick(lado)}>
            <FontAwesomeIcon icon={faChevronLeft} className={style.setaIcon} />
        </div>
    )
}


export default Botoes;