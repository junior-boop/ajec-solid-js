import { A } from '@solidjs/router'
import { FlecheRight } from '../icons'
import styles from './gridelement.module.css'

export default function GridElement({start, end, image, children, btn, long, notBlack, style, url }) {
    return(
        <div 
        class={styles.gridElement}
        style={{
            "grid-column" : `${start}/${end}`, 
            "background-image" : `url(${image})`,
            'height': long ? '600px' : '500px',
            ...style
        }}
        >
            <div style = {{ height : '77%'}}>
                {children}
            </div>
            {
                children && image && !notBlack
                ? (<div class={styles.back}></div>)
                : null
            }
            <div style = {{height : '49.22px'}}>
                {
                    btn 
                    ? (<A href = {'/'}>
                    <button>
                        <FlecheRight style = {{ width : '3vmin'}} />
                    </button>
                    </A>)
                    : null
                }
            </div>
        </div>
    )
}
export function ProductItem({start, end, image,  }) {
    return(
        <div 
            class={styles.productElement}
            style={{ 
                'height': '600px' 
            }}
        >
            <div>
                <span>French <br /> Braids</span>
                <span>Noire & Marron</span>
            </div>
            <div>
                <span>15 000</span><sup>XAF</sup>
            </div>
            <div>
                <div>
                    <img src={`${image}`} height={"100%"} alt="" />
                </div>
            </div>
        </div>
    )
}
export function SociauxItem({ icon, url = '/' }) {
    return(
        <A href={url}
        class={styles.sociauxElement}
        >
            <div>
                {icon}
            </div>
            
        </A>
    )
}
export function Partenaire({ icon, url = '/', children }) {
    return(
        <A href={url}
        class={styles.partenaire}
        >
            <div>
                {children}
            </div>
            <div>
                {icon}
            </div>
            
        </A>
    )
}