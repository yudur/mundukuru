import { styled } from "styled-components";

export const TribeInformationContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .image {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 13px 13px 0;
        background-color: #4E3B31;

        img {
            width: 80%;
            height: auto;
            object-fit: cover;
        }
    }

    .text {
        height: 100%;
        width: 50%;
        border-radius: 13px 0 0 13px;
        background-color: #4E3B31;
        display: flex;
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