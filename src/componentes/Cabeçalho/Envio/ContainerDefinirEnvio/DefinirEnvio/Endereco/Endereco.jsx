
import style from './Endereco.module.css';

const Endereco = () => {

    return (

        <div className={style.containerEndereco}>
            <button></button>
            <div className={style.containerInfo}>
                <h4>Rua Flávio de Albuquerque, 123</h4>
                <p>CEP - 01234-567 - Cidade Exemplo, SP</p>
                <p>João Silva de Souza - (11) 12345-0000</p>
            </div>
        </div>
    )
}


export default Endereco;