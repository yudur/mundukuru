import { createFileRoute } from '@tanstack/react-router'

import { TitleSection } from '../../components/Text/TitleSection'
import { TribeInformation } from '../../components/TribeInformation'
import { LocInformation } from '../../components/LocInformation'
import { ContrastSection } from '../../components/ContrastSection'

import KokamaIndianImage from '../../global/assets/kokama.svg'
import bookOneImg from '../../global/assets/relatedWorks/kokama/b1.svg'


export const Route = createFileRoute('/kokama/')({
  component: RouteComponent,
})

function RouteComponent() {
  const relatedWorks = [
    {
        title: "Kumitsa ƗmƗnua Ritama Kokama – Narrativas Ancestrais do Povo Kokama",
        desc: (
            <>
                <p><span>Kumitsa ƗmƗnua Ritama Kokama</span> – Narrativas Ancestrais do Povo Kokama é uma coletânea de mitos e histórias tradicionais do povo <span>Kokama</span>, abordando suas origens, crenças, cultura e relação com a natureza. A obra contribui para a preservação da língua e identidade <span>Kokama</span>, sendo usada em educação bilíngue e como ferramenta de <span>valorização cultural</span>.</p>
            </>
        ),
        imgSrc: bookOneImg
    }
  ]


  return (
    <>
        <main>
            <section>
                <TitleSection text="Kokama" />
            </section>

            <TribeInformation imageUrl={KokamaIndianImage}>
                <p>Os <span>Kokama</span>, habitantes da região do <span>Solimões</span>, sofreram deslocamentos <span>forçados</span> e aldeamentos desde a <span>colonização</span>, promovidos por <span>missões religiosas</span> e <span>frentes extrativistas</span>, o que ameaçou sua continuidade física e cultural e levou à <span>negação</span> de sua identidade indígena por <span>décadas</span>.</p>
                <p>A partir da década de 1980, os <span>Kokama</span> começaram a resgatar e valorizar sua <span>identidade</span>, fortalecendo mobilizações por direitos territoriais, saúde e educação diferenciadas, além de buscar alternativas econômicas sustentáveis em parceria com outros povos <span>indígenas do Solimões</span>.</p>
            </TribeInformation>
            
            <section style={{ marginBottom: "80px" }}>
                <TitleSection  text="Localização" />
            </section>

            <LocInformation>
                <p>No <span>Brasil</span>, a população <span>Kokama</span> é distribuída ao longo do alto e médio rio Solimões, principalmente nos municípios de Tabatinga, São Paulo de Olivença, Benjamin Constant, Amaturá, Santo Antônio do Içá, Tonantins, Fonte Boa, Tefé e Jutaí. Estimativas oficiais variam de <span>786</span> pessoas (Cimi, 2005) a cerca de <span>9.000</span> indivíduos (CGTT, 2003), refletindo desafios históricos na contabilização e <span>reconhecimento do povo.</span></p>
                <p>Além do <span>Brasil</span>, os <span>Kokama</span> também vivem no <span>Peru</span> (aproximadamente 19 mil pessoas em 2003) e na <span>Colômbia</span> (cerca de 792 pessoas, segundo Unesco, 2004), mantendo sua cultura <span>viva</span> apesar das <span>pressões externas e dos deslocamentos forçados</span>.</p>
            </LocInformation>

            <ContrastSection relatedWorks={relatedWorks}>
              <p>Os <span>Kokama</span> vivem em casas elevadas próximas aos rios, organizadas por parentesco, em malocas com famílias extensas e <span>liderança descentralizada</span>. <span>Homens</span> pescam, caçam e produzem instrumentos, enquanto <span>mulheres</span> cuidam da <span>agricultura</span>, preparam alimentos e confeccionam artesanatos como cestas e peneiras. A vestimenta tradicional inclui túnicas decoradas e enfeites corporais.</p>
              <p>Entre suas práticas culturais destacam-se o <span>ajuri</span> (trabalho coletivo seguido de refeição) e o consumo do <span>pajuaru</span>, bebida fermentada de <span>mandioca</span>. A cosmologia valoriza a vida após a morte, e os <span>xamãs</span> (Sume) usam <span>ayahuasca</span>, cantos e rituais para se comunicar com o mundo espiritual.</p>
            </ContrastSection>
        </main>
    </>
  )
}
