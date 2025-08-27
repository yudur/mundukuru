import { createFileRoute } from "@tanstack/react-router";
import { HomeContainer } from "./styles";
import { TitleSection } from "../components/Text/TitleSection";
import { TribeInformation } from "../components/TribeInformation";

import IndigenousPeople from "../global/assets/indigenous-people.svg";

export const Route = createFileRoute("/")({
    component: Home,
})

function Home() {
    return (
        <HomeContainer>
            <section>
                <TitleSection text="O que é a consciência indígena?" />
            </section>

            <TribeInformation imageUrl={IndigenousPeople}>
                <p>A Semana de <span>Consciência Indígena</span> é um espaço de valorização das culturas, histórias e lutas dos povos originários. No <span>IFBA Campus Irecê</span>, reúne atividades culturais, oficinas, palestras e debates que promovem o respeito à diversidade, o resgate de saberes ancestrais e a reflexão sobre os desafios atuais dos <span>povos indígenas.</span></p>
                <p>Mais que um evento, é uma oportunidade de aprender, reconhecer e fortalecer a resistência indígena, essencial para a construção de uma <span>sociedade justa e plural.</span></p>
            </TribeInformation>

            <section style={{ margin: "2.5rem 0" }}>
                <TitleSection text="Aprecie o nosso trabalho!" />
            </section>
        </HomeContainer>
    )
}