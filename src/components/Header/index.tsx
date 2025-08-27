import { HeaderContainer, NavContainer, MenuButton } from "./styles";
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

import logoImage from "../../global/assets/LOGO.svg";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer className={isMenuOpen ? 'menu-open' : ''}>
            <NavContainer>
                <div className="logo">
                    <Link to="/">
                        <img src={logoImage} alt="Logo" />
                    </Link>
                </div>

                <MenuButton onClick={toggleMenu} className={isMenuOpen ? 'open' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuButton>

                <ul className={isMenuOpen ? 'open' : ''}>
                    <li><Link to="/munduruku" onClick={() => setIsMenuOpen(false)}>Munduruku</Link></li>
                    <li><Link to="/yanomami" onClick={() => setIsMenuOpen(false)}>Yanomami</Link></li>
                    <li><Link to="/kokama" onClick={() => setIsMenuOpen(false)}>Kokama</Link></li>
                </ul>
            </NavContainer>
        </HeaderContainer>
    )
}