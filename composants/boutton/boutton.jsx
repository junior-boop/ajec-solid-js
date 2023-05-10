import { A } from "@solidjs/router"
import styles from './boutton.module.css'

export default function Button({children}){

    return (
        <A href="/" class={styles.button}>{children}</A>
    )
}