import Button from '../../composants/boutton/boutton'
import Container from '../../composants/container/container'
import styles from './home.module.css'
import { A } from '@solidjs/router'

import images_1 from '../assets/fond.png'
import image_2 from '../assets/image_2.png'
import image_7 from '../assets/image_7.png'
import image_9 from '../assets/image_9.png'
import expert_1 from '../assets/expert_1.jpg'
import expert_2 from '../assets/expert_2.jpg'
import meche_1 from '../assets/meche_1.png'
import carte from '../assets/carte.png'
import partenaire from '../assets/partenaire.png'
import imageTuto from '../assets/tuto_femme.avif'
import cissyName from '../assets/Name.png'
import images_seul from '../assets/00d83c7e8f5b0527e054f52c8b75f1f0.jpg'
import Banniere, { Titre } from '../../composants/banniere/banniere'
import Grid, { Gridtemplate_3 } from '../../composants/grid'
import { LabelIcon, PlayIcon } from '../../composants/icons'
import GridElement, { Partenaire, ProductItem, SociauxItem } from '../../composants/gridElement'

export default function Home(){
    return(
        <div class={styles.home}>
            <title>AJEC</title>
            <Banniere image={images_1} />
            <Container>
                <div className="h2" style = {{ padding : '4rem 0', width : "100%", "text-align" : "center", "font-weight" : 'normal'}}>Les mèches à tresser selon 
                <span>
                    <img src={cissyName}  alt="cissy" />
                </span></div>
                <div style={{ "font-size" : "2vmin", padding : '3vmin', "background-color" : "#F7F1FE", "margin-bottom" : '3vmin', "border-radius" : "1vmin"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat tempus mauris. Nullam vestibulum euismod est varius rhoncus. Phasellus tortor neque, ornare ac augue id, luctus fermentum neque. Nullam aliquet risus in neque dictum, id placerat lorem laoreet. Cras pharetra tellus a mauris consequat pretium. Nullam leo orci, molestie ut vulputate eget, sodales vel ligula.
                </div>
                <TitleBar titre={"Toutes nos gammes de Produits"} btn url={'/produits'}/>
                <Grid>
                    <GridElement start={1} end={13} btn image={image_2}>
                    <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'flex-start',
                            "justify-content" : 'flex-end',
                            padding : '0 24px',
                            'max-width' : '70%',
                            height : '100%'
                        }}>
                            <span style={{"font-weight" : '700', "margin-bottom" : '7px', "font-size" : '36px', color : 'white'}}>Deux beautés</span>
                        <span style = {{
                            display : 'block',
                            'font-family': 'Inter',
                            'font-style': 'normalizeIntegration',
                            'font-weight': 800,
                            'font-size': '96px',
                            'line-height': '1',
                            color : 'white'
                            
                        }}> 
                            Spring Twist <br /> Passion Twist
                        </span>
                        </div>
                    </GridElement>
                    <GridElement start={1} end = {9} image={images_seul} />
                    <GridElement start={9} end = {13}btn>
                    <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'center',
                            "justify-content" : 'center',
                            height : '100%'
                        }}>
                            <span style={{"font-weight" : '700', "margin-bottom" : '6px', "font-size" : '32px'}}>La simplicité</span>
                        <span style = {{
                            display : 'block',
                            'font-family': 'Inter',
                            'font-style': 'normalizeIntegration',
                            'font-weight': 800,
                            'font-size': '64px',
                            'line-height': '1',
                            'text-align': 'center',
                            
                            background: 'radial-gradient(128.4% 432.7% at -24.51% 152.14%, #CB01EC 0%, #FF0000 100%)' /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                            'background-clip': 'text',
                            'text-fill-color':'transparent',
                        }}> Spanish Cours
                        </span>
                        </div>
                    </GridElement>
                    <GridElement start={1} end = {7}btn image={image_7}>
                    <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'flex-end',
                            "justify-content" : 'flex-end',
                            height : '100%'
                        }}>
                            
                            <span style = {{
                                display : 'block',
                                width: "248px",
                                'font-family': 'Inter',
                                'font-style': 'normalizeIntegration',
                                'font-weight': 800,
                                'font-size': '72px',
                                'line-height': '1',
                                'text-align': 'right',
                                
                                background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 155.22%)',
                                '-webkit-background-clip': 'text',
                                '-webkit-text-fill-color': 'transparent',
                                'background-clip': 'text',
                                'text-fill-color': 'transparent'
                            }}> 
                            French Baids
                            </span>
                        </div>
                    </GridElement>
                    <GridElement start={7} end = {13}btn image = {image_9}>
                        <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'flex-start',
                            "justify-content" : 'flex-end',
                            height : '100%'
                        }}>
                            
                            <span style = {{
                                display : 'block',
                                width: "298px",
                                'font-family': 'Inter',
                                'font-style': 'normalizeIntegration',
                                'font-weight': 800,
                                'font-size': '72px',
                                'line-height': '1',
                                'text-align': 'left',
                                
                                background: 'linear-gradient(130.3deg, #000000 9.21%, rgba(250, 0, 255, 0.47) 72.94%)',
                                '-webkit-background-clip': 'text',
                                '-webkit-text-fill-color': 'transparent',
                                'background-clip': 'text',
                                'text-fill-color': 'transparent'
                            }}> 
                            Straight Braiding Hair
                            </span>
                        </div>
                    </GridElement>
                </Grid>
                <TitleBar titre={"Nous vous Accompagnons "} />
                <Grid>
                    <GridElement start={1} end={5} btn>
                        <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'center',
                            "justify-content" : 'center',
                            height : '100%'
                        }}>
                            <span style={{"font-weight" : '700', "margin-bottom" : '12px', "font-size" : '24px'}}>Avec nos tutoriels</span>
                        <span style = {{
                            display : 'block',
                            'font-family': 'Inter',
                            'font-style': 'normalizeIntegration',
                            'font-weight': 800,
                            'font-size': '58px',
                            'line-height': '1',
                            'text-align': 'center',
                            
                            background: 'radial-gradient(128.4% 432.7% at -24.51% 152.14%, #CB01EC 0%, #FF0000 100%)' /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                            'background-clip': 'text',
                            'text-fill-color':'transparent',
                        }}> 
                            Faites le vous meme
                        </span>
                        </div>
                    </GridElement>
                    <GridElement start={5} end = {13} image={imageTuto}>
                        <div class = {styles.videoAffiche}>
                            <button>
                                <PlayIcon style = {{width : '4vmin'}} />
                            </button>
                        </div>
                    </GridElement>
                    <GridElement start={1} end = {13}btn image={carte} notBlack>
                    <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'flex-start',
                            "justify-content" : 'flex-end',
                            height : '100%'
                        }}>
                            
                            <span style = {{
                                display : 'block',
                                width: "248px",
                                'font-family': 'Inter',
                                'font-style': 'normalizeIntegration',
                                'font-weight': 800,
                                'font-size': '72px',
                                'line-height': '1',
                                'text-align': 'left',
                                
                                color : '#252B5B'
                            }}> Notre Proximite
                            </span>
                            <span style={{"font-size" : '32px', "font-weight" : '600', width : "350px"}}>Nos Experts et nos partenaires sont de plus en plus proche de vous </span>
                        </div>
                    </GridElement>
                    <GridElement start={1} end = {5}btn long>
                    <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'flex-start',
                            "justify-content" : 'center',
                            height : '100%'
                        }}>
                            <span style={{"font-weight" : '700', "margin-bottom" : '12px', "font-size" : '32px', width : '250px'}}>Prennez contact avec</span>
                        <span style = {{
                            display : 'block',
                            'font-family': 'Inter',
                            'font-style': 'normalizeIntegration',
                            'font-weight': 800,
                            'font-size': '48px',
                            'line-height': '1',
                            'text-align': 'left',
                            
                            background: 'radial-gradient(128.4% 432.7% at -24.51% 152.14%, #CB01EC 0%, #FF0000 100%)' /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                            '-webkit-background-clip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                            'background-clip': 'text',
                            'text-fill-color':'transparent',
                        }}> 
                            Nos Coiffeuses Partenaires
                        </span>
                        </div>
                    </GridElement>
                    <GridElement start={5} end = {9} long image={expert_1}/>
                    <GridElement start={9} end = {13} long image={expert_2}/>
                </Grid>
                <TitleBar titre={"Notre Boutique"} btn url={'/shop'} />
                <Gridtemplate_3>
                    <ProductItem  image = {meche_1} />
                    <ProductItem  image = {meche_1} />
                    <ProductItem  image = {meche_1} />
                </Gridtemplate_3>
                <Grid>
                    <GridElement start={1} end = {13} image={partenaire} style={{'background-color' : '#E52087'}} btn>
                    <div style={{
                            display : 'flex',
                            "flex-direction" : 'column',
                            "align-items" : 'flex-start',
                            "justify-content" : 'flex-end',
                            padding : '0 24px',
                            'max-width' : '70%',
                            height : '100%'
                        }}>
                        <span style = {{
                            display : 'block',
                            'font-family': 'Inter',
                            'font-style': 'normalizeIntegration',
                            'font-weight': 800,
                            'font-size': '72px',
                            'line-height': '1',
                            color : 'white'
                            
                        }}> 
                            Devenons <br /> Partenaire
                        </span>
                        </div>
                    </GridElement>
                </Grid>
                <TitleBar titre={'Suivez nous sur les réseaux'} />
                <Grid>
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>}
                    />
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"/></svg>}
                    />
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"/></svg>}
                    />
                    <SociauxItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 256 256"><path fill="currentColor" d="M234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48Zm-72.11 61.81l-48 32A4 4 0 0 1 108 160V96a4 4 0 0 1 6.22-3.33l48 32a4 4 0 0 1 0 6.66Z"/></svg>}
                    />
                    <Partenaire icon={<svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"/></svg>} >
                        Contactez nous pour devenir partenaire
                    </Partenaire>
                </Grid>
            </Container>
        </div>
    )
}


export const TitleBar = ({titre, url, btn}) => {
    return(
        <div class={styles.titleBar}>
            <div class='h1'>
                {titre}
            </div>
            <div>
                {
                    btn 
                    ? (<A href='/'>
                            <LabelIcon style = {{width : 'calc(10px + 3vmin)'}} />
                        </A>)
                    : null 
                }
            </div>
        </div>
    )
}

function SociauxBtn(){
    return(
        <div class={styles.socialbtn}>

        </div>
    )
}

// font-family: 'Inter';
// font-style: normal;
// font-weight: 800;
// font-size: 96px;
// line-height: 116px;

// color: #FFFFFF;