import type { JSX } from "react";
import { TitleSection } from "../Text/TitleSection";
import { ContrastSectionContainer, Work } from "./styles";

interface ContrastSectionProps {
    children: React.ReactNode;
    relatedWorks: { title: string; desc: JSX.Element; imgSrc: string }[];
}

export function ContrastSection({ children, relatedWorks }: ContrastSectionProps) {
  return (
    <>
        <ContrastSectionContainer>
            <section>
                <TitleSection text="Aspectos Culturais" />
            </section>

            <div className="text" style={{ marginBottom: "90px" }}>
                {children}
            </div>

            <section>
                <TitleSection text="Obras Relacionadas" />
            </section>

            {relatedWorks.map((work) => (
                <Work key={work.title}>
                    <img src={work.imgSrc} alt="" />

                    <div className="main">
                        <h2>{work.title}</h2>
                        <p>{work.desc}</p>
                    </div>
                </Work>
            ))}
        </ContrastSectionContainer>
    </>
  );
}
