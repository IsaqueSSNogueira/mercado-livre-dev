
import styles from './RodapePrincipal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

const RodapePrincipal = () => {

    return(
        <div className={styles['rodape-principal']}>
            <nav className={styles['nav-footer-links']}>
                <ul>{/*naoEssencial é para o responsivo*/}
                    <li><a href='' target="_self">Trabalhe conosco</a></li>
                    <li><a href='' target="_self">Termos<span className={styles.naoEssencial}> e condições</span></a></li>
                    <li><a href='' target="_self">Promoções</a></li>
                    <li><a href='' target="_self"><span className={styles.naoEssencial}>Como cuidamos da sua </span>privacidade</a></li>
                    <li><a href='' target="_self"><span className={styles.naoEssencial}><FontAwesomeIcon icon={faUniversalAccess} className={styles['icon-acessibilidade']}/></span> Acessibilidade</a></li>
                    <li><a href='' target="_self">Contato</a></li>
                    <li><a href='' target="_self"><span className={styles.naoEssencial}>Informações sobre </span>seguros</a></li>
                    <li><a href='' target="_self"><span className={styles.naoEssencial}>Programa de </span>Afiliados</a></li>
                    <li><a href='' target="_self">Black friday</a></li>
                </ul>
            </nav>

            <div className={styles['texto-sobre']}>
                <p>Copyright © 1999-2024 Ebazar.com.br LTDA.</p>
                <p>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</p>
            </div>
        </div>
    )
}

export default RodapePrincipal;