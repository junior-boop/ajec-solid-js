import { Routes, Route } from '@solidjs/router'
import Home from './home/home';
import NavBar from '../composants/navigationBar/navBar';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </>
  );
}

export default App;
