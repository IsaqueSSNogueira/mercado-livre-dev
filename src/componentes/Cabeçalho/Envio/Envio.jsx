
import style from "./Envio.module.css"
import { useState, useRef } from 'react';
import localizacaoIcon from "../../../assets/icons/localizacao.png";
import ContainerDefinirEnvio from "./ContainerDefinirEnvio/ContainerDefinirEnvio.jsx";

const Envio = () => {

    const botaoEnvio = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const OpenEnvio = (estado) => {
        setIsOpen(estado)
    }

    return (
        <>
            <div className={style['envio-container']} onClick={() => OpenEnvio(true)} ref={botaoEnvio}>
                <img className={style['localizacao-icone']} src={localizacaoIcon} />
                <span className={style['enviar-para']}>Enviar para:</span>
                <span className={style.city}>Cidade, xxxxxxx</span>
            </div>

            <ContainerDefinirEnvio isOpen={isOpen} funcaoToggle={OpenEnvio} botaoEnvio={botaoEnvio} /> {/*funcaoToggle e botaoEnvio vão pro componente 'definirEnvio', usados pra lógica aplicada */}
        </>
    )
}

export default Envio;