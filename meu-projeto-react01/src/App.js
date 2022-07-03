
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/layout/NavBar';
import Home from './pages/Home.js'
import Empresa from './pages/Empresa.js'
import Contato from './pages/Contato.js'
import Footer from './components/layout/Footer';

//Atualização do swith par Routes: https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom?rq=1
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contato" element={<Contato />} />
        <Route exact path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
