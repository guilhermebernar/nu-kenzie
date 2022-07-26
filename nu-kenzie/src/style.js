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
