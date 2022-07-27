import styled from "styled-components";

export const LogoBranca = styled.img`
    width: 10vh;
    margin-bottom: 1vh;
`

export const MainApp = styled.main`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #212529;
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    margin-top: 20vh;
    margin: auto;
    width: 50%;
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
        width: 80%;
    }

`
export const Art = styled.img`
    height: 75%;
    @media(max-width: 600px){
        height: 30vh;
    }
`
export const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vh;
    margin-top: 30vh;
    @media(max-width: 600px){
        margin-top: 25vh;
        padding: 0;
    }
`

export const Div2 = styled.div`
    padding: 3vh;
    margin-top: 18vh;
    @media(max-width: 600px){
        display: flex;
        justify-content: center;
        padding: 0;
        margin-top: 7vh;
    }
`
export const FraseDestaque = styled.h1`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    color: #FFFFFF;
    margin: 3vh 0 3vh 0;
`
export const FraseSecundaria = styled.h2`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0 0 3vh 0;

`
export const ButtonPink = styled.button`
    width:100%;
    color: white;
    background: #FD377E;
    border: 2px solid #FD377E;
    border-radius: 8px;
    height: 5vh;
    cursor: pointer;
`
