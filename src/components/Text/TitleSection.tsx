import styled from "styled-components";

interface TitleProps {
    text: string;
}

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 38px 0;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        font-style: black;
        font-size: 70px;
        color: #C68E3F;
    }
`


export function TitleSection({ text }: TitleProps) {
    return (
        <TitleContainer>
            <h1>{text}</h1>
        </TitleContainer>
    )
}