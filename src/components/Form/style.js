import styled from "styled-components";

export const FormAddTransacao = styled.form`
    background: #FFFFFF;
    border: 1px solid #E9ECEF;
    border-radius: 4px;
    margin: 0 0 5vh 0;
    padding: 2vh;
`

export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    margin: 5vh 0 5vh 0;
`

export const CampoInput1 = styled.input`
    height: 3vh;
    width: 98%;
    background: #F8F9FA;
    border: 2px solid #F8F9FA;
    border-radius: 8px;
    margin-top: 1vh;
    margin-bottom: 1vh;
`

export const CampoInput2 = styled.input`
    height: 3vh;
    width: 80%;
    background: #F8F9FA;
    border: 2px solid #F8F9FA;
    border-radius: 8px;
    margin-top: 1vh;
    margin-bottom: 1vh;
`

export const Selecao = styled.select`
    height: 3.6vh;
    width: 100%;
    background: #F8F9FA;
    border: 2px solid #F8F9FA;
    border-radius: 8px;
    margin-top: 1vh;
    margin-bottom: 1vh;
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

export const LabelText = styled.label`
    font-family: 'Nunito';
    color: #212529;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`
export const LabelComment = styled.span`
    font-family: 'Nunito';
    color: #868E96;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
`