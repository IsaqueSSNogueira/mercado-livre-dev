
import styles from './ConteudoPrincipal.module.css';
import MenuCarroselItens from './MenuCarroselItens/MenuCarroselItens.jsx';
import ShoppingInfo from './ShoppingInfo/ShoppingInfo.jsx';
import AreaSlider from './AreaSlider/AreaSlider.jsx'



const ConteudoPrincipal = () => {

    return (
        <main className={styles['principal']}>
            <AreaSlider />
            <MenuCarroselItens />
            <ShoppingInfo />
        </main>
    )
}

export default ConteudoPrincipal;