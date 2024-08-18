import styled from "styled-components";

type Props = {
    source:string,
    aspectRatio?: number;
}

export const ImgCon = styled.div<Props>`
position: relative;
width: 100%;
padding-top: ${({ aspectRatio = 56.25 }) => aspectRatio}%;

background-image: url(${({source}) => source});
background-size: cover;
background-position: center;
`