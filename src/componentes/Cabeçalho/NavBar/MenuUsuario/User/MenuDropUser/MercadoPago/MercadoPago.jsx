
import style from './MercadoPago.module.css';
import mercadoPagoSvg2 from './../../../../../../../assets/icons/mercado-pago-v2.svg';
import mercadoPagoSvg3 from './../../../../../../../assets/icons/mercado-pago-v3.svg';
import meliDolar from './../../../../../../../assets/icons/meli-dolar.svg';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MercadoPago = () => {

    const [isExpanded, setIsExpanded] = useState(true)

    const toggleExpandCollapse = () => {
        setIsExpanded(!isExpanded);
    }

    const estilo = isExpanded ? {height: '220px'} : {height:'44px'};
    

    return (
        <div className={style['container-auxiliar']}>
            <div className={`${style['container-principal']}`} style={estilo}>
                <ul>
                    {/*mercado pago*/}
                    <li className={`${style['padrao-intem-grid']} ${'item-lista-mercado-pago'}`} onClick={toggleExpandCollapse}>
                        <img src={mercadoPagoSvg2}></img>
                        <span>Mercado pago</span>
                        <FontAwesomeIcon icon={faAngleDown} className={style[isExpanded ? 'faAgleDown-invertido' : 'faAgleDown']} />
                    </li>
                    <li>
                        <ul> 
                            {/*saldo mercado pago*/}
                            <li>
                                <a href="#" target="_self">
                                    <div className={`${style['padrao-subintem-grid']} ${style['saldo-mercado-pago']}`}>
                                        <img src={mercadoPagoSvg3}></img>
                                        <div className={style['container-text-item']}>
                                            <span className={style['titulo']}>Saldo disponivel</span>
                                            <span className={style['paragrafo']}>A conta que mais rende do Brasil</span>
                                        </div>
                                        <div className={style['saldo-valor']}>
                                            <span className={style['moeda']}>R$</span>
                                            <span className={style['valor-inteiro']}>0</span>
                                            <span className={style['valor-decimais']}>00</span>
                                        </div>
                                    </div>
               
                                </a>

                            </li>
                            {/*meli dolar*/}
                            <li>
                                <a href="#" target="_self">
                                    <div className={style['padrao-subintem-grid']}>
                                    <img src={meliDolar} className={style['padrao-item-img']}></img>
                                    <div className={style['container-text-item']}>
                                        <span className={style['titulo']}>Meli dólar</span>
                                        <span className={style['paragrafo']}>1 MUSD = R$ 5,46</span>
                                    </div>
                                    <div className={style['saldo-valor']}>
                                        <span className={style['moeda']}>R$</span>
                                        <span className={style['valor-inteiro']}>0</span>
                                        <span className={style['valor-decimais']}>00</span>
                                    </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/*validar conta*/}
                    <li className={style['item-validar-conta']}>
                        <a href="" target="_self">
                            <span>Termine de validar sua conta</span>
                            <FontAwesomeIcon icon={faAngleRight} className={style['icon-arrow-right']}></FontAwesomeIcon>    
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MercadoPago;