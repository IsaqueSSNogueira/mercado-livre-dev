
import style from './Frete.module.css'


const Frete = () => {

    return (
        <div className={style.freteContainer}>
            <span className={style.frete}>Frete</span>
            <div className={style.freteValorContainer}>
                <span>R$</span>
                <span className={style.valorFreteReais}>00</span>
                <span className={style.valorFreteCentavos}>00</span>
            </div>
        </div>
    )
}

export default Frete;