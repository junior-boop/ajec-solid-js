import { Routes, Route } from '@solidjs/router'
import Home from './home/home';
import NavBar from '../composants/navigationBar/navBar';
import Footer from '../composants/footer/footer';
import ClubsPages from './clubpage/clubpages';

function useData({params, location, data, navigate}){
  console.log(params, location, data, navigate)
}


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" component ={Home} />
        <Route path='/clubs/:id' component={ClubsPages} data={useData} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
