

import style from './Categoria.module.css';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import MenuDropCategorias from './MenuDropCategorias.jsx/MenuDropCategorias';

const Categoria = () => {


    const [abrirMenu, setAbrirMenu] = useState(false);
    const timeoutRef = useRef(null);  

    const controlarMenu = (estado) => {
        if (estado) {
            setAbrirMenu(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        } else {
            // Define o timeout para fechar após 5 segundos
            timeoutRef.current  = setTimeout(() => {
                setAbrirMenu(false);
            }, 400); // 5000ms = 5 segundos
        }
    };

    // toggle menu fundo
    const visibleMenuFundo = abrirMenu ? style.visibleMenuFundo : null;

    return (
        <>
            <li className={style.categoria} onMouseOver={() => controlarMenu(true)} onMouseOut={() => controlarMenu(false)}>
                <a href="" target="_self" className={style['seta-baixo-link']}>
                    Categorias <FontAwesomeIcon className={style['seta-baixo-icone']} icon={faAngleDown} />
                </a>
                <MenuDropCategorias estadoMenu={abrirMenu} />
            </li>


        {/*menu fundo*/}
        <div className={`${style.menuFundo} ${visibleMenuFundo}`}></div>

        </>
    );
};

export default Categoria;
