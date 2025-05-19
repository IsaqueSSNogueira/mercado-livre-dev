
import style from './SlideC.module.css';


const SlideC = ({ img }) => {

    return (

        <div className={style.containerSlide}>
            <div className={style.slide} style={{backgroundImage: `url(${img})`}}>
            </div>
        </div>
    )
}

export default SlideC;