import Container from '../../composants/container/container'
import Vide from '../../composants/vide'
import styles from './clubpages.module.css'

import image1  from '../../src/assets/laboratoire_white.png'
import image2  from '../../src/assets/croissance_white.png'
import image3  from '../../src/assets/changement-climatique_white.png'
import image4  from '../../src/assets/maison-ecologique_white.png'
import image5  from '../../src/assets/plumes_white.png'
import image6  from '../../src/assets/sensible_white.png'
import image1_bis  from '../../src/assets/laboratoire.png'
import image2_bis  from '../../src/assets/croissance.png'
import image3_bis  from '../../src/assets/changement-climatique.png'
import image4_bis  from '../../src/assets/maison-ecologique.png'
import image5_bis  from '../../src/assets/plumes.png'
import image6_bis  from '../../src/assets/sensible.png'

import Button from '../../composants/boutton/boutton'
import { A,  useLocation } from '@solidjs/router'



export default function ClubsPages(){
    const {state} = useLocation()
    console.log(state)

    const { image, titre } = state

    return(
        <div class={styles.clubsPages}>
            <Vide />
            <ClubHeader image={image} titre={titre} />
            <div>
                <Container>
                    <div class={styles.contenu}>
                        <div class={styles.left}>
                            <Contenu />
                            bonjour
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


function ClubHeader({ image, titre }) {
    return(
        <header>
            <Container>
               <div class={styles.ClubHeader}>
                    <div class={styles.clubstitrebox}>
                        <div class={styles.clubicon}>
                            <div style={{"background-image" : `url(${image})`}}></div>
                        </div>
                        <div class={styles.clubstitle}>
                            <div className="p">CLUB ENTREPRENEURIAL</div>
                            <div class='h2'>{titre}</div>
                            <A href='/toujours.pdf'>
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

function AsideBar(){
    return(
        <div class={styles.asidebar}> 
            <div>
                <div className="h4" style={{ "font-size" : '24px', "font-weight" : '600', "line-height" : 1.1}}>
                    Les différents clubs Entrepreneurial
                </div>
            </div>
            <ul>
                <li>
                    <Link href='/clubs/ai-ic' onClick={() => {}} state={{ image : image1, titre : "Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)" }}>
                        <span class={styles.icon} style={{"background-image" : `url(${image1_bis})`}}></span> 
                        <span>Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)</span> 
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <span class={styles.icon} style={{"background-image" : `url(${image2_bis})`}}></span> 
                        <span>Club d'Entrepreneuriat Agriculture et Agroforesterie (A/A)</span> 
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <span class={styles.icon} style={{"background-image" : `url(${image3_bis})`}}></span> 
                        <span> Environnement et Changements Climatiques (E/CL)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <span class={styles.icon} style={{"background-image" : `url(${image4_bis})`}}></span> 
                        <span> Club d'Entrepreneuriat Energies Renouvelables (ER)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <span class={styles.icon} style={{"background-image" : `url(${image5_bis})`}}></span> 
                        <span>Club d'Entrepreneuriat Journal-Poésie-Roman (JPR)</span>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <span class={styles.icon} style={{"background-image" : `url(${image6_bis})`}}></span> 
                        <span>Club d'Entrepreneuriat Numérique (N)</span>
                    
                    </Link>
                </li>
                
            </ul>
        </div>
    )
}


function Link({href = "/", children, onClick, state}){
    return(
        <A href={href} onClick = {onClick} state={state}>
            {children}
        </A>
    )
}

function Contenu(){
    return(
        <div class={styles.leftContenu}>
            bonjour
            <h1>ville </h1>
        </div>
    )
}