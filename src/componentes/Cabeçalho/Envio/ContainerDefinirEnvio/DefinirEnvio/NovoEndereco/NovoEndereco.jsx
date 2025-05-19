

import style from './NovoEndereco.module.css';


const NovoEndereco = () => {

    return (
        <div className={style.containerNovoEndereco}>
            <span className={style.cepLabel}>CEP</span>
            
            <div className={style.definirCepContainer}>
                <div className={style.containerInput}>
                    <input type="text" placeholder='Informar um CEP'/>
                    <button>Usar</button>
                </div>
                <p className={style.naoSeiCep}>Não sei o meu CEP</p>
            </div>
    

            <div className={style.containerEndereçoCompleto}>
                <span className={style.icon}>+</span>
                <p>Adicionar endereço completo</p>
            </div>
        </div>
    )
}

export default NovoEndereco;