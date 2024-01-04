import styles from './grid.module.css'

export default function Grid({children, id, data = ''}){
    return(
        <div id = {id} class={styles.grid} data-data = {data} >
            {children}
        </div>
    )
}
export  function Gridtemplate_3({children}){
    return(
        <div class={styles.grid_3}>
            {children}
        </div>
    )
}