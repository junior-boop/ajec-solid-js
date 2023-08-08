import Button from '../../composants/boutton/boutton'
import { ClubSection } from '../../composants/club/club'
import Container from '../../composants/container/container'
import { Diapo_2 } from '../../composants/diapo/diapo'
import Header from '../../composants/header_home/header'
import Programme from '../../composants/programme/programme'
import Vide from '../../composants/vide'
import Vision from '../../composants/vision_header/vision'
import styles from './home.module.css'

export default function Home(){
    return(
        <div class={styles.home}>
            <title>AJEC</title>
            <Vide />
            <Header />
            <Presentation />
            <Vision />
            <Membre />
            <Programme />
            <Diapo_2 image={'/diapos.jpg'} />
            <ClubSection />
        </div>
    )
}


function Presentation(){
    return(
       <section>
            <Container>
                <div class='h1' style={{ "text-align" : 'center'}}>
                    Qui sommes nous ?
                </div>
                <div class={styles.presentationContent}>
                L’Association des Jeunes Entrepreneurs du Cameroun abrégé
                AJEC est une association apolitique constituée des camerounais sans distinction de
                sexe, ni de religion, et muent par l’ambition de :
                </div>
                <div class={styles.presentation}>
                    <div class={styles.cardPresentation}>
                        <div class={styles.icon}>
                            <img src="/implementation_purple.png" alt="implemntation icon"   />
                        </div>
                        <div class={styles.texte}>
                            <div className="p">
                            Créer et d’implémenter les projets entrepreneuriaux pour les jeunes en quête
                            d’insertion professionnelle dans différents domaines de l’activité économique
                            du Cameroun
                            </div>
                        </div>
                    </div>
                    <div class={styles.cardPresentation}>
                        <div class={styles.icon}>
                            <img src="/businessman-with-tie_purple.png" alt="implemntation icon"   />
                        </div>
                        <div class={styles.texte}>
                            <div className="p">
                            Promouvoir et développer l’esprit entrepreneurial et de leadership dès la base
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
       </section>
    )
}

function Membre (){
    return(
        <section>
            <Container>
                <div class = {styles.member}>
                    <div class={styles.icon}>
                        <img src="/utilisateu_purple.png" alt="" />
                    </div>
                    <div class = 'h1'>
                        Devenir membre
                    </div>
                    <div class='p' style={{width : '80%', margin : 'auto', "text-align" : "center"}}>
                    pour devenir membre, il faut être camerounais de bonne moralité
                    ayant un attrait pour l’entrepreneuriat et le leadership. Voir Statuts et règlement
                    intérieur pour les conditionnalités. Mettre les statuts et règlement version PDF.
                    </div>

                    <Button>Devenir Membre</Button>
                </div>
            </Container>
        </section>
    )
}