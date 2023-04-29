import { createSignal } from "solid-js"
import styles from './programmeItem.module.css'

const [openScene, setOpenScene] = createSignal(false)
const [mousePositionOnComponent, setMousePositionOnComponent] = createSignal({
    px: 0,
    py: 0
})


const handleMouseOver = (e) => {
    setOpenScene(!openScene())
    if(!openScene()){
        setMousePositionOnComponent({
            px : 0,
            py : 0
        })
    }
}

export default function ProgrammeItems(){

    const trackerMousePositionInComponent = (e) => {
        if(openScene()){
             setMousePositionOnComponent({
                 px : e.layerX * 0.2,
                 py : e.layerY * 0.2
             })
        } 
     }

    return(
        <aside class={styles.programmeItems} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} onMouseMove={trackerMousePositionInComponent} >
            {/* <BackgroundAside /> */}
            <ImageComponent />
            <InfoComponent />
        </aside>
    )
}


const BackgroundAside = () => {
    return(
        <div class={styles.backgroundAside}>
            <div>
                <div class={styles.before} style={{transform : `translateX(-${mousePositionOnComponent().px}px) translateY(${mousePositionOnComponent().py}px)`}}></div>
                {
                    openScene()
                    ? 'je suis au-dessus'
                    : 'je suis sortie'
                }
                <div class={styles.after} style={{transform : `translateX(${mousePositionOnComponent().px}px) translateY(-${mousePositionOnComponent().py}px)`}}></div>
            </div>
        </div>
    )
}


const ImageComponent = ({image}) => {
    return(
        <div class={styles.imageComponent}>
            <img src='/entreprenariat-femme.jpg' alt="" />
        </div>
    )
}

const InfoComponent = () => {
    return(
        <div class={styles.infoComponent}>
            <div>
                
                <div class={styles.desc}>
                    <span>
                        PPEF
                        <span style={{width : '42px', height :'42px' , "background-color" : '#CDABF7', display : 'flex', "align-items" : 'center', "justify-content" : 'center', "border-radius" : '50%'}}>
                            <FlecheGauche style ={{ color : '#5711B1', width : '24px', height :'24px', }} />
                        </span>
                    </span>
                   <p class="p" style={{ "font-size" : '24px', "line-height" : 1, color : 'white'}}> Programme de Promotion de l’Entrepreneuriat Féminin...
                        <span style={{color : '#CDABF7', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}> Avoir plus d'information </span>
                   </p>
                </div>
            </div>
        </div>
    )
}

function FlecheGauche(props) {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m12 26l10-10L12 6"/></svg>
}