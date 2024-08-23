import styled from "styled-components";

export const GreetingsCon = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 52px;
  padding-right: 52px;


  text-align: center;
  white-space: pre-wrap;

  & h2,
  p {
    font-family: "Jose";
  }
`;

export const Title = styled.h2`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 16px;

  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 10.83px;
  line-height: 1.05;
  & > span:first-child {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.color.brown};
  }
`;

export const Content = styled.p`
font-size: 14px;
line-height: 1.57;

color: ${(({theme})=> theme.color.brown)};
`
