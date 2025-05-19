

import style from './ListaValores.module.css';


const ListaValores = () => {

    return(
        <ul className={style.listaValores}>
            <li className={style.produto}>
                <span>Produto</span>
                <div className={style.valor}>R$<span className={style.valorReais}>00</span><span className={style.valorCentavos}>00</span></div>
            </li>
            <li className={style.frete}>
                <span>Frete</span>
                <div className={style.valor}>R$<span className={style.valorReais}>00</span><span className={style.valorCentavos}>00</span></div>
            </li>
            <li className={style.cupom}>
                <span>Inserir código do cupom</span>
            </li>
            <li className={style.valorTotal}>
                <span >Total</span>
                <div className={style.valor}>R$<span className={style.valorReais}>00</span><span className={style.valorCentavos}>00</span></div>
            </li>
        </ul>
    )
}

export default ListaValores;