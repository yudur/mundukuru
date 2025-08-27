import { createFileRoute } from '@tanstack/react-router'

import { TitleSection } from '../../components/Text/TitleSection'
import { TribeInformation } from '../../components/TribeInformation'
import { LocInformation } from '../../components/LocInformation'
import { ContrastSection } from '../../components/ContrastSection'

import IndianImage from '../../global/assets/Indian.svg'

import bookOneImg from '../../global/assets/relatedWorks/yanomami/b1.svg'
import bookSecondImg from '../../global/assets/relatedWorks/yanomami/b2.svg'
import bookThirdImg from '../../global/assets/relatedWorks/yanomami/b3.svg'

export const Route = createFileRoute('/yanomami/')({
  component: RouteComponent,
})

function RouteComponent() {
  const relatedWorks = [
    {
        title: "A Queda do Céu: Palavras de um Xamã Yanomami",
        desc: (
            <>
                <p>Essa é a principal e mais conhecida obra de <span>Kopenawa</span>. O livro é uma <span>profunda narrativa</span> autobiográfica, política e cosmológica, fruto de décadas de diálogo entre <span>Kopenawa</span> e <span>Albert</span>. Ele expõe a espiritualidade <span>yanomami</span>, suas lutas contra os invasores (garimpeiros, fazendeiros, missionários) e as ameaças à floresta e ao modo de vida <span>indígena</span>. É considerado um marco na literatura <span>indígena e antropológica</span>.</p>
            </>
        ),
        imgSrc: bookOneImg
    },
    {
        title: "Espírito da Floresta",
        desc: (
            <>
                <p>Coletânea de textos produzidos entre <span>2002 e 2021</span> para exposições na Fundação <span>Cartier</span>, com narrativa dialógica entre os autores, fotos de <span>Cláudia Andujar</span> e ilustrações do próprio <span>David Kopenawa</span> e artistas <span>yanomami</span>.</p>
            </>
        ),
        imgSrc: bookSecondImg
    },
    {
        title: "O Desejo dos Outros: Uma Etnografia dos Sonhos Yanomami",
        desc: (
            <>
                <p>Uma etnografia que explora os sonhos do povo <span>Yanomami</span>, com participação ativa de <span>Kopenawa</span>.</p>
            </>
        ),
        imgSrc: bookThirdImg
    },
  ]


  return (
    <>
        <main>
            <section>
                <TitleSection text="Yanomami" />
            </section>

            <TribeInformation imageUrl={IndianImage}>
                <p>Entre os <span>Yanomami</span>, a “ <span>urihi</span> — a floresta-terra — é vista muito além de um mero recurso econômico ou um espaço <span>vazio</span>. Para eles, essa terra é um organismo <span>vivo</span>, inserido numa teia complexa de relações e trocas entre pessoas e entidades não humanas. Atualmente, essa realidade está em risco devido à exploração agressiva promovida por grupos <span>brancos</span>.</p>
            </TribeInformation>
            
            <section style={{ marginBottom: "80px" }}>
                <TitleSection  text="Localização" />
            </section>

            <LocInformation>
                <p>O povo <span>Yanomami</span> vive em uma vasta região da floresta <span>amazônica</span> que abrange áreas do norte do <span>Brasil</span> e do sul da <span>Venezuela</span>. Essa população indígena está espalhada por territórios remotos, compostos por densas florestas, rios e serras, o que contribui para a preservação de sua cultura tradicional. No <span>Brasil</span>, eles estão principalmente presentes nos estados de Roraima e Amazonas, enquanto na <span>Venezuela</span> ocupam partes dos estados de <span>Amazonas</span> e <span>Bolívia</span>. Essa localização privilegiada em meio a uma das maiores florestas tropicais do planeta fortalece a conexão dos <span>Yanomami</span> com seu ambiente natural.</p>
            </LocInformation>

            <ContrastSection relatedWorks={relatedWorks}>
              <p>Os <span>Yanomami</span> acreditam descender de <span>Omama</span>, criador da cultura, das regras sociais e dos espíritos auxiliares dos pajés, os <span>xapiripë</span>, junto à filha do monstro aquático <span>Tëpërësiki</span>. Já seu irmão <span>Yoasi</span> é visto como a origem da morte e dos males no mundo.</p>
              <p>Na visão mítica, os estrangeiros (napëpë) seriam uma criação secundária de <span>Omama</span>, nascidos do sangue de ancestrais <span>Yanomami</span>. Por isso, foram vistos inicialmente como fantasmas das “costas do céu”, antes de serem reconhecidos como parte da humanidade.</p>
            </ContrastSection>
        </main>
    </>
  )
}
