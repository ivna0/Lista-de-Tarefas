import styled from 'styled-components'

export const AddButton = styled.button `
        background: #8e44e8;
        color: #000000;
        height: 40px;
        width: 70px;
        border-radius: 25px;
        border:none;
        margin-left: 12px;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
        `

export const Container = styled.div `
    background: #baa1ea;
    padding: 20px;
    border-radius: 30px;

    h1{
        color: #1a1717;
    }

    input{
        height:30px;
        border-radius: 7px;
        border: none;
        margin-top: 15px;
        outline: none;
        padding-left: 7px;
    }
`

export const Product = styled.div `
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 3px;
    
`
export const TrashButton = styled.button `
        background: transparent;
        border: none; 
        cursor: pointer;
        font-size: 20px;

`
export const ContentProduct = styled.div`
    height: 30%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8%;
    margin: 7px;
    border-radius: 6px;
    padding-left: 6px;

    p{
        text-transform: capitalize; //sempre começa com letra maiuscula
    }
`;
   
