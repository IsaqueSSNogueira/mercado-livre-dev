

import style from './FreteGratis.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const FreteGratis = () => {

    return (

        <div className={style.freteGratisContainer}>

            <div className={style.freteGraficContainer}>
                <input type="range" min="0" max="10" value="7" className={style.barraRange}/>
                <span className={style.freteGratisSpan}>Frete gratis</span>
            </div>

            <div className={style.freteGratisInfo}>
                <p>Adicione mais R$ 00,00 para conseguir frete grátis em produtos de <span className={style.nomeLoja}>New<wbr/>Store<wbr/>Company</span>.</p>
                <span className={style.linkVendendor}>Ver mais produtos desse vendedor <FontAwesomeIcon icon={faChevronRight} className={style.iconSeta}/></span>
            </div>

        </div>
    )
}


export default FreteGratis;