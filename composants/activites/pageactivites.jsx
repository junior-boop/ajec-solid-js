import Container from "../container/container";
import styles from './activites.module.css'
import Vide from "../vide";
import { useLocation } from "@solidjs/router";

import SolidMarkdown from 'solid-markdown'
import { ImagesLastProgramme } from "./activites";
import { createEffect, createSignal } from "solid-js";

const text = `
# **'' CONCEPTION, INNOVATION, ENTREPRENEURIAT ''**

Si la plupart des Objectifs du Millénaire pour le développement ont été fixés à l’horizon 2050, la jeunesse africaine doit jouer un rôle important pour y parvenir. La volonté des chefs d’Etats et de Gouvernements africains de dédier une journée à leur jeunesse a pour objet de mettre en évidence les potentialités de la jeunesse africaine ; de célébrer sa contribution au développement ; de renforcer la solidarité et l’implication des jeunes dans les actions de promotion de la stabilité de la paix et du développement durable.

A cet effet, l'engagement et l'implication effectifs des jeunes pour le développement commencent par une préparation, une éducation, des compétences et une formation adéquates pour passer à l’action.

Au Cameroun, les actions sont entreprises par le Gouvernement à l’effet de promouvoir non seulement l’implication des jeunes au développement socioéconomique de la Nation dans le respect de leurs devoirs civiques, mais également leur participation active à la prise de décision, conformément aux prescriptions de la Charte Africaine de la Jeunesse.

Au plan politique, une volonté de consolider le processus démocratique et l’Etat de droit est mise en branle. Les jeunes sont fortement impliqués au processus de prise de décisions.

Au plan macro-économique, tout en assainissant les mœurs, fondement d’une prospérité durable, les bases d’une croissance forte sont jetées. Plusieurs emplois se sont créés avec le début des travaux des grands projets structurants.

Au plan social, le Chef de l’Etat appelle à une solidarité nationale et à une mobilisation tout azimut pour vaincre la secte islamique Boko Haram qui menace la paix et la stabilité de notre pays.

En ce qui concerne la Jeunesse, le démarrage effectif des activités de l’Agence du Service Civique National de Participation au Développement a permis de former les Appelés pendant les vacances scolaires. En outre, avec le renouvellement des organes dirigeants du Conseil National de la Jeunesse du Cameroun, une bonne frange de la population jeune sera encadrée et accompagnée pour une meilleure implication au processus de développement et à l’avènement de la République Exemplaire catalyseur d’un développement durable.

Au Cameroun, l’enseignement général a souvent été décrit comme étant professionnellement inadapté aux exigences du marché de l’emploi. Le gouvernement a introduit un ensemble de mesures pour corriger ce déséquilibre. Depuis la libéralisation économique, les politiques d’enseignement visent à favoriser la synergie entre éducation et formation professionnelle. Pour rendre l’économie plus compétitive, il faudrait que le système éducatif produise suffisamment des diplômés. Son objectif premier doit néanmoins demeurer la réduction des inégalités caractérisant l’enseignement et le marché du travail. Selon une étude réalisée par le ministère de l’enseignement supérieur effectuée en 2000, nous constatons que l’enseignement général comparativement à l’enseignement technique et professionnel semble offrir très peu de formations adéquates aux exigences et besoins professionnels. Globalement la formation générale est très peu valorisée par les entreprises. En effet seul 11% des formations offertes par l’enseignement général sont jugées adaptées par les responsables des entreprises. Même le baccalauréat technique est plus valorisé. C’est la formation technique et professionnelle qui, avec 90% d’approbation, fait le consensus parmi les entreprises. Les compétences prioritaires exigées par les entreprises sont : l’informatique, le management, l’économie, la comptabilité, les finances et l’audiovisuel. Le  présent programme de spécialisation permet de résoudre ces problèmes par le développement d’un nouveau mode de formation permettant d’associer l’enseignement général et l’enseignement professionnel et surtout la maîtrise des transferts des compétences d’un domaine à un autre d’où le concept Emploi-Formation-Entrepreneuriat appliqué à ces **Programmes** qui sont **sous régionale** et voir mem dans l’optique de **couvrir tout le continent Africain**.

**Nous avons ainsi en termes de PROGRAMMES développés par l’AJEC**

1. Programme de Promotion de l’Entrepreneuriat Féminin et Implémentation des Clubs d’Entrepreneuriat dans Lycées et Collèges : **(PPEF-ICELC)**

2. Programme de Renforcement des Capacités des Enseignants **(PRECACSIV)**

3. Le Programme Vancaces Utiles **(VU)**

4. Programmes de d’Elaboration des Ouvrages Scientifiques notamment dans le domaine Emploi-Formation-Entrepreneuriat **(PEOSL/EFE)**

5. Programme de Conception des Documentaires/ Revues Scientifiques et Littéraires **(PROCODOSL)**

6.  Programmes d’Enseignement Supérieur Polyvalent Conception de Nouvelles Filières **(PESP/CNF)**

Ces Programmes doivent être présentés sommairement ainsi qu’il suit :

**I- Programme de Promotion de l’Entrepreneuriat Féminin et Implémentation des Clubs d’Entrepreneuriat dans Lycées et Collèges (PPEF-ICELC)**

Suite à la correspondance **N0 22/00063/L/MINPMEESA/SG/DPME/SDAPM/CSDCE** du 19 janvier 2022 de S.E Monsieur le Ministre des Petites et Moyennes Entreprises, de l’Economie Sociale et de l’Artisanat marquant son accord pour l’accompagnement technique de la mise en œuvre des Clubs d’Entrepreneuriat dans les lycées et collèges, vu la promotion de l’entrepreneuriat jeune que prône son **EXCELLENCE MONSIEUR PAUL BIYA**, nous, Association des Jeunes Entrepreneurs du Cameroun (AJEC) en partenariat avec le réseau parlementaire des Députés jeunes du Cameroun avons mis sur pied **le Programme Promotion de l’Entrepreneuriat Féminin en Milieu Scolaire et l’implémentation des Clubs d’Entrepreneuriat afin de répondre à cette préoccupation**. Ce programme vise essentiellement à optimiser et à capitaliser les compétences entrepreneuriales des élèves en générales et celles de la jeune fille en particulier à travers des animations par des experts dans les Clubs d’Entrepreneuriats. Ce programme concerne beaucoup plus les animations sur l’Entrepreneuriat et Leadership(AL), les Métiers dans le secteur des **Energies Renouvelables(ER)**, **l’Agriculture et Agroforesterie(A/AF)**, **l’Agro-industrie et Industrie Chimique (AI/IC)**,** l’Education Environnementale et Changements climatiques(E/CL)**, **Numérique(N)**, **Journalisme Poésie et Roman(JPR) Utilisation Responsable des réseaux sociaux, sensibilisation sur la délinquance en milieu scolaire et à la Sensibilisation sur le Vivre Ensemble** que nous pensons pérenniser dans tout le Cameroun ceci en étroite ligne avec les objectifs de la SDN30.`

// titre={titre} image = {imagePrincipale}
export default function ActivityPages(){
    // const [Titre, seTitre] = createSignal('')
    // const [img, setImg] = createSignal('')
    
    // const location = useLocation()
    // console.log(location);
    
    
    return(
        <div>
            <title>  | AJEC</title>
            <Vide />
            <Header />
            <Container>
                <div class = {styles.activity}>
                    <Conteneur style={{"margin-bottom": "5rem"}}>
                        <div class="p">
                            publie le 11 - 12 - 2023
                        </div>
                        <SolidMarkdown children={text} />
                    </Conteneur>
                    <div>
                        <ImagesLastProgramme id={''} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

function Header({titre, image}){
    return(
        <section style={{"background-color" : "#F7F1FE", padding : '3rem 0', "margin-bottom" : '8rem'}}>
            <Container>
                <Conteneur>
                    <div class="h2">
                        {titre}
                    </div>
                    <div class={styles.images}>
                        <div>
                            <img src={image} width = '100%' alt="" />
                        </div>
                    </div>
                </Conteneur>
            </Container>
        </section>
    )
}

export function Conteneur({children, style}){
    return(
        <div class={styles.conteneur} style = {style}>
            {children}
        </div>
    )
}