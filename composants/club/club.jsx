import Container from '../container/container'
import styles from './club.module.css'

export function ClubSection(){
    return(
        <section>
            <Container>
                <div class="h1" style={{color : '#7b24ea', "text-align" : 'center'}}>
                    Nos Differents Clubs
                </div>
                <div class={styles.grid_template_3}>
                    <Club />
                    <Club />
                    <Club />
                    <Club />
                    <Club />
                    <Club />
                </div>
            </Container>
        </section>
    )
}


function Club ({name, image, url}){
    return(
        <div class={styles.club}>
            <div class={styles.clubContainer}>
                <div class={styles.img} style = {{"background-image" : `url(${image})`}}>
                    
                </div>
                <div class="h4">{name}</div>
            </div>
        </div>
    )
}