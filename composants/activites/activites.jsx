import Container from "../container/container";
import Vide from "../vide";
import styles from './activites.module.css'
import images from '../../src/images/Eleves.jpg'
import Button from "../boutton/boutton";
import { FlecheGauche } from "../programmeItems/programmeItem";
import { A, useLocation } from "@solidjs/router";
import { article } from "../../src/Api/api";

export default function Activity(){
    console.log(article)
    return(
        <div>
            <Vide />
            <Header />
            <Container>
                {
                    article.length > 0 
                    ? <ActivitesContaine />
                    :(
                        <div class={styles.contenuvide}>
                            contenu vide
                        </div>
                    )
                }
            </Container>
            
        </div>
    )
}




function ActivitesContaine() {
    return(
        <div class={styles.activity}>
            <div class={styles.content}>
                <div style={{"min-height" : '70vh'}}>
                    {
                        article.map((el, key) => <SimpleArticle image={'/diapos.jpg'} url={`/activites/${1}`} data = {el}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function Header(){
    return(
        <section id="header" style={{overflow : 'visible', padding : '3rem 0'}}>
            <Container>
                <div className="h2" style={{color : '#7b24ea', "text-transform" : 'uppercase'}}>Les activités</div>
            </Container>
        </section>
    )
}

function ArticlesGrand ({image, name, url = '/'}){
    return(
        <div class={styles.articlesgrand}  style={{"background-image" : `url(${image})`}}>
            <div>
                <A href={url} class={styles.desc}>
                   <p class="p" style={{ "font-size" : '28px', "line-height" : 1, color : 'white', margin : 0}}> {name}
                        <span style={{color : '#CDABF7', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}> Avoir plus d'information </span>
                   </p>
                   <span style={{width : '42px', height :'42px' , "background-color" : '#7b24ea', display : 'flex', "align-items" : 'center', "justify-content" : 'center', "border-radius" : '50%'}}>
                        <FlecheGauche style ={{ color : 'white', width : '24px', height :'24px', }} />
                    </span>
                </A>
            </div>
        </div>
    )
}

function SimpleArticle({image, url = '/', data}){

    const query = useLocation()

    const handleQuery = () => {
            query.query = data
    }

    let sous_titre = data.sous_titre.length > 100 ? data.sous_titre.substring(0, 99)+"..." : data.sous_titre

    return(
        <article class={styles.article}>
            <div>
                <A href={url} className="h3" style={{"font-weight" : '600'}} onClick={handleQuery}>
                    {data.titre}
                </A>
                <div className="p">
                    {sous_titre}
                    <span style={{color : '#7b24ea', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}>Publier le 03-12-2023 |  Avoir plus d'information </span>
                </div>
            </div>
            <A href={url} class={styles.image} style = {{ "background-image" : `url(${data.imagePrincipale})`}} onClick={handleQuery}>
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


export const ImagesLastProgramme = ({id}) => {
    return(
        <A href={`/galerie/${id}`} class={styles.imageslastprogramme}>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '16px'}}>
                Galerie
            </div>
            <div style = {{"font-weight" : '500', "line-height" : 1.1, "font-size" : '28px'}}>
                Les Images de l'évènement 
            </div>
            <div class={styles.galleries}>
                <div style={{"background-image" : `url(/diapos.jpg)`}}></div>
                <div style={{"background-image" : `url(/diapos.jpg)`}}></div>
            </div>
        </A>
    )
}
/*
    construire un header en grid
    construire un partie pour les images
    construire un banniere et une gallerie images
*/