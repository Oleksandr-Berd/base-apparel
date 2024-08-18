import styled from "styled-components";

export const GreetingsCon = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 32px;
  padding-right: 32px;

  text-align: center;

  & h2,
  p {
    font-family: "Jose";
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  white-space: pre-wrap;

  & > span:first-child {
    color: ${({ theme }) => theme.color.brown};
  }
`;
