import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 400px;
    background-color: #A64B2A;
    border-radius: 16px 16px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    position: relative;

    .copyright {
        width: 100%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4E3B31;
        font-family: "Poppins", sans-serif;
        font-weight: 800;
        font-style: bold;
        font-size: 14px;
    }

    @media (max-width: 600px) {
        height: auto;

        .copyright {
            font-size: 12px;
        }
    }
`

export const ContentBox = styled.div`
    width: 90%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    .separation {
        width: 1px;
        height: 80%;
        background-color: #C68E3F;
        border-radius: 1px;
    }

    .logo img {
        margin-top: 40px;
        width: 250px;
        height: auto;
    }

    @media (max-width: 600px) {
        flex-direction: column-reverse;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;

        .separation {
            width: 80%;
            height: 1px;
            margin: 20px 0;
        }

    }
`

export const ContactInfo = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;

    h2 {
        font-size: 50px;
        font-weight: 800;
        margin-bottom: 12px;
        font-family: 'Exo 2', sans-serif;
        font-weight: 900;
        font-style: bold;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-weight: 900;
        font-style: black;
        font-size: 18px;
        position: relative;
        transition: color 0.3s ease;

        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #C68E3F;
            transition: width 0.3s ease;
        }

        &:hover {
            color: #C68E3F;

            &::after {
                width: 100%;
            }
        }
    }

    .instagram, .email {
        margin-top: 30px;
    }

    @media (max-width: 600px) {
        margin: 0;
        margin-bottom: 20px;
    }
`