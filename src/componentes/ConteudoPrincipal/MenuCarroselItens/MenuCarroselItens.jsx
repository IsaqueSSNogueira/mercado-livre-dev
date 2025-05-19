
import style from "./MenuCarroselItens.module.css";
import ItemCarrosel from "./ItemCarrosel/ItemCarrosel";
import { useRef, useState, useLayoutEffect } from "react";


// itens carrosel
import imgMeiosPagamento from './../../../assets/principal-carrosel-itens/meios-pagamento.svg';
import imgMenosDe100Reais from './../../../assets/principal-carrosel-itens/produtos-menos-100reais.svg';
import imgMaisVendidos from './../../../assets/principal-carrosel-itens/mais-vendidos.svg';
import imgCompraSegura from './../../../assets/principal-carrosel-itens/compra-segura.svg';
import imgLojasOficiais from './../../../assets/principal-carrosel-itens/lojas-oficiais.svg';
import imgCategorias from './../../../assets/principal-carrosel-itens/categorias.svg';
import Botoes from "./Botoes/Botoes";

const itensCarrosel = [
    {
        tipo:"assistencia",
        titulo:"Meios de pagamento",
        imgSource:imgMeiosPagamento,
        descricaoItem:"Pague suas contas com rapidez e segurança.",
        valorAnterior:'',
        valorOferta:'',
        textoBotao:"Mostrar meios"
    },
    {
        tipo:"assistencia",
        titulo:"Menos de R$100",
        imgSource:imgMenosDe100Reais,
        descricaoItem:"Confira produtos com preços baixos.",
        valorAnterior:'',
        valorOferta:'',
        textoBotao:"Mostrar produtos"
    },
    {
        tipo:"assistencia",
        titulo:"Mais vendidos",
        imgSource:imgMaisVendidos,
        descricaoItem:"Explore produtos que são tendência.",
        valorAnterior:'',
        valorOferta:'',
        textoBotao:"Ir para os mais vendidos"
    },
    {
        tipo:"assistencia",
        titulo:"Compra garantida",
        imgSource:imgCompraSegura,
        descricaoItem:"Você pode devolver suas compras grátis.",
        valorAnterior:'',
        valorOferta:'',
        textoBotao:"Como funciona"
    },
    {
        tipo:"assistencia",
        titulo:"Lojas oficiais",
        imgSource:imgLojasOficiais,
        descricaoItem:"Suas marcas preferidas.",
        valorAnterior:'',
        valorOferta:'',
        textoBotao:"Mostrar loja"
    },
    {
        tipo:"assistencia",
        titulo:"Nossas categorias",
        imgSource:imgCategorias,
        descricaoItem:"Encontre celulares, roupas, imóveis e muito mais.",
        valorAnterior:'',
        valorOferta:'',
        textoBotao:"Ir para Categorias"
    },
]



const MenuCarroselItens = () => {


    // carrosel dinamico

    const containerRef = useRef(null)
    const containerPrincipalRef = useRef(null)
    const [posicaoContainerTela, setPosicaoContainerTela] = useState(0)
    const [larguraContainer, setLarguraContainer] = useState(0);

    useLayoutEffect(() => {
        const atualizarLargura = () => {
            if (containerRef.current) {
                const novaLargura1 = containerRef.current.clientWidth;
                const novaLargura2 = containerPrincipalRef.current.clientWidth;
                setLarguraContainer(novaLargura1 - novaLargura2);
            }
        };

        const retornar = () => {
            setPosicaoContainerTela(0);
            if (containerRef.current) {
                containerRef.current.style.transform = `translateX(0px)`;
            }
        };
    

        atualizarLargura(); // Executa ao montar
        window.addEventListener('resize', atualizarLargura); // Atualiza na mudança de tamanho da janela
        window.addEventListener('resize', retornar)
        return () => {
            window.removeEventListener('resize', atualizarLargura); // Limpa o listener ao desmontar
            window.removeEventListener('resize', retornar); // Limpa o listener ao desmontar
        };
    }, []);


    const moverCarrosel = (lado) => {
        if(lado === 'right' && larguraContainer > posicaoContainerTela){
            setPosicaoContainerTela(prev => {
                const novaPosicao = prev + 180;
                if(larguraContainer > novaPosicao){
                    containerRef.current.style.transform = `translateX(-${novaPosicao}px)`;
                }
                else{
                    containerRef.current.style.transform = `translateX(-${larguraContainer}px)`;
                }
                return novaPosicao;
            })
        }
        else if(lado === 'left' && posicaoContainerTela > 0){
            setPosicaoContainerTela(prev => {
                const novaPosicao = prev - 180;
                containerRef.current.style.transform = `translateX(-${novaPosicao}px)`;
                return novaPosicao;
        })
    }}

    return(
        <div className={style['div-menu-carrosel-itens']}>
            <Botoes lado='left' onClick={() => moverCarrosel('left')} />
            <div className={style.containerIntermediario}  ref={containerPrincipalRef}>
                <div className={style['container-itens']} ref={containerRef}>
                    {itensCarrosel.map((item, index) => (
                        <ItemCarrosel
                        key={index}
                        titulo={item.titulo}
                        imgSource={item.imgSource}
                        descriçaoItem={item.descricaoItem}
                        valorAnterior={item.valorAnterior}
                        valorOferta={item.valorOferta}
                        textoBotao={item.textoBotao}
                        />
                    ))}
                </div>
            </div>
            <Botoes lado='right' onClick={() => moverCarrosel('right')} />
      </div>
    )
}


export default MenuCarroselItens;



