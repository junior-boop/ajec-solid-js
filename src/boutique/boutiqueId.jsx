import Container from "../../composants/container/container";
import styles from './index.module.css'
import { db } from "../utils/firebase";
import { doc, getDoc } from 'firebase/firestore'
import { useRouteData } from '@solidjs/router'

// import { useContextGlobale } from "../context/globalContext";


import { createEffect, createSignal, onMount } from 'solid-js'
import { Sociaux } from "../../composants/sociaux";
import GridElement from "../../composants/gridElement";
import { PlayIcon } from "../../composants/icons";

export default function BoutiqueId(){
    const [data, setData] = createSignal({})

    const id = useRouteData()

    async function getInfos(){
        const docRef = doc(db, 'produits', id)
        const snap = await getDoc(docRef)

        console.log(snap.data())
        setData({...snap.data()})
    }

    createEffect(() => {
        getInfos()
    })



    const Price = data().price !== undefined && new Intl.NumberFormat('fr-Fr', {style : 'currency', currency : 'XAF'}).format(data().price)

    return(
        <div>
            <Container>
                <div class={styles.shopProductPage}>
                    <div class={styles.product}>
                        <div class={styles.champ}>
                            <div class={styles.image}>
                                <img src={data().image} alt="" />
                            </div>
                        </div>
                        <div class={styles.champ}>
                            <div class={styles.items}>
                                <div class={styles.label}>Nom</div>
                                <div class={styles.data}>{data().name}</div>
                            </div>
                            <div class={styles.items}>
                                <div class={styles.label}>Categorie</div>
                                <div class={styles.data}>{data().categorie}</div>
                            </div>
                            <div class={styles.items}>
                                <div class={styles.label}>Prix</div>
                                <div class={styles.data}>{data().price}</div>
                            </div>
                            <div class={styles.items}>
                                <div class={styles.label}>Description</div>
                                <pre class={styles.pre}>{data().description}</pre>
                            </div>
                            
                            <div>
                                <button>ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                    <div style={{"margin-top" : "32px"}}>
                    <GridElement >
                        <div class = {styles.videoAffiche}>
                            <button>
                                <PlayIcon style = {{width : '4vmin'}} />
                            </button>
                        </div>
                    </GridElement>
                    </div>
                </div>
            </Container>
            <div style={{"margin-top" : "32px"}}>
            <Container>
                <Sociaux />
            </Container>
            </div>
        </div>
    )
}

