
import style from './ControleQtd.module.css';

const ControleQts = () => {

    return (
        <div className={style.containerControleQts}>
            <div className={style.areaControleQts}>
                <span className={`${style.botaoQtd} ${style.botaoMenos}`}>–</span>
                <span className={style.valorQtd}>X</span>
                <span className={style.botaoQtd}>+</span>
            </div>

            <span className={style.qtdDisponivel}>+X disponíveis</span>
        </div>
    )
}

export default ControleQts;