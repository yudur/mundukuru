import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 150px;
    background-color: #A64B2A;
    border-radius: 0 0 16px 16px;
    display: flex;
    align-items: center;
    padding: 0 75px;
    transition: border-radius 0.3s ease;

    &.menu-open {
        border-radius: 0;
    }

    @media (max-width: 500px) {
        height: 80px;
        padding: 0 20px;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    position: relative;

    .logo img {
        width: 120px;
        height: auto;
    }

    ul {
        display: flex;
        gap: 60px;
        list-style: none;
        font-size: 20px;

        li a {
            color: #fff;
            text-decoration: none;
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
    }

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logo img {
            width: 77px;
        }
        
        ul {
            margin-bottom: 25px;
        }
    }

    @media (max-width: 500px) {
        flex-direction: row;
        justify-content: space-between;

        .logo img {
            width: 60px;
        }

        ul {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background-color: #A64B2A;
            flex-direction: column;
            gap: 0;
            margin: 0;
            padding: 20px 0;
            border-radius: 0 0 16px 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;

            &.open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }

            li {
                text-align: center;
                padding: 10px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);

                &:last-child {
                    border-bottom: none;
                }

                a {
                    font-size: 18px;
                    padding: 10px 20px;
                    display: block;
                }
            }
        }
    }
`

export const MenuButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: #fff;
        border-radius: 2px;
        transition: all 0.3s ease;
        transform-origin: center;
    }

    &.open {
        span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        span:nth-child(2) {
            opacity: 0;
        }

        span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }

    @media (max-width: 500px) {
        display: flex;
    }
`