import styled from "styled-components";

export const LogoCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & h1{
    text-transform: uppercase;

font-size: 12px;
letter-spacing: 5px;

    color: ${({theme}) => theme.color.black};
  }
`;

export const CircleStyled = styled.div`
  position: relative;
  width: 19.62px;
  height: 19.62px;
  margin-right: calc(7px + 5px);
  border-radius: 50%;
  background: ${({theme})=> theme.color.white};
  &::before {
    content: "";
    position: absolute;
    top: -5px; 
    left: -5px;
    width: calc(
      100% + 10px
    ); 
    height: calc(
      100% + 10px
    );
    border-radius: 50%;
    background: linear-gradient(${({theme})=> theme.color.grad});
    z-index: -1;
  }
`;
