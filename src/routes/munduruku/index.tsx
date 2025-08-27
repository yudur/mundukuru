import { createFileRoute } from '@tanstack/react-router'

import { TitleSection } from '../../components/Text/TitleSection'
import { TribeInformation } from '../../components/TribeInformation'

import IndianImage from '../../global/assets/Indian.svg'
import { LocInformation } from '../../components/LocInformation'
import { ContrastSection } from '../../components/ContrastSection'

import bookOneImg from '../../global/assets/relatedWorks/mundukuru/b1.svg'
import bookSecondImg from '../../global/assets/relatedWorks/mundukuru/b2.svg'
import bookThirdImg from '../../global/assets/relatedWorks/mundukuru/b3.svg'


export const Route = createFileRoute('/munduruku/')({
  component: RouteComponent,
})

function RouteComponent() {
    const relatedWorks = [
        {
            title: "O Karaíba: Uma História do Pré-Brasil",
            desc: (
                <>
                    <p>Um romance <span>infantojuvenil</span> que resgata a história e mitologia indígena antes da colonização. É um livro que mistura aventura, <span>resistência cultural</span> e reflexão sobre identidade, trazendo personagens fortes e histórias ancestrais para o público jovem.</p>
                </>
            ),
            imgSrc: bookOneImg
        },
        {
            title: "Histórias que Eu Vivi e Gosto de Contar",
            desc: (
                <>
                    <p>Uma <span>coletânea de memórias</span> e lendas pessoais do autor, que reforça a tradição oral <span>indígena</span> e conecta leitores de todas as idades às raízes culturais dos <span>povos indígenas brasileiros.</span></p>
                </>
            ),
            imgSrc: bookSecondImg
        },
        {
            title: "O banquete dos deuses",
            desc: (
                <>
                    <p>Um livro de ensaios que traz reflexões <span>profundas</span> sobre a educação, a cultura e a importância da <span>ancestralidade indígena</span> na formação da identidade brasileira, defendendo uma educação que <span>valorize</span> esses <span>saberes</span>.</p>
                </>
            ),
            imgSrc: bookThirdImg
        },
    ]

  return (
    <>
        <main>
            <section>
                <TitleSection text="Munduruku" />
            </section>

            <TribeInformation imageUrl={IndianImage}>
                <p>Os <span>Munduruku</span>, um povo com forte tradição guerreira, marcaram profundamente a história do <span>Vale do Tapajós</span>, região que chegou a ser conhecida no <span>século XIX</span> como <span>Mundurukânia</span>. Atualmente, o cenário de batalha mudou: suas lutas são travadas para proteger o território ancestral das crescentes ameaças impostas por <span>garimpos ilegais de ouro</span>, projetos de usinas hidrelétricas e planos para a construção de uma extensa hidrovia no <span>rio Tapajós.</span></p>
            </TribeInformation>
            
            <section style={{ marginBottom: "80px" }}>
                <TitleSection  text="Localização" />
            </section>

            <LocInformation>
                <p>Os <span>Munduruku</span> estão distribuídos por diferentes territórios situados nos estados do <span>Pará, Amazonas e Mato Grosso</span>. No <span>Pará</span>, vivem principalmente na região sudoeste do estado, ao longo do rio <span>Tapajós</span> e seus afluentes, em municípios como Santarém, Itaituba e Jacareacanga. No <span>Amazonas</span>, encontram-se no leste do estado, nas margens do rio <span>Canumã</span> (município de Nova Olinda) e em áreas próximas à rodovia <span>Transamazônica</span>, no município de <span>Borba</span>. Já em Mato Grosso, ocupam o norte do estado, na região do rio dos Peixes, no município de <span>Juara</span>.</p>
            </LocInformation>

            <ContrastSection relatedWorks={relatedWorks}>
                <p>O povo <span>Munduruku</span>, presente no <span>Pará</span>, <span>Amazonas</span> e <span>Mato Grosso</span>, passou por transformações após o contato com missões religiosas e instituições externas, mas ainda mantém vivas tradições como o ritual da “mãe do mato”, a <span>tingüejada</span> (pesca com timbó) e o uso das flautas <span>parasuy</span>. A música e a cosmologia continuam transmitindo saberes sobre a natureza, o cotidiano e o cosmos, enquanto pajés preservam a espiritualidade, conciliando práticas indígenas e cristãs.</p>
                <p>Na cultura material, destacam-se a cestaria, os trançados, colares de sementes e <span>tipóias femininas</span>. Mesmo em declínio, a cerâmica e a tecelagem de redes ainda resistem, representando a memória e a identidade cultural do povo <span>Munduruku</span>.</p>
            </ContrastSection>
        </main>
    </>
  )
}
