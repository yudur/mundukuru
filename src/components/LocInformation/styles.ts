import { styled } from "styled-components";

export const LocInformationContainer = styled.div`
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 60px;
    margin: 80px 0;

    img {
        width: 30%;
        height: auto;
    }

    
    .text {
        height: 100%;
        width: 50%;
        border-radius: 13px;
        background-color: #4E3B31;
        display: flex;
        gap: 4px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 17px;
            color: #fff;
            width: 80%;

            span {
                color: #C68E3F
            }
        }
    }
`