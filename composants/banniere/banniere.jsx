import Container from '../container/container'
import { FlecheRight } from '../icons'
import styles from './banniere.module.css'
export default function Banniere({image}){
    return(
        <section class = {styles.banniere} style={{"background-image" : `url(${image})`}}>
            <div class={styles.bande}>
                <Container>
                    <div style = {{ display : 'flex', "align-items" : 'center', height : '100%', "justify-content" : 'center', width : "100%", }}>
                        Pour acheter nos gammes de mèche à tressé suivez{" "}
                        <span style={{color : '#018AEC', "margin-left" : '12px'}}>{" "}la flèche</span> 
                        <div style={{ "background-color" : 'white', display : 'flex', width : '30px', "aspect-ratio" : 1, "border-radius" : '50%', "align-items" : 'center', "justify-content" : 'center', "margin-left" : '12px'}}>
                            <FlecheRight style = {{ width : '1.7vmin', color : '#018AEC'}} />    
                        </div> 
                    </div>

                </Container>
            </div>
            <Container>
                <div style = {{display : 'flex', "flex-direction" : 'column', "justify-content" : 'space-between', height : 'calc(100vh - 16vmin)'}}>
                    <div class={styles.textTitre}>
                        <div style = {{color : 'white'}} class= {styles.titre}>Mes Tresses</div>
                        <div style = {{color : 'white'}} class= {styles.titre}>Ma liberté</div>
                        <div style={{"font-size" : 'calc(18px + 1vmin)', "font-weight" : "700", color : 'white'}}>Découvrez la nouvelle gamme Spring Twist</div>
                    </div>
                    <div class={styles.bas}>
                        <button>
                            Gamme Spring Twist
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}


export function Titre(){
    return(
        <div></div>
    )
}