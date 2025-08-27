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
    text-align: center;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        font-style: black;
        font-size: 70px;
        color: #C68E3F;
    }

    @media (max-width: 1175px) {
        h1 {
            font-size: 60px;
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 36px;
        }
    }
`


export function TitleSection({ text }: TitleProps) {
    return (
        <TitleContainer>
            <h1>{text}</h1>
        </TitleContainer>
    )
}