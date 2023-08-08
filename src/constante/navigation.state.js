import image1 from '../../src/assets/laboratoire_white.png'
import image2 from '../../src/assets/croissance_white.png'
import image3 from '../../src/assets/changement-climatique_white.png'
import image4 from '../../src/assets/maison-ecologique_white.png'
import image5 from '../../src/assets/plumes_white.png'
import image6 from '../../src/assets/sensible_white.png'

import club_aa from '../../src/pages/clubs/club-a-a/club-a-a.pdf'
import club_aiic from '../../src/pages/clubs/club-ai-ic/club-ai-ic.pdf'
import club_ecl from '../../src/pages/clubs/club-e-cl/club-e-cl.pdf'
import club_er from '../../src/pages/clubs/club-er/club-er.pdf'
import club_jpr from '../../src/pages/clubs/club-jpr/club-jpr.pdf'

import { createEffect, createSignal } from 'solid-js'

export default function Navigation() {

    

    const [navState, setNavState] = createSignal('')

    const state = {
        'ai-ic': { image: image1, titre: "Club d'Entrepreneuriat Agro-industrie et Industrie Chimique (AI/IC)", content: 'ai-ic', pdf : club_aiic },
        'a-a': { image: image2, titre: "Club d'Entrepreneuriat Agriculture et Agroforesterie (A/A)", content: 'a-a', pdf : club_aa},
        'e-cl': { image: image3, titre: "Environnement et Changements Climatiques (E/CL)", content: 'e-cl', pdf : club_ecl },
        'er': { image: image4, titre: "Club d'Entrepreneuriat Energies Renouvelables (ER)", content: 'er', pdf : club_er},
        'jpr': { image: image5, titre: "Club d'Entrepreneuriat Journal-Poésie-Roman (JPR)", content: 'jpr', pdf : club_jpr },
        'num': { image: image6, titre: "Club d'Entrepreneuriat Numérique (N)", content: 'num' }
    }
    const url = window.location.pathname
    const content = url.split('/')


    createEffect(() => {
        const urls = window.location.pathname
    })
    
    const stateRelize = state[`${content[2]}`]

    return stateRelize
}