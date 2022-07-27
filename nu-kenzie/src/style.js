import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    padding: 0 20vh 0 20vh;

    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
        padding: 0 5vh 0 5vh;
    }
    @media(max-width: 880px){
        padding: 0 5vh 0 5vh;
    }
`
export const ContainerForm = styled.div`
    margin-top: 8vh;
`
export const ContainerList = styled.div`
    margin: 8vh 0 0 3vh;
    @media(max-width: 600px){
    margin: 0;
    }

`
export const CardVazio1 = styled.div`
    background: #edededda;
    border-radius: 4px;
    margin-bottom: 3vh;
    padding:2vh;
    height: 4vh;
`
export const CardVazio2 = styled.div`
    background: #f8f9fab3;
    border-radius: 4px;
    margin-bottom: 3vh;
    padding:2vh;
    height: 4vh;
`

export const CardVazio3 = styled.div`
    background: #f8f9fa75;
    border-radius: 4px;
    margin-bottom: 3vh;
    padding:2vh;
    height: 4vh;
`