
import styles from './Rodape.module.css';
import RodapePrincipal from './RodapePrincipal/RodapePrincipal.jsx'
import MaisInformacoes from './MaisInformacoes/MaisInformacoes.jsx';

const Rodape = () => {

    return (

        <footer className={styles['footer-container']}>
            
            <MaisInformacoes />
            <RodapePrincipal />

        </footer>
    )
}

export default Rodape;



