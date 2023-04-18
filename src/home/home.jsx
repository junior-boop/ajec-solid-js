import Header from '../../composants/header_home/header'
import Programme from '../../composants/programme/programme'
import Vide from '../../composants/vide'
import Vision from '../../composants/vision_header/vision'
import styles from './home.module.css'

export default function Home(){
    return(
        <div class={styles.home}>
            <Vide />
            <Header />
            <Vision />
            <Programme />
        </div>
    )
}