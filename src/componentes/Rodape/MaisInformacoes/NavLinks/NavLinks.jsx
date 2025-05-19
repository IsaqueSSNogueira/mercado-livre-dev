
import styles from './NavLinks.module.css';

const NavLinks = () => {
    return (
        <nav className={styles['nav-rodape-link']}>
            <ul className={`${styles['lista-links']} ${styles.responsivo3}`}>
                <li className={styles['titulo-lista']}>Sobre o</li>
                <li>Mercado Livre</li>
                <li>Investor relations</li>
                <li>Tendências</li>
                <li>Sustentabilidade</li>
                <li>Blog</li>
            </ul>

            <ul className={styles['lista-links']}>
                <li className={styles['titulo-lista']}>Outros sites</li>
                <li>Desenvolvedores</li>
                <li>Mercado Pago</li>
                <li>Envios</li>
                <li>Mercado Shops</li>
                <li>Mercado Ads</li>
            </ul>

            <ul className={styles['lista-links']}>
                <li className={styles['titulo-lista']}>Contato</li>
                <li>Comprar</li>
                <li>Vender</li>
                <li>Problemas</li>
                <li>Segurança</li>
            </ul>

            <ul className={styles['lista-links']}>
                <li className={styles['titulo-lista']}>Redes sociais</li>
                <li>X</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
            </ul>

            <ul className={`${styles['lista-links']} ${styles.responsivo2}`}>
                <li className={styles['titulo-lista']}>Minha conta</li>
                <li>Resumo</li>
                <li>Favoritos</li>
                <li>Vender</li>
            </ul>

            <ul className={styles['lista-links']}>
                <li className={styles['titulo-lista']}>Assinaturas</li>
                <li>Meli+</li>
                <li>Disney+</li>
                <li>Deezer Premium</li>
                <li>Max</li>
                <li>Paramount+</li>
            </ul>

            <ul className={`${styles['lista-links']} ${styles.responsivo1}`}>
                <li className={styles['titulo-lista']}>Temporadas</li>
                <li>Dia do consumidor</li>
                <li>Dia das mães</li>
                <li>Black Friday</li>
                <li>Descontaco</li>
            </ul>
        </nav>
    );
};

export default NavLinks;
