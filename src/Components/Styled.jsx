import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
const Display = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Main = styled.main`
background-color: #F66000;
height: 100vh;
`;

export const H1 = styled.h1`
    color: white;
    width: 29vw;
    height: 30vh;
    font-weight: 200;
    font-size: 5rem;
    ${Display}
    justify-content:start;
    flex-direction: column;
`
export const BoxOne = styled.div`
height: 45vh;
width: 40.8vw;
${Display}
flex-direction: column;
justify-content: space-around;
align-items: end;
gap: 30px;
h2{
 color: white; 
 font-weight: 200; 
 width: 31.9vw;
 font-size: 3rem;
}
span{
    width: 32vw;
    ${Display}
    justify-content: end;
    position: absolute;
    top: 90%;
    left: 2%;
    font-size: 1.5rem;
    color: white;
}
`
export const AncoraH2 = styled.div`
    width: 28.5vw;
    height: 15vh;
    position: relative;
    bottom: 3%;
`

export const BoxTwo = styled.section`
    height: 50vh;
    width: 100%;
    ${Display}
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export const BoxItem = styled.div`
    width: 48vw;
    height: 50vh;
    ${Display}
    flex-wrap: wrap;
    justify-content: space-evenly;
    img{
        width: 10vw;
        border-radius: 10px;
        cursor: pointer;
    }
`
export const Carrinho = styled.div`
    width: 27.5vw;
    height: 88vh;
    border-radius: 120px;
    position: absolute;
    bottom: 0;
    ${Display}
    flex-direction: column;
    background-color: #D3C5BB;
`
export const Ancora = styled.div`
    width: 30vw;
    height: 50vh;
    position: relative;
`
export const SecondCarrinho = styled.div`
    width: 22.2vw;
    height: 48vh;
    background-color: #D3C5BB;
    border-radius: 88px;
    ${Display}
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    h3{
        width: 12vw;
        height:7vh;
        ${Display}
        flex-direction:column;
        justify-content: space-around;
        font-size: 1.1rem;
        text-align: center;
    }
    img{
        width: 10vw;
        border-radius: 10px
    }
`

export const MaisMenos = styled.div`
    width: 12vw;
    height: 7vh;
    ${Display}
    justify-content: space-around;
    align-items:center;
    border-radius: 100px;
    background-color: #D3C5BB;
    button{
        width: 30px;
        height: 30px;
        border: solid 1px;
        border-radius: 80px;
        font-size: 1.5rem;
        background-color: #D3C5BB;
        cursor: pointer;
    }
`   

