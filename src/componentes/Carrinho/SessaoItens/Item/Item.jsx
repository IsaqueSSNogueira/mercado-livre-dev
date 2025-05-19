
import style from './Item.module.css';
import Loja from './Loja/Loja.jsx'
import Produto from './Produto/Produto';
import FreteGratis from './FreteGratis/FreteGratis';
import Frete from './Frete/Frete';



const Item = () => {

    return(
        <div className={style.itemContainer}>

            <Loja />
            <Produto />
            <Frete />
            <FreteGratis />

        </div>


    )
}

export default Item;