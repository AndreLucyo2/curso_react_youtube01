import './App.css';
import Evento from './components/Evento';

function App() {
  return (
    <div>
      <h1>Testando eventos</h1>
      <Evento/>
      <Evento numero={1}/>
      <Evento numero={2}/>
    </div>
  )
}

export default App;
