
import style from './MarcadorSlide.module.css'

const MarcadorSlide = ( { estado } ) => {

    return (
        <div className={style.containerContadorSlider}>
            <span className={`${style.point} ${estado === 0 ? style.pointOn : ''}`}></span>
            <span className={`${style.point} ${estado === 1 ? style.pointOn : ''}`}></span>
            <span className={`${style.point} ${estado === 2 ? style.pointOn : ''}`}></span>
            <span className={`${style.point} ${estado === 3 ? style.pointOn : ''}`}></span>
            <span className={`${style.point} ${estado === 4 ? style.pointOn : ''}`}></span>
            <span className={`${style.point} ${estado === 5 ? style.pointOn : ''}`}></span>
            <span className={`${style.point} ${estado === 6 ? style.pointOn : ''}`}></span>
        </div>
    )
}

export default MarcadorSlide;