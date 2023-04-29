import { Routes, Route } from '@solidjs/router'
import Home from './home/home';
import NavBar from '../composants/navigationBar/navBar';
import Footer from '../composants/footer/footer';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
