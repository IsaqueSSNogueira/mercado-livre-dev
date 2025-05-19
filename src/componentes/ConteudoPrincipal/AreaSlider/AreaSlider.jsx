
import { useState, useEffect } from 'react';
import style from './AreaSlider.module.css'

// componentes
import GradienteSlide from './GradienteSlide/GradienteSlide.jsx';
import SetaDireita from './Setas/SetaDireita/SetaDireita.jsx';
import SetaEsquerda from './Setas/SetaEsquerda/SetaEsquerda.jsx';
import MarcadorSlide from './MarcadorSlide/MarcadorSlide.jsx';
import Slider from './Slide/Slider.jsx';


const imgs = [1, 2, 3, 4, 5, 6, 7]


const AreaSlider = () => {

        // Estado para a posição atual
        const [posicaoAtual, setPosicaoAtual] = useState(0); // base da mudança dos slides
        const [pontoAtual, setPontoAtual] = useState(0); // base para a mudança do marcador dos slides
        const [transicaoSlide, setTransicaoSlide] = useState(null) // base para alterar a transição 
        const max = imgs.length - 1; // base para reiniciar os slides
    
        // função principal
        const mudarSlideDireita = () => {
            if(posicaoAtual >= max){
                setPosicaoAtual(0);
                setTransicaoSlide("none")
                setPontoAtual(0)
            }
            else if (posicaoAtual < max) {
                setPosicaoAtual((prev) => prev + 1); // move para a direita
                setTransicaoSlide("transform 0.7s ease-in-out")
                setPontoAtual(posicaoAtual + 1)
            }
        }

        // função retorno
        const mudarSlideEsquerda = () => {
            if (posicaoAtual > 0) {
                setPosicaoAtual((prev) => prev - 1); // move para a esquerda
                setTransicaoSlide("transform 0.7s ease-in-out")
                setPontoAtual(posicaoAtual - 1)
            }
        }

        // automatizar a mudança
        useEffect(() => {
            const intervalo = setInterval(() => {
                mudarSlideDireita();
            }, 5000);    
            return () => clearInterval(intervalo);
        }, [posicaoAtual]);



    // jsx
    return (
        <div className={style.containerSlidePrincipal}>
            <Slider posicaoAtual={posicaoAtual} transicao={transicaoSlide} />
            <SetaEsquerda onClick={() => mudarSlideEsquerda()} />
            <MarcadorSlide estado={pontoAtual} />
            <SetaDireita onClick={() => mudarSlideDireita()} />
            <GradienteSlide />
        </div>
    );
}

export default AreaSlider;
