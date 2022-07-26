import styled from "styled-components";

export const CardTransacao = styled.li`
    background: #F8F9FA;
    border-radius: 4px;
    margin-bottom: 3vh;
    padding:2vh;
`

export const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 1.8fr 0.2fr;
`

export const Infos = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2vh 0 0;
`
export const ButtonExcluir = styled.button`
    cursor: pointer;
    width: 4vh;
    border: none;
    border-radius: 4px;
`
export const ImgExcluir = styled.img`
    width: 100%;
`

export const DecricaoTitlest = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #212529;
`

export const Tipo = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #212529;
`
export const Valor = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #212529;
`