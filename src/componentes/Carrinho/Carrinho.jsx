
import style from "./Carrinho.module.css";
import SessaoItens from "./SessaoItens/SessaoItens.jsx";
import ResumoCompra from "./ResumoCompra/ResumoCompra.jsx";


const Carrinho = () => {

    return (
        
        <main className={style.containerPrincipal}>
            <div className={style.sessaoItensContainer}>
              <SessaoItens />
              <SessaoItens />
            </div>
            <ResumoCompra />
        </main>
    )
}

export default Carrinho;