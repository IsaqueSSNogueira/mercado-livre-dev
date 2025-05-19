

import style from './Slider.module.css';

// componentes
import SlideC from './SlideC/SlideC.jsx';

// imgs slide
import i1 from '../../../../assets/slide-posteres/1.webp';
import i2 from '../../../../assets/slide-posteres/2.webp';
import i3 from '../../../../assets/slide-posteres/3.webp';
import i4 from '../../../../assets/slide-posteres/4.webp';
import i5 from '../../../../assets/slide-posteres/5.webp';
import i6 from '../../../../assets/slide-posteres/6.webp';
import i7 from '../../../../assets/slide-posteres/7.webp';
const imgs = [i1, i2, i3, i4, i5, i6, i7];


const Slider = ({ posicaoAtual, transicao }) => {

    let estiloSlider = {transform: `translateX(-${posicaoAtual * 100}%)`, transition:transicao};

    // jsx
    return (
        <div className={style.containerSlider} style={estiloSlider}>
            {imgs.map((img, index) => (
                <SlideC key={index} img={img} />
            ))}
        </div>
    );
}

export default Slider;
