import { createSignal } from "solid-js"
import styles from './programmeItem.module.css'
import { A } from "@solidjs/router"

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

export default function ProgrammeItems({abr, name, image, url = '/'}){

    const trackerMousePositionInComponent = (e) => {
        if(openScene()){
             setMousePositionOnComponent({
                 px : e.layerX * 0.2,
                 py : e.layerY * 0.2
             })
        } 
     }

    return(
        <A style={{"text-decoration":"none", border : 'none', outline : 'none'}} href={url}>
            <aside class={styles.programmeItems} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} onMouseMove={trackerMousePositionInComponent} >
                <ImageComponent image={image} />
                <InfoComponent abr={abr} name={name}/>
            </aside>
        </A>
    )
}





const ImageComponent = ({image}) => {
    return(
        <div class={styles.imageComponent}>
            <img src={image} alt="" />
        </div>
    )
}

export const InfoComponent = ({abr, name}) => {
    return(
        <div class={styles.infoComponent}>
            <div>
                
                <div class={styles.desc}>
                    <span>
                        {abr}
                        <span style={{width : '42px', height :'42px' , "background-color" : '#CDABF7', display : 'flex', "align-items" : 'center', "justify-content" : 'center', "border-radius" : '50%'}}>
                            <FlecheGauche style ={{ color : '#5711B1', width : '24px', height :'24px', }} />
                        </span>
                    </span>
                   <p class="p" style={{ "font-size" : '24px', "line-height" : 1, color : 'white'}}> {name}
                        <span style={{color : '#CDABF7', display : 'block', 'padding-top' : '12px', "font-size" : '16px'}}> Avoir plus d'information </span>
                   </p>
                </div>
            </div>
        </div>
    )
}

export function FlecheGauche(props) {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m12 26l10-10L12 6"/></svg>
}