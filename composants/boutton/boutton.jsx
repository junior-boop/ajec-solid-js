import { A } from "@solidjs/router"
import styles from './boutton.module.css'


/**
 * 
 * @param {{children : *, href : string}} param0 
 * @returns 
 */
export default function Button({children, href = '/'}){

    return (
        <A href={href} class={styles.button}>{children}</A>
    )
}