import { HeaderContainer, NavContainer } from "./styles";
import { Link } from '@tanstack/react-router';

export function Header() {
    return (
        <HeaderContainer>
            <NavContainer>
                <div className="logo">logo</div>

                <ul>
                    <li><Link to="/munduruku">Munduruku</Link></li>
                    <li><Link to="/yanomami">Yanomami</Link></li>
                    <li><Link to="/kokama">Kokama</Link></li>
                </ul>
            </NavContainer>
        </HeaderContainer>
    )
}