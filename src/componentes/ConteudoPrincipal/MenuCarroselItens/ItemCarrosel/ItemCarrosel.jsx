
import style from './ItemCarrosel.module.css';

const ItemCarrosel = ( {titulo, imgSource, descriçaoItem, textoBotao} ) => {

    
    return(
        <a href="" target="_self">
                <div className={style['div-item']}>
                    <h2 className={style['titulo']}>{titulo}</h2>
                    <img src={imgSource} className={style['img-item']}></img>
                    <p className={style['descrição-item-assistencia']}>{descriçaoItem}</p>
                    <button className={style['botao-assistencia']}>{textoBotao}</button>  
                </div>
            </a>
    )
}

export default ItemCarrosel;