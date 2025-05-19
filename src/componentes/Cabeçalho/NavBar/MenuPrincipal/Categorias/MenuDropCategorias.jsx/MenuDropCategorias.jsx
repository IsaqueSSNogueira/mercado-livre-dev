

import { useEffect, useRef } from 'react';
import style from './MenuDropCategorias.module.css'

const MenuDropCategorias = ({estadoMenu}) => {

    const menu = useRef(null)

    useEffect(() => {
        if (menu.current && estadoMenu) {
            menu.current.scrollTop = 0;
        }
    }, [estadoMenu])

    return (

            <div className={style.divMenu} style={{ display: estadoMenu ? "block" : "none"}}>
                <span className={style.setaDropdown}></span>
                <ul className={style['lista-menu']} ref={menu}>
                    <li><a href='#' target='_self'>Veículos</a></li>
                    <li><a href='#' target='_self'>Supermecado</a></li>
                    <li><a href='#' target='_self'>Tecnologia</a></li>
                    <li><a href='#' target='_self'>Casa e móveis</a></li>
                    <li><a href='#' target='_self'>Eletrodomésticos</a></li>
                    <li><a href='#' target='_self'>Esportes e Fitness</a></li>
                    <li><a href='#' target='_self'>Ferramentas</a></li>
                    <li><a href='#' target='_self'>Contrução</a></li>
                    <li><a href='#' target='_self'>Industria e comércio</a></li>
                    <li><a href='#' target='_self'>Saúde</a></li>
                    <li><a href='#' target='_self'>Acessorios para veículos</a></li>
                    <li><a href='#' target='_self'>Beleza e cuidado pessoal</a></li>
                    <li><a href='#' target='_self'>Moda</a></li>
                    <li><a href='#' target='_self'>Bebês</a></li>
                    <li><a href='#' target='_self'>Brinquedos</a></li>
                    <li><a href='#' target='_self'>Imóveis</a></li>
                    <li><a href='#' target='_self'>Compra Internacional</a></li>
                    <li><a href='#' target='_self'>Produtos sustentáveis</a></li>
                    <li><a href='#' target='_self'>Mais vendidos</a></li>
                    <li><a href='#' target='_self'>Lojas oficiais</a></li>
                    <li><a href='#' target='_self'>Ver mais categorias</a></li>
                </ul>
            </div>
    )
}

export default MenuDropCategorias;