import Button from "../boutton/boutton";
import Container from "../container/container";
import styles from './vision.module.css'
import vector from '../../src/assets/Vector_7.png'

export default function Vision(){
    return(
        <section id="vision">
            <Container>
                <div class={styles.visionContainer}>
                    <div class={styles.left}>
                        <div class = {styles.vector}>
                            <img src={vector} alt="vector" />
                        </div>
                        <div class={styles.block}>
                            <div>
                                <span class="h2">Une association,</span>
                                <span class="h2">Une même vision</span>
                            </div>
                            <span class="p">
                                Réduire le taux de chômage, favoriser l’auto-emploi et 
                                contribuer à l’épanouissement du citoyen et au développement 
                                positif des tissus économiques et sociaux du Cameroun.
                            </span>
                        </div>
                    </div>
                    <div class={styles.right}>
                        <div>
                            <div>
                                <p class="p">Concevoir et développer des projets innovants auprès de la 
                                    jeunesse en quête d’emploi afin de promouvoir auprès d’eux l’esprit 
                                    d’entrepreneuriat et de leadership. <span style={{ color : '#7b24ea', "font-weight" : '700'}}> Telle est notre mission</span>.
                                </p>
                            </div>
                            <div>
                                <p class="p">L'Association voit le jour suite à un constat : le faible 
                                taux d'insertion socioprofessionnelle des jeunes due au déphasage entre 
                                l'enseignement reçu et les compétences réquises dans le monde professionnel.
                                </p>
                            </div>
                            <div>
                                <p class="p">Depuis 2012, l'AJEC oeuvre dans le triangle national pour 
                                impacter positivement la courbe d'évolution du Cameroun.
                                </p>
                            </div>
                            <Button>Changeons les choses ensemble.</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}