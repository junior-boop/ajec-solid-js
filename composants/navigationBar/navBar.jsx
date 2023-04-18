import Button from '../boutton/boutton'
import styles from './navBar.module.css'
import { A } from '@solidjs/router'

export default function NavBar(){
    return(
        <div class={styles.navBar}>
            <div class={styles.navBarContainer}>
                <div class={styles.logo}>
                    <img src="./src/assets/logo.png" alt="logo-ajec" />
                </div>
                <div class={styles.navigation}>
                    <ul>
                        <li><A href='/'>A Propos</A></li>
                        <li><A href='/'>Activites</A></li>
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