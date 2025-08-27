import { FooterContainer, ContentBox, ContactInfo } from "./styles";

import instagramIcon from "../../global/assets/instagram.svg";
import YellowLogoImage from "../../global/assets/logo-yellow.svg";

export function Footer() {
    return (
        <>
            <FooterContainer>
                <ContentBox>
                    <ContactInfo>
                        <h2>Contato</h2>

                        <a href="mailto:informaisif@gmail.com">
                            <p className="email">informaisif@gmail.com</p>
                        </a>

                        <div className="instagram">
                            <a href="https://www.instagram.com/informais.if/" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                        </div>
                    </ContactInfo>

                    <div className="separation"></div>

                    <div className="logo">
                        <img src={YellowLogoImage} alt="Logo Amarelo" />
                    </div>
                </ContentBox>

                <div className="copyright">
                    Direitos Reservados © Informais - IFBA Campus Irecê
                </div>
            </FooterContainer>
        </>
    )
}