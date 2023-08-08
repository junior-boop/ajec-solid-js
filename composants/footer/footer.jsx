import Container from '../container/container'
import styles from './footer.module.css'
import logo_footer from '../../src/assets/logo_footer_2.png'
import { A } from '@solidjs/router'

export default function Footer(){
    return(
        <footer>
            <section>
            <Container>
                <div class={styles.footer}>
                    <aside>
                        <div style={{ width : '300px', "aspect-ratio": 1, "background-image" : `url(${logo_footer})`, "background-size" : 'contain', "background-repeat" : 'no-repeat'}}></div>
                    </aside>
                    <aside>
                        <p>
                            <strong>Siege</strong><br />
                            Yaoundé - Cameroun
                            <br/><br/>
                            <strong>Tel</strong> <br/>(+237) 697 976 591<br/>(+237) 699
                            120 807 <br/>(+237) 620 174 876<br/>
                            <strong>E-mail:</strong> contact@ajecofficiel.com<br/>
                            <strong>Facebook:</strong> Ajec Cameroun (Officiel)<br/>
                            <strong>LinkedIn:</strong> AJEC Officiel<br/>
                        </p>
                    </aside>
                    <aside>
                            <h4>Clubs d’entrepreneuriat</h4>
                            <ul>
                                <li>
                                <i class="bx bx-chevron-right"></i>
                                <A href="/clubs/ai-ic">Club d'Entrepreneuriat Agro-industrie et Industrie Chimique
                                    (A/IC)
                                </A>
                                </li>
                                <li>
                                <i class="bx bx-chevron-right"></i>
                                <A href="/clubs/a-a">Club d'Entrepreneuriat Agriculture et Agroforesterie
                                    (A/A)</A>
                                </li>
                                <li>
                                <i class="bx bx-chevron-right"></i>
                                <A href="/clubs/er">Club d'Entrepreneuriat Energies Renouvelables (ER)</A>
                                </li>
                                <li>
                                <i class="bx bx-chevron-right"></i>
                                <A href="/clubs/jpr">Club d'Entrepreneuriat Journal-Poésie-Roman (JPR)</A>
                                </li>
                                <li>
                                <i class="bx bx-chevron-right"></i>
                                <A href="/clubs/num">Club d'Entrepreneuriat Numérique (N)</A>
                                </li>
                                <li>
                                <i class="bx bx-chevron-right"></i>
                                <A href="/clubs/e-cl">Club d'Entrepreneuriat Environnement et Changements Climatiques (E/CL)</A>
                                </li>
                            </ul>
                    </aside>
                </div>
            </Container>
            </section>
            <section>
                <Container>
                    <div class="copyright">
                        2023© Copyright &nbsp; <strong><span>AJEC</span></strong>. All Rights Reserved
                        </div>
                        <div style={{"text-align" : 'center'}}>Designed by <a href="https://geniusofdigital.com/">GeniusOfDigital</a>
                    </div>
                </Container>
            </section>
        </footer>
    )
}