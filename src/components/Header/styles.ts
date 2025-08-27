import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 150px;
    background-color: #A64B2A;
    border-radius: 0 0 16px 16px;
    display: flex;
    align-items: center;
    padding: 0 75px;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;

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
`