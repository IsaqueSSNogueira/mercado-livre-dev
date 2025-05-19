
import style from './ContainerDefinirEnvio.module.css';
import { useRef, useEffect } from 'react';
import DefinirEnvio from './DefinirEnvio/DefinirEnvio';

const ContainerDefinirEnvio = ({ isOpen, funcaoToggle, botaoEnvio }) => {
    
    const areaDefinirEnvio = useRef(null);

    useEffect(() => {
        // Manipula o body e o display do componente após a renderização
        if (isOpen) {
            document.querySelector('body').style.overflowY = "hidden";
            if (areaDefinirEnvio.current) {
                areaDefinirEnvio.current.style.display = "flex";
            }
        } else {
            document.querySelector('body').style.overflowY = "auto";
            if (areaDefinirEnvio.current) {
                areaDefinirEnvio.current.style.display = "none";
            }
        }
    }, [isOpen]); // Só roda o useEffect quando "isOpen" mudar




    return (
        <div className={style.areaDefinirEnvio} ref={areaDefinirEnvio}>
            
            <DefinirEnvio isOpen={isOpen} funcaoToggle={funcaoToggle} botaoEnvio={botaoEnvio} />

        </div>
    );
}

export default ContainerDefinirEnvio;
