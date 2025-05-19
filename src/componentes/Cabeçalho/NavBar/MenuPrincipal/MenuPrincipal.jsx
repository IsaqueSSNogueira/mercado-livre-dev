

import style from './MenuPrincipal.module.css';
import Categoria from './Categorias/Categoria.jsx'


const MenuPrincipal = () => {
    return (
        <div className={style['nav-principal']}>
            <ul  className={style['lista-links']}>
                <Categoria />
                <li><a href="" target="_self">Ofertas</a></li>
                <li><a href="" target="_self">Cupons</a></li>
                <li><a href="" target="_self">Supermercado</a></li>
                <li><a href="" target="_self">Modas</a></li>
                <li>
                    <a href="" target="_self" className={style['mercado-play']}><span className={style['gratis-mercado-play']}>Grátis</span>Mercado Play</a>
                </li>
                <li><a href="" target="_self">Vender</a></li>
                <li><a href="" target="_self">Contato</a></li>
            </ul>
        </div>
    )
}

export default MenuPrincipal;