import styled from "styled-components"
import ImagemFooter from "../assets/img-footer.png" 

export default function Footer(){
    const EstiloFooter = styled.footer
    `
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        padding:30px;
        height:20vh;
        background-color:#FFA0D9;
        a{
            font-size:1.5em;
            color:white;
            text-decoration:underline;
        }
    `

    const EstiloImgFooter = styled.figure
    `
        img{
            height:110px;
            width:120px;
        }
    `


    return(
        <EstiloFooter>
            <p><a href="https://www.gov.br/inca/pt-br" target="_blank" title="Acessar página">Instituto Nacional de Câncer - INCA</a></p>
            <EstiloImgFooter>
                <img src={ImagemFooter} alt="Imagem representativa de pessoa associada ao câncer de mama" />
            </EstiloImgFooter>
            <p><a href="https://www.uicc.org/events/special-focus-dialogue-rethinking-pink-october-how-increase-engagement-public-virtually" target="_blank" title="Acessar página">Union for International Cancer Control (UICC)</a></p>
        </EstiloFooter>
    )
}