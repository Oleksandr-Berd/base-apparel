import styled from "styled-components";

interface IFormStyled  {
    isError?:boolean,
    errorIcon?:string,
    aspectRation?:number,
}

export const FormStyled = styled.form`
position: relative;
width: 100%;

margin-top: 32px;
`

export const LabelCon = styled.label<IFormStyled>`
position: relative;


&::after{
visibility: ${({isError}) => !isError ? "hidden" : "initial"};

    position: absolute;
    top:0;
    right:0;

    width: 24px;
    height: 24px;

transform: translateX(-72px); 

    content:" ";
    background-image: url(${({errorIcon}) => errorIcon});
}
`

export const InputStyled = styled.input<IFormStyled>`

width: 100%;

padding-top: 11px;
padding-bottom: 11px;
padding-left: 24px;

background-color: inherit;

line-height: 2;

border: ${({theme, isError}) => isError ? `2px solid ${theme.color.error}`   : `1px solid ${theme.color.brown}` };
border-radius: 28px;

&::placeholder{
    color: ${({theme}) => theme.color.brown};

    line-height: 2;
}


`

export const SubmitBtn = styled.button`
position: absolute;
top: 0;
right: 0;

padding: 15px 28px;
background: linear-gradient(${({theme}) => theme.color.grad});
border: none;
border-radius: 28px;
`