
import AreaPrincipal from './AreaPrincipal/AreaPrincipal';
import ListaItens from './ListaItens/ListaItens';
import style from './MenuContainer.module.css';
import { useState, useEffect, useRef } from 'react';



const MenuContainer = ({ estado, onClick} ) => {


    // let estadoAtual = estado ? {zIndex:'18'} : {zIndex:-1};

    // toggle menu
    const [estadoAtual, setEstadoAtual] = useState({ zIndex: -1 });

    useEffect(() => {
        if (estado) {
            setEstadoAtual({ zIndex: 18 });
            document.body.style.overflowY = 'hidden'
        } else {
            setTimeout(() => setEstadoAtual({ zIndex: -1 }), 290);
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [estado]);
    const posicaoContainer = estado ? { right: '0' } : { right: '-450px' };



    // sair com o clique fora da área
    const menuContainer = useRef(null)
    useEffect(() => {        

        const fecharMenu = (event) => {
            if(!menuContainer.current.contains(event.target)){
                onClick()
            }
        }
    
        if (estado){
            document.addEventListener('click', fecharMenu)
            menuContainer.current.scrollTop = 0;
        }

        return () => {
            document.removeEventListener('click', fecharMenu)
        }
        
    }, [estadoAtual])
    

    return (

        <div className={style.menuFundo} style={estadoAtual}>

            <div className={style.menuContainer} style={posicaoContainer} ref={menuContainer} >
                
                <AreaPrincipal onClick={onClick} /> {/*será passado pro MenuHamburguer*/}
                <ListaItens />
  
            </div>
        </div>

    )
}


export default MenuContainer;