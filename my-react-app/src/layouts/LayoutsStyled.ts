import styled from "styled-components";


export const SharedLayoutStyled = styled.div`
position: relative;
overflow: auto;

min-width: 320px;
max-width:1280px;
min-height: 100vh;

display: flex;
flex-direction: column;

background: linear-gradient(${({ theme }) => theme.color.bg});
`

export const Header = styled.header`
position: relative;

padding-top: 32px;
padding-bottom: 33px;
padding-left: 32px;
`
