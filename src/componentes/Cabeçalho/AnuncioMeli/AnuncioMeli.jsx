

import style from './AnuncioMeli.module.css';
import anuncios from './../../../assets/img/disney+_meli+_assinar.webp';

const AnuncioMeli = () => {

    return (
        <div className={style.anuncios}>
            <img src={anuncios} title="Assine agora e garanta seus beneficios!" alt="Disney+ e Meli+ - Assine agora" className={style['anuncios-img']}/>
        </div>
    )
}

export default AnuncioMeli;