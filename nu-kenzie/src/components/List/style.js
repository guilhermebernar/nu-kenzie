import styled from "styled-components";

export const CardList = styled.ul`
    list-style: none;
    margin:0;
    padding: 0;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end; 
    margin-bottom: 2vh;
`

export const Button01 = styled.button`

    font-family: 'Nunito';
    background: #E9ECEF;
    border: transparent;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
    margin: 0 2vh 0 0;
    &:hover{
        background: #e9ecef8d;
    }
`
export const Button02 = styled.button`
    font-family: 'Nunito';
    background: #FD377E;
    border: transparent;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
    &:hover{
        background: #fd3780ac;
    }
`