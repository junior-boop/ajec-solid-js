import Button from '../boutton/boutton'
import styles from './navBar.module.css'
import { A } from '@solidjs/router'
import logo from '../../src/assets/logo.png'

export default function NavBar(){
    return(
        <div class={styles.navBar}>
            <div class={styles.navBarContainer}>
                <div class={styles.logo}>
                    <img src={logo} alt="logo-ajec" />
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