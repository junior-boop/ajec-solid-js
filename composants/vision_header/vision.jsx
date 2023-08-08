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
                            Réduire le taux de chômage et de sous-emploi au Cameroun, développer chez le jeune
                            la culture de l’auto-emploi dès la base, contribuer à l’épanouissement du citoyen et au
                            développement du Cameroun.
                            </span>
                        </div>
                    </div>
                    <div class={styles.right}>
                        <div>
                            <div>
                                <p class="p">
                                <span style={{ color : '#7b24ea', "font-weight" : '700'}}> Une association opportune :</span>
                                Depuis 2012, l’AJEC mène ses activités sur l’étendue du
                                territoire camerounais. Elle est née en raison de :
                                </p>
                            </div>
                            <div class="" style={{"margin-bottom" : '24px'}}>
                                <li class="p">
                                Du faible taux d’insertion professionnel des jeunes diplômés due à
                                l’inadaptation des contenus de formation aux attentes réelles des entreprises ; 
                                </li>
                                <li class="p">
                                Du fort taux de sous-emploi (pourcentage à cette date) et de chômage
                                (pourcentage)
                                </li>
                                <li class="p">
                                De la vacuité des curricula au niveau de l’enseignement obligatoire (primaire et
                                secondaire) sur l’entrepreneuriat et le leadership.
                                </li>
                            </div>
                            {/* <div>
                                <p class="p">Depuis 2012, l'AJEC oeuvre dans le triangle national pour 
                                impacter positivement la courbe d'évolution du Cameroun.
                                </p>
                            </div> */}
                            <Button>Changeons les choses ensemble.</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}