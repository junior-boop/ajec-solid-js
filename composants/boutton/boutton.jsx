import { A } from "@solidjs/router"
import styles from './boutton.module.css'

export default function Button({children, style}){

    return (
        <A href="/" class={styles.button} style={style}>{children}</A>
    )
}