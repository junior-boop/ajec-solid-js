import Button from '../boutton/boutton'
import styles from './navBar.module.css'
import { A } from '@solidjs/router'
import logo from '../../src/assets/logo.png'
import burger from '../../src/assets/burgerMenu.png'

import image1  from '../../src/assets/laboratoire_white.png'
import image2  from '../../src/assets/croissance_white.png'
import image3  from '../../src/assets/changement-climatique_white.png'
import image4  from '../../src/assets/maison-ecologique_white.png'
import image5  from '../../src/assets/plumes_white.png'
import image6  from '../../src/assets/sensible_white.png'
import { createEffect, createSignal, onMount } from 'solid-js'


const [clubMenu, setClubMenu] = createSignal(false)
const [phoneMenu, setPhoneMenu] = createSignal(false)

const handleMenuHover = () => {
    setClubMenu(!clubMenu())
}
   
export default function NavBar(){

    const handleClickMenu = () => {
        setPhoneMenu(!phoneMenu())
    }

    createEffect(() => {
        window.addEventListener('scroll', () => {
            if(phoneMenu()) setPhoneMenu(false)
        })
    })

    
    return(
        <div class={styles.navBar}>
            <div class={styles.navBarContainer}>
                <A href = '/' class={styles.logo}>
                    <img src={logo} alt="logo-ajec" />
                </A>
                <div onClick={handleClickMenu} class={styles.burger}>
                    <img src={burger} alt="" />
                </div>
                <div data-isOpen = {phoneMenu()} class={styles.navigationphone}>
                    <ul>
                        <LI titre={'Accueil'} />
                        <LI url='/activites' titre={'Activites'} />
                        <LI url='/programme' titre={'Programmes'} />
                        <LI url='/a-propos' titre={'A Propos'} />
                        <div class={styles.member}>
                        <A href='/' class={styles.login}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-4.625 0-8.442 3.507-8.941 8.001H10v-3l5 4l-5 4v-3H3.06C3.56 17.494 7.376 21 12 21c4.963 0 9-4.037 9-9s-4.037-9-9-9z"/></svg>
                            </div>
                            <div>
                                Devenir Membre
                            </div>
                        </A>
                    </div>
                    </ul>
                    
                </div>
                <div class={styles.navigation}>
                    <ul>
                        <LI titre={'Accueil'} />
                        <LI url='/activites' titre={'Activites'} />
                        <LI url='/programme' titre={'Programmes'} />
                        <LI url='/a-propos' titre={'A Propos'} />
                    </ul>
                    <Button>
                        Devenir Membre
                    </Button>
                </div>
            </div>
        </div>
    )
}


function LI({url = '/', titre}){
    return(
        <li onClick = {() => setPhoneMenu(false)}><A href={url}>{titre}</A></li>
    )
}


function MenuClub(){
    const Block = ({image, titre,  description, url = '/', pdf}) => {

        const desc = description.length > 200? `${description.substring(0, 200)}...` : description
        const content = url.split('/')

        const state = {
            titre,
            image, 
            content : content[2],
            urlPDF : pdf,
        }

        return(
            <div class={styles.blockClub}>
                <div>
                    <div style={{"background-image" : `url(${image})`}}></div>
                </div>
                <div>{titre}</div>
                <div>{desc}</div>
                <A style={{color : '#7b24ea'}} href={url} onClick={() => {setClubMenu(false); location.pathname = url }} > Avoir plus d'information</A>
            </div>
        )
    }
    return(
        <div class={styles.menuClub}>
            <Block image = {image1} titre={'Agro-industrie et Industrie Chimique (AI/IC)'} description={"L’objectif recherché est de développer chez les jeunes dès la base leurs compétences dans ces domaines afin d’éveiller en eux cette précocité susceptible d’être un atout majeur pour le développement futur des industries agricoles, chimiques et pharmaceutiques locales compétitives, intégrées à l’économie camerounaise, pour servir le marché national et régional."} url='/clubs/ai-ic'  />
            <Block image = {image2} titre={'Agriculture et Agroforesterie (A/A)'} description={"La politique de l’import-substitution dans lequel le gouvernement baigne actuellement est incontournable dans le processus de développement de notre pays. Ce club est donc prioritaire. Il sera question ici pour nos équipes de montrer dans son ensemble qu’un ingénieur agronome devrait en réalité fermer le cycle de vie « production – transformation – distribution »"} url='/clubs/a-a' />
            <Block image = {image3} titre={'Environnement et Changements Climatiques (E/CL)'} description={"Aujourd’hui, nous observons une dégradation radicale de l’environnement. Il est donc propice de réadapter les activités terrestres (l’agropastoral, les habitudes humaines, ...) en fonction de cette modification de l’environnement."} url='/clubs/e-cl'/>
            <Block image = {image4} titre={'Energies Renouvelables (ER)'} description={"Vise à vulgariser et à sensibiliser sur l’importance de la transition qui existe entre les énergies classiques et les énergies renouvelables qui sont aujourd’hui une alternative indéniable dans le processus de développement des Etats"} url='/clubs/er'/>
            <Block image = {image5} titre={'Journal-Poésie-Roman (JPR)'} description={"C’est un club particulier grâce auquel nous montrerons aux apprenants que les matières littéraires ne doivent pas être reléguées au second plan. Nous leur inculquerons les applications pratiques de ces matières dans les domaines du journalisme, de la poésie et du roman."} url='/clubs/jpr'/>
            <Block image = {image6} titre={'Numérique (N)'} description={"Le secteur du numérique est aujourd’hui incontournable dans tous les secteurs d'activités. Il est donc question dans les animations de montrer aux jeunes apprenants qu’à travers le numérique on peut transformer le monde. « Il faut numériser l’humanité et humaniser le numérique »"} url='/clubs/num'/>
        </div>
    )
}

// setTimeout(() => location.reload(), 1000)