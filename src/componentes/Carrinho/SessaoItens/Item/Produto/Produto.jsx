

import style from './Produto.module.css';
import itemImgExemplo from './../../../../../assets/icons/item.png';

import ControleQtd from './ControleQtd/ControleQtd';



const Produto = () => {

    return (
        <div className={style.produtoContainer}>
            <img src={itemImgExemplo} className={style.itemImg}/>

            <div className={style.descricaoEOpcoes}>
                <h4>Nome Produto</h4>
                <span className={style.descricaoVariacoes}>Tipo, Cor</span>
                <ul className={style.listaOpcoes}>
                    <li className={`${style.primeiraOpcao} ${style.opcaoResponsivo}`}>Excluir</li>
                    <li className={style.opcaoResponsivo}>Salvar</li>
                    <li>Alterar</li>
                    <li className={style.ultimaOpcao}>Comprar agora</li>
                </ul>
            </div>

            <ControleQtd />

            <div className={style.valorTotalContainer}>

                <div className={style.valorTotal}>
                    <span>R$</span>
                    <span className={style.valorReais}>00</span>
                    <span className={style.valorCentavos}>00</span>
                </div>
            </div>

        </div>
    )
}


export default Produto;