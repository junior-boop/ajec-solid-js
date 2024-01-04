import { Routes, Route } from '@solidjs/router'
import NavBar from '../composants/navigationBar/navBar';
import Footer from '../composants/footer/footer';
import { lazy, createResource } from 'solid-js';


const Home = lazy(() => import('./home/home'))
const Activity = lazy(() => import('../composants/activites/activites'))
const ActivityPages = lazy(() => import('../composants/activites/pageactivites'))
const Boutique = lazy(() => import('./boutique'))
const BoutiqueId = lazy(() => import('./boutique/boutiqueId'))


function UserData({params, location, navigate, data}) {

  return params.id;
}


function App() {
  

  return (
    <>
      <NavBar />
      <Vide />
      <Routes>
        <Route path="/" component ={Home} />
        <Route path="/produits" component ={Activity} />
        <Route path="/produits/:id" component ={ActivityPages} />
        <Route path="/tutoriel" component ={Home} />
        <Route path="/shop" component ={Boutique} />
        <Route path="/shop/:id" component ={BoutiqueId} data={UserData} />
        <Route path="/a-propos" component ={Home} />
        <Route path="/contactez-nous" component ={Home} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


const Vide = () => {
  return <div style = {{height : "8vmin"}}></div>
}