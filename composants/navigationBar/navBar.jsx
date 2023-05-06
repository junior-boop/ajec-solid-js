import Button from '../boutton/boutton'
import styles from './navBar.module.css'
import { A } from '@solidjs/router'
import logo from '../../src/assets/logo.png'

import image1  from '../../src/assets/laboratoire_white.png'
import image2  from '../../src/assets/croissance_white.png'
import image3  from '../../src/assets/changement-climatique_white.png'
import image4  from '../../src/assets/maison-ecologique_white.png'
import image5  from '../../src/assets/plumes_white.png'
import image6  from '../../src/assets/sensible_white.png'
import { createSignal, onMount } from 'solid-js'


const [clubMenu, setClubMenu] = createSignal(false)

const handleMenuHover = () => {
    setClubMenu(!clubMenu())
}
   
export default function NavBar(){

    
    return(
        <div class={styles.navBar}>
            <div class={styles.navBarContainer}>
                <div class={styles.logo}>
                    <img src={logo} alt="logo-ajec" />
                </div>
                <div class={styles.navigation}>
                    <ul>
                        <li data-open-menu = {clubMenu()} onMouseOver={handleMenuHover} onMouseOut={() => setClubMenu(false)} >Nos Clubs
                            <div class={styles.menu_overlay}>
                                <MenuClub />
                            </div>
                        </li>
                        <li><A href='/'>Activites</A></li>
                        <li><A href='/'>Programmes</A></li>
                        <li><A href='/'>Contactez-nous</A></li>
                    </ul>
                    <Button>
                        Devenir Membre
                    </Button>
                </div>
            </div>
        </div>
    )
}

function MenuClub(){
    const Block = ({image, titre,  description, url = '/', pdf}) => {

        const desc = description.length > 200? `${description.substring(0, 200)}...` : description

        const state = {
            titre,
            image, 
            urlPDF : pdf,
        }

        return(
            <div class={styles.blockClub}>
                <div>
                    <div style={{"background-image" : `url(${image})`}}></div>
                </div>
                <div>{titre}</div>
                <div>{desc}</div>
                <A style={{color : '#7b24ea'}} href={url} onClick={() => {setClubMenu(false); setTimeout(() => window.location.reload()), 300}} state={state}> Avoir plus d'information</A>
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