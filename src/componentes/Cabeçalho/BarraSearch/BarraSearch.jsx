

import style from './BarraSearch.module.css';
import searchIcon from "./../../../assets/icons/search-icon.png";

const BarraSearch = () => {

    return (
        <div className={style['search-div']}>
            <input type="text" className={style['search-input']} placeholder="Buscar produtos, marcas e muito mais..." />
                <button className={style['search-button-icon']}>
                    <img src={searchIcon} className={style['search-icon']} />
                </button>
        </div>
    )
}

export default BarraSearch;