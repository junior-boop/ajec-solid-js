import SolidMarkdown from 'solid-markdown'

import Container from "../../composants/container/container";
import Vide from "../../composants/vide";
import styles from './apropos.module.css'
import styles_2 from '../clubpage/clubpages.module.css'
import { apropos } from './aproposmd';
import { responsable, Scientifique } from '../clubpage/reponsable';
import { Member } from '../clubpage/clubpages';

export default function Apropos(){

    const respo = responsable

    return(
        <div>
            <title>AJEC | A Propos</title>
            <Vide />
            <Header />
            <Container>
                <section>
                    <div class={styles_2.leftContenu} style={{"text-align" : 'justify', margin : '0 auto'}}>
                        <div className="h3" style={{"text-align" : 'center'}}>CONCEPTION, INNOVATION, ENTREPRENEURIAT</div>
                        <div className="h4" style={{"text-align" : 'center', "font-style" : 'italic'}}>NB : Propriété privée de l’AJEC</div>
                        
                        <SolidMarkdown children={apropos} />
                    </div>
                </section>
                <div style={{ margin: '5rem 0' }}>
                    <div className="h3" style={{"text-align" : 'center', "text-transform":'uppercase'}}>Membres du bureau executif de l'AJEC</div>
                    <div class={styles.membercontentApropos}>
                        {
                            responsable.map(el => (<Member 
                                    poste={el.poste}
                                    job={el.job}
                                    description={el.description}
                                    nom={el.nom}
                                />))
                        }
                    </div>
                </div>
                <div style={{ margin: '5rem 0' }}>
                    <div className="h3" style={{"text-align" : 'center', "text-transform":'uppercase'}}>MEMBRES DU COMITE SCIENTIQUE DE L’AJEC</div>
                    <div class={styles.membercontentApropos}>
                        {
                            Scientifique.map(el => (<Member 
                                    poste={el.poste}
                                    job={el.job}
                                    description={el.description}
                                    nom={el.nom}
                                />))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

function Header(){
    return(
        <section id="header" style={{overflow : 'visible', "margin-bottom" : '5rem' }}>
            <Container>
                <div class="h1" style={{"text-align" : 'center', color : '#5711B1'}}>
                    ASSOCIATION DES JEUNES ENTREPRENEURS DU CAMEROUN
                </div>
                <div class={styles.aproposheader}>
                    <div class={styles.headerimage}>
                        <img src={'/diapos.jpg'} alt="" />
                    </div>
                </div>
                
            </Container>
        </section>
    )
}