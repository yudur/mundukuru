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
        padding: 12px 0;
        height: auto;
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

    @media (max-width: 1160px) {
        img {
            height: 100%;
            width: auto;
        }

        .text {
            width: 60%;
            padding: 30px 0;
            p {
                font-size: 14px;
            }
        }
    }

    @media (max-width: 1160px) {
        justify-content: space-around;
        gap: 0;
        img {
            width: 40%;
            height: auto;
        }

        .text {
            p {
                font-size: 12px;
            }
        }
    }

    @media (max-width: 630px) {
        flex-direction: column;
        height: auto;
        gap: 20px;
        padding: 20px 0;

        img {
            width: 90%;
            height: auto;
            border-radius: 13px;
        }

        .text {
            width: 90%;
            padding: 20px 0;

            p {
                font-size: 14px;
            }
        }
    }
`