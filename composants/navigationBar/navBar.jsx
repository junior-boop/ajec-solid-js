import Button from '../boutton/boutton'
import styles from './navBar.module.css'
import { A, useLocation } from '@solidjs/router'
import logo from '../../src/assets/Name.png'

import { createSignal, onMount, createEffect } from 'solid-js'
import Container from '../container/container'
import burger from '../../src/assets/burgerMenu.png'
import { MdiBasket, MdiCartMinus } from '../icons'


const [clubMenu, setClubMenu] = createSignal(false)


   
export default function NavBar(){
    const [visible, setvisible] = createSignal(false)
    const [phoneMenu, setPhoneMenu] = createSignal(false)

    createEffect(() => {
        let currentPosition = 0
        window.addEventListener('scroll', () => {
            setTimeout(() => {
                currentPosition = scrollY
            }, 500)

            if(currentPosition > 75) {
                if(currentPosition > scrollY) setvisible(false)
                else setvisible(true)
            }
        })
    })
    
    const handleClickMenu = () =>{
        console.log('je fonctionne')
    }

    const LI = ({url = '/', titre}) => {
        return(
            <li onClick = {() => setPhoneMenu(false)}><A href={url}>{titre}</A></li>
        )
    }
    

    
    return(
        <div data-visible = {visible()} class={styles.navBar}>
            <Container>
            <div class={styles.navBarContainer}>
                <A href = '/' class={styles.logo}>
                    <img src={logo} alt="logo-ajec" />
                </A>
                <div onClick={handleClickMenu} class={styles.burger}>
                    <img src={burger} alt="" />
                </div>
                <div data-isOpen = {phoneMenu()} class={styles.navigationphone}>
                    <ul>
                        <LI titre={'Accueil'} />
                        <LI url='/activites' titre={'Activites'} />
                        <LI url='/programme' titre={'Programmes'} />
                        <LI url='/a-propos' titre={'A Propos'} />
                    </ul>
                    
                </div>
                <div class={styles.navigation}>
                    <ul>
                        <NavItem titre={"Boutique"} url='/shop'/>
                        <NavItem titre={"Tutoriels"} url='/programmes'/>
                        <NavItem titre={"A Propos"} url='/assets'/>
                        <NavItem titre={"Contactez-nous"} url='/contact'/>
                        <Button>
                            <MdiBasket  />
                        </Button>
                    </ul>
                </div>
            </div>
            </Container>
        </div>
    )
}

function NavItem({url = '/', titre}){
    const [isActive, setIsActive] =createSignal(false);

    (() => {
        setInterval(() => {
            const located = location.pathname
            if(url === located) setIsActive(true)
            else setIsActive(false)
        }, 300)
    })()
     

    return(
        <li data-isActive = {isActive()}><A href={url}>{titre}</A></li>
    )
}



// setTimeout(() => location.reload(), 1000)