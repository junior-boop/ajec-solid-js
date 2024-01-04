import Container from "../container/container";
import { AddIcon, DeleteIcon, InfosIcon, ModifIcon } from "../icons";
import Vide from "../vide";
import styles from './activites.module.css'
import { A } from "@solidjs/router";
import Grid from "../grid";
import GridElement, { Partenaire, SociauxItem } from "../gridElement";
import { TitleBar } from "../../src/home/home";




export default function Activity(){
    return(
        <div>
            <Container>
                <Vide />
                <Grid>
                    <GridElement start={'span 13'}>
                        bonjour
                    </GridElement>
                </Grid>
                <TitleBar titre={'Nos Produits'} />
                <Grid>
                    <GridElement start={1} end={7} long btn >
                        bonjour
                    </GridElement>
                    <GridElement start={'span 7'} long btn> 
                        bonjour
                    </GridElement>
                    <GridElement start={1} end={7} long btn>
                        bonjour
                    </GridElement>
                    <GridElement start={'span 7'} long btn>
                        bonjour
                    </GridElement>
                </Grid>
                <TitleBar titre={'Suivez nous sur les réseaux'} />
                <Grid>
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>}
                    />
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"/></svg>}
                    />
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"/></svg>}
                    />
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 256 256"><path fill="currentColor" d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48Zm-72.11 61.81l-48 32A4 4 0 0 1 108 160V96a4 4 0 0 1 6.22-3.33l48 32a4 4 0 0 1 0 6.66Z"/></svg>}
                    />
                    <Partenaire icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/></svg>} >
                        Contactez nous pour devenir partenaire
                    </Partenaire>
                </Grid>
            </Container>
        </div>
    )
}


function ArticleItemlist ({image, name, url = '/activites/1234'}){
    return(
        <div class={styles.articlesitemlist}  style={{"background-image" : `url(${image})`}}>
            <A href={url} class={styles.subject}>
                <div style={{"font-size" : 'calc(10px + 1vmin)', "font-weight" : "500"}}>Bonjour</div>
                <div style={{ "font-weight" : "400", color : '#777'}}>12 May 2023, 12 : 24</div>
            </A>
            <div>
                <div>08 Images</div>
            </div>
            <div class={styles.controle}>
                <button>
                    Modifier 
                    <ModifIcon style = {{ width : "1.7rem"}} />
                </button>
                <button>
                    Supprimer 
                    <DeleteIcon style = {{ width : "2rem"}} />
                </button>
            </div>
        </div>
    )
}

function SimpleArticle({image, url = '/activites/1234'}){
    return(
        <article class={styles.article}>
            <div>
                <A href={url} className="h3" style={{"font-weight" : '600'}}>
                    le titre de l'article
                </A>
                <div className="p">
                    une breve description de l'article Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vero modi ipsum?
                    <span style={{color : '#7b24ea', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}>Publier le 03-12-2023 |  Avoir plus d'information </span>
                </div>
            </div>
            <A href={url} class={styles.image} style = {{ "background-image" : `url(${image})`}}>
                    <span style={{width : '42px', height :'42px' , "background-color" : '#7b24ea', display : 'flex', "align-items" : 'center', "justify-content" : 'center', "border-radius" : '50%'}}>
                        <FlecheGauche style ={{ color : 'white', width : '24px', height :'24px', }} />
                    </span>
            </A>
        </article>
    )
}


const ProgrammePlus = () => {
    return(
        <div class={styles.programmeplus}>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '28px'}}>
                Decouvrez notre Calendrier d'activites de l'annee
            </div>
            <A href="/">
                <button>
                    Programme annuel
                </button>
            </A>
        </div>
    )
}


export const ImagesLastProgramme = () => {
    return(
        <div class={styles.imageslastprogramme}>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '16px'}}>
                Galerie
            </div>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '28px'}}>
                Les Images du devenier Evenement
            </div>
            <div class={styles.galleries}>
                <div style={{"background-image" : `url(/diapos.jpg)`}}></div>
                <div style={{"background-image" : `url(/diapos.jpg)`}}></div>
            </div>
        </div>
    )
}
/*
    construire un header en grid
    construire un partie pour les images
    construire un banniere et une gallerie images
*/