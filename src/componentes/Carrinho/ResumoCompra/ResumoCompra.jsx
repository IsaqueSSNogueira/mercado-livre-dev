

import ListaValores from './ListaValores/ListaValores';
import { useEffect, useState, useRef } from 'react';
import style from './ResumoCompra.module.css'

const ResumoCompra = () => {

    // ref container
    const containerResumoCompra = useRef(null)
    const [posicaoBarra, setPosicaoBarra] = useState(0)
    const [tamanhoTelaAtual, setTamanhoTelaAtual] = useState(0)
    const [alturaTelaAtual, setAlturaTelaAtual] = useState(0)

    // definir posicao
    const definirPosicao = () => {

        if(alturaTelaAtual){
            // menor que 500
            if(tamanhoTelaAtual <= 500 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.fixed500} ${style.containerResumoCompra}`;
                return;
            }

            // menor que 600
            if(tamanhoTelaAtual <= 600 && posicaoBarra >= 505 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.absoluted600} ${style.containerResumoCompra}`;
                return;
            }
            else if(tamanhoTelaAtual <= 600 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.fixed600} ${style.containerResumoCompra}`;
                return;
            }

            // menor que 730
            if(tamanhoTelaAtual <= 730 && posicaoBarra >= 600 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.absolute730} ${style.containerResumoCompra}`;
                return
            }
            else if(tamanhoTelaAtual <= 730 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.fixed730} ${style.containerResumoCompra}`;
                return;
            }

            // menor que 1030
            if(tamanhoTelaAtual <= 1030 && posicaoBarra >= 555 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.absolute1030} ${style.containerResumoCompra}`;
                return;
            }
            else if(tamanhoTelaAtual <= 1030 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.fixed1030} ${style.containerResumoCompra}`;
                return;
            }

            // maior que 1030
            if(tamanhoTelaAtual < 1200 && containerResumoCompra.current && posicaoBarra <= 448){
                containerResumoCompra.current.className = `${style.containerResumoCompra} ${style.acima1030Fixed}`;
                return;
            }
            else if(tamanhoTelaAtual < 1200 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.containerResumoCompra} ${style.acima1030Absolute}`;
                return;
            }

            //maior que 1200
            if(tamanhoTelaAtual > 1200 && containerResumoCompra.current && posicaoBarra <= 420){
                containerResumoCompra.current.className = `${style.containerResumoCompra} ${style.acima1030Fixed}`;
                return;
            }
            else if(tamanhoTelaAtual > 1200 && containerResumoCompra.current){
                containerResumoCompra.current.className = `${style.containerResumoCompra} ${style.acima1030Absolute}`;
                return;
            }
        }
    }

    // tamanho tela
    const rendimencionar = () => {
        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;
        setTamanhoTelaAtual(larguraTela);
        setAlturaTelaAtual(alturaTela)
    }

    // posicao barra
    const calcularPosicaoBarra = () => {
        const alturaBarra = window.scrollY;
        setPosicaoBarra(alturaBarra)
    }



    // useEffect pra definir eventos
    useEffect(() => {
        
        rendimencionar()
        calcularPosicaoBarra()
        window.addEventListener('resize', rendimencionar)
        window.addEventListener('orientationchange', rendimencionar)
        window.addEventListener('scroll', calcularPosicaoBarra)
        return () => {
            window.removeEventListener('resize', rendimencionar)
            window.removeEventListener('orientationchange', rendimencionar);
            window.removeEventListener('scroll', calcularPosicaoBarra)
        }
    }, [])

    useEffect(() => {
        definirPosicao();
    }, [tamanhoTelaAtual, posicaoBarra]);


    return (

        <div className={style.containerResumoCompra} ref={containerResumoCompra}>

            <div className={style.tituloContainer}>
                <h3 className={style.titulo}>Resumo da compra</h3>
            </div>
           
            <ListaValores />
            
            <button className={style.botaoComprar}>Continuar a compra</button>
        </div>
    )
}

export default ResumoCompra;