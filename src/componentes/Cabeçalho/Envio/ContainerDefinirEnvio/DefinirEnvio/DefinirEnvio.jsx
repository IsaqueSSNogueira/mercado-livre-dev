
import style from './DefinirEnvio.module.css';
import { useEffect, useRef } from 'react';
import Endereco from './Endereco/Endereco';
import NovoEndereco from './NovoEndereco/NovoEndereco';

const DefinirEnvio = ({ isOpen, funcaoToggle, botaoEnvio }) => {


    const containePrincipal = useRef(null);

    useEffect(() => {

        const handleClickOutside = (event) => {
            if(containePrincipal.current && !containePrincipal.current.contains(event.target) && botaoEnvio.current && !botaoEnvio.current.contains(event.target)){
                funcaoToggle(false)
            }
        
        }

        if(isOpen){
            document.addEventListener('click', handleClickOutside)
        }

        // função limpeza
        return () => {
            if(!isOpen){
                document.removeEventListener('click', handleClickOutside)
            }
        }

    }, [isOpen])
 

    return (
    
            <div className={style.containerDefinirEnvio} ref={containePrincipal}>
                {/* titulo */}
                <div className={style.containerTitulo}>
                    <h2>Selecione onde quer receber suas compras</h2>
                    <p>Você poderá ver custos e prazos de entrega precisos em tudo que procurar.</p>
                </div>

                {/* meus endereços */}
                <div className={style.containerEscolherEndereço}>
                    <h3>Em um dos seus endereços</h3>
                    <div className={style.containerEnderecos}>
                        <Endereco />
                        <Endereco />
                        <span className={style.editarEndereco}>Editar endereços</span>
                    </div>
                </div>

                {/* novo endereço */}
                <div className={style.containerOutroEndereço}>
                    <h4>Em outro lugar</h4>
                    <div className={style.containerNovoEnderecos}>
                        <NovoEndereco />
                    </div>
                </div>

                <div className={style.containerBotoesFinais}>
                    <button className={style.cancelar} onClick={() => funcaoToggle(false)}>Cancelar</button>
                    <button className={style.salvar} onClick={() => funcaoToggle(false)}>Salvar Alterações</button>
                </div>

            </div>
    );
}

export default DefinirEnvio;
