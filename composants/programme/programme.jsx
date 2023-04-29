import { createEffect, createSignal, onMount } from "solid-js";
import Container from "../container/container";
import ProgrammeItems from "../programmeItems/programmeItem";
import styles from './programme.module.css'

export default function Programme(){
    const [height, setHeight] = createSignal(0)

    const ref = (el) => {

        onMount(() => {
            setHeight(el.offsetWidth)
            console.log('je fonctionne', el.offsetWidth)
        })
    }

    createEffect(() => {
        console.log(height())
    })

    
    return(
        <section id="programme">
            <CourbeIn class = {styles.courbe_in}/>
            <Container>
                <div class = {styles.programme}>
                    <div class = {styles.first}>
                        <div class='h2' style={{color : '#7b24ea', "text-align": 'center'}}>Foire aux Programmes</div>
                        <div class="p" style={{ "text-align" : 'center'}}>Un nouveau mode de formation par Programmes permettant d’associer 
                        l’enseignement général et l’enseignement professionnel et surtout la maîtrise des 
                        transferts des compétences d’un domaine à un autre.</div>
                    </div>
                    <div class = {styles.second}>
                        <div class={[styles.btn, styles.btn_left]}>
                            <button></button>
                        </div>
                        <div ref={ref} >
                            <ProgrammeItems />
                            <ProgrammeItems />
                            <ProgrammeItems />
                            <ProgrammeItems />
                            <ProgrammeItems />
                            <ProgrammeItems />
                        </div>
                        <div class={[styles.btn, styles.btn_left]}>
                            <button></button>
                        </div>
                    </div>
                    <div class = {styles.third}></div>
                </div>
            </Container>
            <CourbeOut class = {styles.courbe_out} />
        </section>
    )
}

function CourbeIn(props){
    return(
        <svg viewBox="0 0 677 129" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M-493.686 55.1516C-493.686 55.1516 11.5429 134.634 199.81 57.5409C388.077 -19.5522 514.675 -193.109 568.7 -345.167C621.542 -493.9 639.324 -816.464 639.324 -816.464" stroke="#7B24EA" stroke-width="75"/>
        </svg>
    )
}

function CourbeOut(props){
    return(
        <svg viewBox="0 0 1369 481" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1446 38C1446 38 1127.93 84.0771 971.667 187.398C815.403 290.719 723.871 416.151 654.982 504.295C392.696 839.895 23 558.729 23 558.729" stroke="#7B24EA" stroke-width="75"/>
        </svg>
    )
}