import Container from "../../composants/container/container"
import Vide from "../../composants/vide"

export default function Galerie(){
    
    return(
        <div>
            <Vide />
            <Header />
            <Container>
                <div>
                    je suis sur la page des Galerie
                </div>
            </Container>
            
        </div>
    )
}

function Header(){
    return(
        <section id="header" style={{overflow : 'visible', padding : '3rem 0'}}>
            <Container>
                <div className="h2" style={{color : '#7b24ea', "text-transform" : 'uppercase'}}>Les activités</div>
            </Container>
        </section>
    )
}