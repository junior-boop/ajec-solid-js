import Container from "../../composants/container/container";
import { Carrosel } from "../../composants/programme/programme";
import ProgrammeItems from "../../composants/programmeItems/programmeItem";
import Vide from "../../composants/vide";


import entreprenariat from '../../src/assets/entreprenariat-femme.jpg'
import image2 from '../../src/assets/girl4.jpg'
import scientifique from '../../src/assets/scientist.jpg'
import PVU from '../../src/assets/utile.jpg'
import Homme from '../../src/assets/homme.jpg'
import student from '../../src/assets/student.jpg'

export default function ProgrammmePage() {
    return(
        <div>
            <Vide />
            <div id="programme" style={{"background-color" : 'white', }}>
                
                <Container>
                    <div>
                        <div class="h1 programme">
                            Tous les programmes
                        </div>
                    </div>
                    <Carrosel>
                        <ProgrammeItems url="/programme/ppef-icelc" image={entreprenariat} abr={"PPEF-ICELC"} name={"Programme de Promotion de l’Entrepreneuriat Féminin..."}/>
                        <ProgrammeItems image={image2} abr={"PRCE"} name={"Programme de Renforcement des Capacités des Enseignants..."}/>
                        <ProgrammeItems image={scientifique} abr={"PEOS"} name={"Programmes de d’Elaboration des Ouvrages Scientifiques..."}/>
                        <ProgrammeItems image={PVU} abr={"PVU"} name={"Programme Vancaces Utiles (PVU)"}/>
                        <ProgrammeItems image={Homme} abr={"PCDRS"} name={"Programme de Conception des Documentaires/ Revues Scientifi..."}/>
                        <ProgrammeItems image={student} name={"Programmes d’Enseignement Supérieur Polyvalent Conception..."} abr={'PESPC'}/>
                    </Carrosel>
                </Container>
            </div>
        </div>
    )
}

