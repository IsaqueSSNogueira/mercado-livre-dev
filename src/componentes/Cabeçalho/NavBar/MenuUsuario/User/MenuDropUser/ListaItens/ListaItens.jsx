

import style from './ListaItens.module.css';

const listaItens = () => {

    return (
        <ul className={style['lista-links']}>
            <li><a href="#" target="_self">Compras</a></li>
            <li><a href="#" target="_self">Histórico</a></li>
            <li><a href="#" target="_self">Perguntas</a></li>
            <li><a href="#" target="_self">Opiniões</a></li>
            <li><a href="#" target="_self">Emprestimos</a></li>
            <li><a href="#" target="_self">Assinaturas</a></li>
            <li><a href="#" target="_self">Mercado Play</a></li>
            <li><a href="#" target="_self">Faturamento</a></li>
            <li><a href="#" target="_self">Vender</a></li>
            <li><a href="#" target="_self">Sair</a></li>
        </ul>
    )
}

export default listaItens;