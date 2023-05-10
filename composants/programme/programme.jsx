import { createEffect, createSignal, onMount } from "solid-js";
import Container from "../container/container";
import ProgrammeItems from "../programmeItems/programmeItem";
import styles from './programme.module.css'

import entreprenariat from '../../src/assets/entreprenariat-femme.jpg'
import image2 from '../../src/assets/girl4.jpg'
import scientifique from '../../src/assets/scientist.jpg'
import PVU from '../../src/assets/utile.jpg'
import Homme from '../../src/assets/homme.jpg'
import student from '../../src/assets/student.jpg'
import { FlecheLeft, FlecheRight } from "../icons";

const [scrollPageState, setScrollPageState] = createSignal(1)
const [scrollContentWidth, setScrollContentWidth] = createSignal(0)
const [parentContent, setParentContent] = createSignal(0)
const [diffBetween, setDiffBetween] = createSignal(0)






export default function Programme(){
    

    const ref = (e) => {
        setTimeout(() => {
            setScrollContentWidth(e.offsetWidth)
        }, 500)
    }
    
    const refContent = (e) => {
        setTimeout(() => {
            setParentContent(e.offsetWidth)
        }, 500)
    }
    
    createEffect(() => {
        if( scrollPageState() > 2) setScrollPageState(2)
        else if(scrollPageState() < 1) setScrollPageState(1)
    
        console.log(parentContent(), scrollContentWidth())

        const difference = scrollContentWidth() - parentContent()
        setDiffBetween(difference)
        console.log(difference)
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
                        <div class={styles.btn_left} data-visible = {scrollPageState() < 2 ? false : true} style={{ display : scrollPageState() < 2 ? 'none' : 'flex'}}>
                            <button onClick = {() => {setScrollPageState(scrollPageState() - 1)}}>
                                <FlecheLeft style = {{ width : '2.2rem', height : '2.2rem'}} />
                            </button>
                        </div>
                        <div ref={refContent}>
                            <div ref={ref} data-visible = {scrollPageState() > 1 ? false : true} style={{ transform : scrollPageState() > 1  ? `translate(${-diffBetween()}px)` : `translate(0)`}}>
                                <ProgrammeItems image={entreprenariat} abr={"PPEF"} name={"Programme de Promotion de l’Entrepreneuriat Féminin..."}/>
                                <ProgrammeItems image={image2} abr={"PRCE"} name={"Programme de Renforcement des Capacités des Enseignants..."}/>
                                <ProgrammeItems image={scientifique} abr={"PEOS"} name={"Programmes de d’Elaboration des Ouvrages Scientifiques..."}/>
                                <ProgrammeItems image={PVU} abr={"PVU"} name={"Programme Vancaces Utiles (PVU)"}/>
                                <ProgrammeItems image={Homme} abr={"PCDRS"} name={"Programme de Conception des Documentaires/ Revues Scientifi..."}/>
                                <ProgrammeItems image={student} name={"Programmes d’Enseignement Supérieur Polyvalent Conception..."} abr={'PESPC'}/>
                            </div>
                        </div>
                        <div class={styles.btn_right} data-visible = {scrollPageState() > 1 ? false : true} style={{ display : scrollPageState() > 1 ? 'none' : 'flex'}}>
                            <button onClick = {() => {setScrollPageState(scrollPageState() + 1)}}>
                                <FlecheRight style = {{ width : '2.2rem', height : '2.2rem'}} />
                            </button>
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