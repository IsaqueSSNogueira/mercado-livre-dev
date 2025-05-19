
import style from './Loja.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Loja = () => {

    return(

        <div className={style.lojaContainer}>
            <FontAwesomeIcon icon={faSquareCheck} className={style.iconCheck} />
            <h3>Produtos de <span className={style.nomeLoja}>NewStoreCompany</span></h3>
        </div>

    )
}

export default Loja;