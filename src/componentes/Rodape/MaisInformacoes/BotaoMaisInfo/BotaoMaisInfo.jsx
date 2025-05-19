
import style from './BotaoMaisInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const BotaoMaisInfo = ({ status, onclick}) => {

    return (

        <button className={style['botao-mais-informacoes']} onClick={onclick}>          
            <span>Mais informações</span>
            <FontAwesomeIcon icon={faAngleUp} className={`${style['icon-seta']} ${status ? '' : style['icon-seta-virado']}`}/>
        </button>

    )
}

export default BotaoMaisInfo;