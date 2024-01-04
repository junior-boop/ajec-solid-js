import { useLocation, useNavigate } from '@solidjs/router'
import { FlecheLeft } from '../icons'
import styles from './statutbar.module.css'

export default function StatutBar(){

    const handleBack = () => {
        const located = useLocation()
        const routeParse = located.pathname.split("/")

        console.log(routeParse)
        location.pathname = `/${routeParse[1]}`
        
    }

    

    return(
        <div class = {styles.navbar}>
            <div>
                <button onClick = {() => handleBack()} >
                    <FlecheLeft style = {{ width : '2.7vmin' }} />
                    <span>
                        Retour
                    </span>
                </button>
            </div>
        </div>
    )
} 