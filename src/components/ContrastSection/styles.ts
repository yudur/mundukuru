import { styled } from "styled-components";

export const ContrastSectionContainer = styled.div`
    background-color: #4E3B31;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 90px;
    padding-bottom: 60px;
    margin-bottom: -16px;
    border-radius: 13px 13px 0 0;

    p {
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        color: #fff;

        span {
            color: #C68E3F
        }
    }


    .text {
        height: 100%;
        width: 50%;
        border-radius: 13px;
        background-color: #4E3B31;
        text-align: center;
        display: flex;
        gap: 4px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            width: 80%;
        }
    }

    @media (max-width: 700px) {
        .text {
            width: 90%;
        }
    }
`

export const Work = styled.div`
    display: flex;
    width: 100%;
    height: 360px;
    gap: 20px;

    .main {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 15px;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 36px;
            color: #C68E3F;
        }

        p {
            font-size: 20px;
        }


        @media (max-width: 1185px) {
            p {
                font-size: 16px;
            }

            h2 {
                font-size: 26px;
            }
        }
    }

    @media (max-width: 970px) {
        img {
            width: 25%;
            height: auto;
        }
        gap: 15px;
        justify-content: space-around;

        .main {
            p {
                font-size: 13.8px;
            }

            h2 {
                font-size: 22px;
            }
        }
    }

    @media (max-width: 540px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .main {
            width: 90%;

            p {
                font-size: 9px;
            }

            h2 {
                font-size: 18px;
            }
        }
    }
`