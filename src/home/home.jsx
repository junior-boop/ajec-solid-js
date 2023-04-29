import { ClubSection } from '../../composants/club/club'
import { Diapo_2 } from '../../composants/diapo/diapo'
import Footer from '../../composants/footer/footer'
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
            <Diapo_2 image={'/diapos.jpg'} />
            <ClubSection />
        </div>
    )
}