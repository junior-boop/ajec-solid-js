import Button from "../boutton/boutton";
import Container from "../container/container";
import styles from './header.module.css'
import image from '../../src/assets/header.webp'

export default function Header(){
    return (
        <section id= "header"  class={styles.header}>
            <Container>
               <div class={styles.headerContainer}>
                <div class={styles.left}>
                    <div class= {styles.leftContainer}>
                        <div>
                            <span class="h1">CONCEPTION</span>
                            <span class="h1">INNOVATION</span>
                            <span class="h1">ENTREPRENEURIAT</span>
                        </div>
                        <div>
                            <span class="h4">Association des Jeunes Entrepreneurs du Cameroun</span>
                            <span class="p">Favoriser l’insertion socioprofessionnelle jeune, l’esprit de la pratique, d’entrepreneuriat et de leadership.</span>
                        </div>
                        <Button>
                            Devenir Membre
                        </Button>
                    </div>
                </div>
                <div class ={styles.right}>
                    <div>
                        <img src={image} alt="" />
                        <Courbe class = {styles.courbe} />
                    </div>
                </div>
               </div>
            </Container>
        </section>
    )
}

function Courbe(props) {
    return(
        <svg viewBox="0 0 876 323" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1168 75.3334C1168 75.3334 662.5 -8.6667 474.5 75.3334C286.5 159.333 160.5 347.333 107 511.833C54.67 672.735 38 1021.33 38 1021.33" stroke="#7B24EA" stroke-width="75"/>
        </svg>
    )
}
