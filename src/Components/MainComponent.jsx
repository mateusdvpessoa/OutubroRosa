import MainImage from "../assets/background-out-rosa.png"
import styled from "styled-components" 
import { useState } from "react" 

export default function MainComponent(){
    const MainEstilo = styled.main
    `   
        display:flex;
        justify-content:center;
        height:88vh;
        color: #FFA0D9;
        font-size: 1.2em;
        font-style: normal;
        font-weight: 400;
    `
    const ListaSintomas = styled.section
    `
        height:80vh;
        width:40vw;
        font-size:1.5em;
        flex-direction:column;
        justify-content:space-evenly;
        gap:10px;
        ol{
            flex-direction: column;
            gap:20px;
            height:70vh;
        }
        li{
            display:flex;
            margin: 20px;
            align-items: center;
            height:10vh;
            text-align: left;
            padding-left:10px;
            font-size:0.8em;
            background-color:#FFA0D9;
            color:white;    
            border-radius:70px;
        }
    `
    const EstiloImgMain = styled.figure
    `
        width:50vw;
        height:85vh;
        background-image:url('${MainImage}');
        background-position:center;
        background-size:contain;
        background-repeat:no-repeat;
    `
    const [sintomas,setSintomas] = useState([
        'Nódulo palpável na mama',
        'Pele avermelhada ou retraída, sem resposta a tratamentos tópicos',
        'Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção',
        'Dor ou inchaço em parte ou na totalidade das mamas',
        'Nódulos cervicais ou na axila'
    ])
    
    return(
        <MainEstilo>
            <ListaSintomas>
                <h1>Os principais sinais de alerta ou sintomas do câncer de mama são:</h1>
                <ol>
                    {sintomas.map((item) =>(
                        <li>{item}</li>
                    ))}
                </ol>
            </ListaSintomas>
            <EstiloImgMain/>
        </MainEstilo>
        )
}