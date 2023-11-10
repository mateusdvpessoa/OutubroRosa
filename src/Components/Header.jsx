import Laco from "../assets/laco-rosa.png"
import styled from "styled-components"

const HeaderEstilo = styled.header
`  
    display:flex;   
    height:18vh;
    justify-content: space-around;
    align-items:center;
    background: #FFA0D9;
    color:white;
    font-size:2em;
    font-family: 'Caveat',cursive;
    ul{
        display:flex;   
        width:70vw;
        justify-content:space-between;
        list-style-type:none;
    }
    li{
        transition: all 0.4s;   
    }
    li:hover{
        transform:scale(1.1);
    }
    a{
        text-decoration:none;
        color:#FFF;
    }
    a:hover{
        color:#e72bc8;
    }
`
const LacoEstilo = styled.img
`
    height:15vh;
    width:8vw;
`
export default function Header(){
    

    return(
            <HeaderEstilo>
                <figure>
                    <LacoEstilo src={Laco} alt="" />
                </figure>
                <nav>
                    <ul>
                        <li><a href = "#">CARTILHA</a></li>
                        <li><a href = "#">FOLHETO COLO DO ÚTERO</a></li>
                        <li><a href = "#">FOLHETO MAMA</a></li>
                        <li><a href = "#">KIT MATERIAIS</a></li>
                    </ul>
                </nav>
            </HeaderEstilo>   
    )
}