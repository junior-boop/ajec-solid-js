import { Routes, Route } from '@solidjs/router'
import Home from './home/home';
import NavBar from '../composants/navigationBar/navBar';
import Footer from '../composants/footer/footer';
import ClubsPages from './clubpage/clubpages';
import Apropos from './Apropos/apropos';
import Activity from '../composants/activites/activites';
import ActivityPages from '../composants/activites/pageactivites';
import ProgrammmePage from './programme';
import ProgrammePPEF from './programme/ppef-icelc';
import Galerie from './galerie';



function App() {
  console.log('je suis la vie')
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" component ={Home} />
        <Route path="/activites" component ={Activity} />
        <Route path="/activites/:id" component ={ActivityPages} />
        <Route path="/devenir-membre" component ={Home} />
        <Route path="/a-propos" component ={Apropos} />
        <Route path = "/programme" component={ProgrammmePage} />
        <Route path="/programme/ppef-icelc" component ={ProgrammePPEF} />
        <Route path='/clubs/:id' component={ClubsPages} />
        <Route path='/galerie/:id' component={Galerie} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
