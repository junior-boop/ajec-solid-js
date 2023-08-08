import Container from '../../../composants/container/container'
import Vide from '../../../composants/vide'
import styles from './styles.module.css'

import image1 from '../../../src/assets/croissance_white.png'
import image2 from '../../../src/assets/croissance_white.png'

import image1_bis from '../../../src/assets/laboratoire.png'
import image2_bis from '../../../src/assets/croissance.png'
import image3_bis from '../../../src/assets/changement-climatique.png'
import image4_bis from '../../../src/assets/maison-ecologique.png'
import image5_bis from '../../../src/assets/plumes.png'
import image6_bis from '../../../src/assets/sensible.png'
import entreprend from '../../../src/assets/entreprenariat-femme.jpg'


import { texte as club_a_a } from '../../pages/clubs/club-a-a/texte.js'

import { A } from '@solidjs/router'
import SolidMarkdown from 'solid-markdown'
import { createSignal } from 'solid-js'
import { FlecheGauche } from '../../../composants/programmeItems/programmeItem'
import Button from '../../../composants/boutton/boutton'


const [clubParm, setClubParms] = createSignal('')


export default function ProgrammePPEF() { 

   
    return (
        <div class={styles.clubsPages}>
            <title> AJEC | Programme </title>

            <Vide />
            <ClubHeader image={image2} titre = {"PPEF-ICELC"} soustitre={"Programme de Promotion de l’Entrepreneuriat Féminin et Implémentation des Clubs d’Entrepreneuriat dans Lycées et Collèges"} />
            <div>
                <Container>
                    <div class={styles.contenu}>
                        <div class={styles.left}>
                            <Contenu />
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


function ClubHeader({ image, titre, soustitre}) {
    return (
        <header>
            <Container>
                <div class={styles.ClubHeader}>
                    <div class={styles.clubstitrebox}>
                        <div class={styles.clubicon}>
                            <div style={{ "background-image": `url(${image})` }}></div>
                        </div>
                        <div class={styles.clubstitle}>
                            <div class='h2'>{titre}</div>
                            <div className="p">{soustitre}</div>
                            
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
                    Les différents Programmes
                </div>
            </div>
            <ul>
                <li>
                    <Link href='/clubs/ai-ic'>
                        <span class={styles.icon} style={{ "background-image": `url(${image1_bis})` }}></span>
                        <span>Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/clubs/a-a'>
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


function Link({ href = "/", children }) {
    return (
        <A href={href} onclick={() => setTimeout(() => location.reload(), 300)}>
            {children}
        </A>
    )
}

function Contenu({ contenu, pdf, titre }) {

    return (
        <div class={styles.leftContenu}>

            <Obejectif />

           <div className="h3" style={{"font-weight" : '700', "line-height" : 1.1,  "text-align" : 'center', margin : '0 auto 3rem', width : '80%', color : '#7b24ea'}}>La Promotion et l'accompagnement sur chaque aspect de leur projet entrepreneurial</div>

            <Intro />
            <div>
                <Temoignage />
            </div>
            <QCMtag>
                <QCMElement />
                <QCMElement />
                <QCMElement />
            </QCMtag>
            
        </div>
    )
}

const Obejectif = () => {
    const Item = ({chiffre, news}) => {
        return(
            <div class={styles.item}>
                <div class={styles.chiffre}>{chiffre}</div>
                <div class={styles.news} >{news}</div>
            </div>
        )
    }
    return(
        <div class={styles.objectif}>
            <div>
                <div className="h2" style={{"text-align" : 'center', "margin-bottom" : '1rem'}}>Objectif du Programme</div>
                <div className="p" style={{"text-align" : 'center'}}>Nous venons ainsi par ce Programme qui a toute sa consistance intellectuelle accompagner les États Africains dans leurs politiques sur les réformes éducatives par la Valorisation des Compétences et de l’Entrepreneuriat</div>
            </div>
            <div>
                <div class={styles.grid}>
                    <Item chiffre={'40'} news={'femmes par établissement'}/>
                    <Item chiffre={'70'} news = {'Jours de travail durant les periodes de classe'}/>
                    <Item chiffre={'05'} news ={'Activités pour booster leur niveau'} />
                </div>
                <Button style={{margin : '0 auto'}} >Devenir membre de l'association</Button>
            </div>
        </div>
    )
}

const Intro = () => {
    return(
        <div class={styles.intro}>
            <div>
                <div className="h4" style={{"font-weight" : '700', "line-height" : 1.1, "margin-bottom" : '1rem'}}>Lorem ipsum dolor sit amet.</div>
                <div class='p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est totam consectetur id ducimus porro aperiam minima dolorem voluptatem debitis architecto, enim omnis, excepturi reprehenderit. Magnam cupiditate deleniti cumque debitis.</div>
            </div>
            <div style = {{ "background-image" : `url(${entreprend})`}}></div>
        </div>
    )
}


export function Member({ image, nom, poste, job, description }) {
    return (
        <div class={styles.member}>
            <div class={styles.memberImage} style={{ "background-image": `url(${image})` }}></div>
            <div class={styles.infos}>
                <div class='h4' style={{ "line-height": 1.2, "margin-bottom": '.7rem' }}>{nom}</div>
                <div style={{ "font-size": '1.15rem', "font-weight": '600', "line-height": 1.2, "margin-bottom" : '.5rem' }}>{poste}</div>
                <div style={{ "font-size": '1rem', "font-weight": '600', "line-height": 1.2, "margin-bottom": '.6rem', "font-style":"italic" }}>{job}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}

const Temoignage = ({image}) => {
    return(
        <div class = {styles.temoignage}>
            <div class = {styles.logo} style={{"background-image" : `url(${image})`}}></div>
            <div class={styles.content}>
                <div>MINSANTE</div>
                <div class='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, voluptas labore accusamus enim sint libero, in quae molestias accusantium voluptatum eaque neque ipsam cupiditate possimus hic perspiciatis ducimus, sed quo?</div>
            </div>
        </div>
    )
}

const QCMtag = ({children}) => {
    return(
        <div>

            <div class='h2' style={{"margin-bottom" : '2rem', "text-align" : 'center'}}>
                Foire aux Questions
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

const QCMElement = () => {
    const [head, setHead] = createSignal(0)
    const [paragraph, setParagraph] = createSignal(0)
    const [open, setOpen] = createSignal(false)

    const headRef = (e) => {
        setTimeout(() => {
            setHead(e.clientHeight)
        }, 100)
    }

    const paragraphRef = (e) => {
        setTimeout(() => {
            setParagraph(e.clientHeight)
        }, 100)
    }

    const AllSize = () => {
        return paragraph() + head() 
    } 

    return (
        <div class={styles.faqelement} style = {{height : !open() ? `${head()}px` : `${AllSize()}px` }}>
            <div ref = {headRef} class={styles.faqtitre}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo, quidem laboriosam fugiat ducimus in! 
                <span onClick={(e) => setOpen(!open())}>
                    <FlecheGauche style ={{ color : '#5711B1', width : '18px', height :'18px', transform : !open() ? `rotateZ(90deg)` : `rotateZ(-90deg)`, transition : 'all .3s ease-in-out' }} />
                </span>
            </div>
            <div ref = {paragraphRef} class={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla alias in, quod, possimus aperiam aut consequatur at tempora eius molestiae quaerat similique odio itaque dolorem ipsum sit dignissimos iusto modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias nam pariatur.</div>
        </div>
    )
}

