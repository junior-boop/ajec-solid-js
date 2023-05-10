import Container from '../../composants/container/container'
import Vide from '../../composants/vide'
import styles from './clubpages.module.css'

import image1 from '../../src/assets/laboratoire_white.png'
import image2 from '../../src/assets/croissance_white.png'
import image3 from '../../src/assets/changement-climatique_white.png'
import image4 from '../../src/assets/maison-ecologique_white.png'
import image5 from '../../src/assets/plumes_white.png'
import image6 from '../../src/assets/sensible_white.png'

import image1_bis from '../../src/assets/laboratoire.png'
import image2_bis from '../../src/assets/croissance.png'
import image3_bis from '../../src/assets/changement-climatique.png'
import image4_bis from '../../src/assets/maison-ecologique.png'
import image5_bis from '../../src/assets/plumes.png'
import image6_bis from '../../src/assets/sensible.png'

import imageTest from '../images/M_ATEBA_AMBA_Gabriel_Président-Fondateur_de_l_AJEC.jpg'
import imageTest_2 from '../images/M_TCHOMOBE_Patrick_Expert_informaticien_Secrétaire_Général_de_l_AJEC.jpg'

import { texte as club_a_a } from '../pages/clubs/club-a-a/texte.js'
import { texte as club_ai_ic } from '../pages/clubs/club-ai-ic/texte.js'
import { texte as club_e_cl } from '../pages/clubs/club-e-cl/texte.js'
import { texte as club_er } from '../pages/clubs/club-er/texte.js'
import { texte as club_jpr } from '../pages/clubs/club-jpr/texte.js'
import { texte as club_n } from '../pages/clubs/club-n/texte.js'

import { A, useLocation } from '@solidjs/router'
import SolidMarkdown from 'solid-markdown'
import { createSignal } from 'solid-js'
import Navigation from '../constante/navigation.state'


const [clubParm, setClubParms] = createSignal('')


export default function ClubsPages() {
    const state = Navigation()
    const { image, titre, content, pdf } = state

    const contenu = () => {
        switch (content) {
            case 'a-a':
                return club_a_a;
            case 'ai-ic':
                return club_ai_ic;
            case 'e-cl':
                return club_e_cl;
            case 'er':
                return club_er;
            case 'jpr':
                return club_jpr;
            case 'num':
                return club_n;
        }
    }


    return (
        <div class={styles.clubsPages}>
            <Vide />
            <ClubHeader image={image} titre={titre} pdf={pdf} />
            <div>
                <Container>
                    <div class={styles.contenu}>
                        <div class={styles.left}>
                            <Contenu contenu={contenu()} pdf={pdf} titre={titre}/>

                        </div>
                        <div class={styles.right}>
                            <AsideBar />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}


function ClubHeader({ image, titre, pdf = '/toujours.pdf' }) {
    return (
        <header>
            <Container>
                <div class={styles.ClubHeader}>
                    <div class={styles.clubstitrebox}>
                        <div class={styles.clubicon}>
                            <div style={{ "background-image": `url(${image})` }}></div>
                        </div>
                        <div class={styles.clubstitle}>
                            <div className="p">CLUB ENTREPRENEURIAL</div>
                            <div class='h2'>{titre}</div>
                            <A href={pdf} download={titre}>
                                <button>
                                    Télécharger le PDF
                                </button>
                            </A>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

function AsideBar() {
    return (
        <div class={styles.asidebar}>
            <div>
                <div className="h4" style={{ "font-size": '24px', "font-weight": '600', "line-height": 1.1 }}>
                    Les différents clubs Entrepreneurial
                </div>
            </div>
            <ul>
                <li>
                    <Link href='/clubs/ai-ic' state={{ image: image1, titre: "Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)", content: 'ai-ic' }}>
                        <span class={styles.icon} style={{ "background-image": `url(${image1_bis})` }}></span>
                        <span>Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/clubs/a-a' state={{ image: image2, titre: "Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)", content: 'ai-ic' }}>
                        <span class={styles.icon} style={{ "background-image": `url(${image2_bis})` }}></span>
                        <span>Club d'Entrepreneuriat Agriculture et Agroforesterie (A/A)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/clubs/e-cl'>
                        <span class={styles.icon} style={{ "background-image": `url(${image3_bis})` }}></span>
                        <span> Environnement et Changements Climatiques (E/CL)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/clubs/er'>
                        <span class={styles.icon} style={{ "background-image": `url(${image4_bis})` }}></span>
                        <span> Club d'Entrepreneuriat Energies Renouvelables (ER)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/clubs/jpr'>
                        <span class={styles.icon} style={{ "background-image": `url(${image5_bis})` }}></span>
                        <span>Club d'Entrepreneuriat Journal-Poésie-Roman (JPR)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/clubs/num'>
                        <span class={styles.icon} style={{ "background-image": `url(${image6_bis})` }}></span>
                        <span>Club d'Entrepreneuriat Numérique (N)</span>

                    </Link>
                </li>

            </ul>
        </div>
    )
}


function Link({ href = "/", children}) {
    return (
        <A href={href} onclick={() => setTimeout(() => location.reload(), 300)}>
            {children}
        </A>
    )
}

function Contenu({ contenu, pdf, titre }) {
    return (
        <div class={styles.leftContenu}>
            <SolidMarkdown children={contenu} />
            <div style = {{ padding : '2rem', "background-color" : '#F7F1FE', "margin-top" : '2rem' }} >
                Si vous souhaitez avoir plus d'information sur ce club et son programme, <A href={pdf} download={titre}>cliquez ici pour télécharger le PDF</A> 
            </div>
            <div style={{ margin : '5rem 0'}}>
                <h1>Membre du staff</h1>
                <div class={styles.memberContent}>
                    <Member image={imageTest} 
                        nom={'M.ATEBA AMBA GABRIEL'} 
                        poste={"Président de l’AJEC"} 
                        job={"Architecte des Projets et Programmes éducatifs"}
                        description={"Spécialiste en question Formation-Emploi-Entreprenariat ; Chef service de l’entrepreneuriat, projets et leadership (SEPL)"}/>
                    <Member 
                        image={imageTest_2} 
                        nom= {"M. TCHOMOBE Patrick"} 
                        poste={"Secrétaire Général de l’AJEC"} 
                        job={"Expert informaticien"}
                        description={"Chef service des affaires administratives et financières (SAAF)"}
                        />
                </div>
            </div>
        </div>
    )
}

export function Member({image, nom, poste, job, description}){
    return(
        <div class={styles.member}>
            <div class={styles.memberImage} style = {{"background-image" : `url(${image})`}}></div>
            <div class={styles.infos}>
                <div class='h4' style={{ "line-height" : 1.2, "margin-bottom" : '.7rem'}}>{nom}</div>
                <div style={{ "font-size" : '1.15rem', "font-weight" : '600', "line-height" : 1.2}}>{poste}</div>
                <div style={{ "font-size" : '1rem', "font-weight" : '600', "line-height" : 1.2, "margin-bottom" : '.6rem'}}>{job}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}