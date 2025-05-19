
import style from './ShoppingInfo.module.css';
import iconPayment from './../../../assets/icons/payment.svg';
import iconShipping from './../../../assets/icons/shipping.svg';
import iconProtected from './../../../assets/icons/protected.svg';

const ShoppingInfo = () => {

    return(

        <div className={style['container-shopping-info']}>
            
            <div className={`${style['container-item']} ${style['container-item-barra']}`}>
                <img src={iconPayment}></img>
                <h3>Escolha como pagar</h3>
                <p>Com Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x sem cartão com a Linha de Crédito.</p>
                <a href="">Como pagar com mercado pago</a>            
            </div>

            <div className={`${style['container-item']} ${style['container-item-barra']}`}>
            <img src={iconShipping}></img>
                <h3>Frete grátis por ser Meli+</h3>
                <p>Além disso, você pode escolher um dia da semana para receber suas compras com "Seu dia de entregas".</p>
                <a href="">Saiba mais sobre este benefício</a>    
            </div>

            <div className={`${style['container-item']} ${style.containerSeguranca} ${style['container-item-barra-responsivo']}`}>
            <img src={iconProtected}></img>
                <h3>Segurança, do início ao fim</h3>
                <p>Você não gostou do que comprou? Devolva! No Mercado Livre não há nada que você não possa fazer, porque você está sempre protegido.</p>
                <a href="">Como te protegemos</a>    
            </div>
        </div>

    )
}

export default ShoppingInfo;