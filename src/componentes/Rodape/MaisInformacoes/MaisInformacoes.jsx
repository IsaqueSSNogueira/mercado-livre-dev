
import style from './MaisInformacoes.module.css';
import { useState } from 'react';

import NavLinks from './NavLinks/NavLinks';
import BotaoMaisInfo from './BotaoMaisInfo/BotaoMaisInfo.jsx';

const MaisInformacoes = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpandCollapse = () => {
        setIsExpanded(!isExpanded);
    }

    return(
        <div className={style['container-base']}>
             <BotaoMaisInfo status={isExpanded} onclick={toggleExpandCollapse} />
            <div className={`${style['container-mais-informacoes']} ${isExpanded ? '' : style['container-mais-informacoes-fechado']}`}>
                <NavLinks />
            </div>
        </div>

    );
}

export default MaisInformacoes;
