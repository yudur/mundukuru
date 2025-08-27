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
            width: auto;
            max-height: 80%;
            object-fit: cover;
        }
    }

    .text {
        height: 100%;
        width: 50%;
        border-radius: 13px 0 0 13px;
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

    @media (max-width: 1100px) {
        .image {
            img {
                max-height: 70%;
            }
        }
    }

    @media (max-width: 970px) {
        .image {
            img {
                width: 70%;
                height: auto;
            }
        }
        .text p {
            font-size: 12px;
        }
    }

    @media (max-width: 630px) {
        flex-direction: column;
        height: auto;
        gap: 20px;
        padding: 20px 0;

        .image {
            width: 90%;
            height: auto;
            border-radius: 13px;

            img {
                width: 100%;
                height: auto;
            }
        }

        .text {
            width: 90%;
            border-radius: 13px;
            padding: 40px 0;

            p {
                font-size: 14px;
                width: 90%;
            }
        }
    }
`