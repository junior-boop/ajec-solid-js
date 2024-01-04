import Container from '../container/container'
import styles from './footer.module.css'
import { A } from '@solidjs/router'

export default function Footer(){
    return(
        <footer>
            <section>
                <Container>
                    <div class="copyright">
                        2023© Copyright &nbsp; <strong><span>Cissy's Hair</span></strong>. All Rights Reserved
                        </div>
                        <div style={{"text-align" : 'center'}}>Designed by <a href="https://geniusofdigital.com/">GeniusOfDigital</a>
                    </div>
                </Container>
            </section>
        </footer>
    )
}