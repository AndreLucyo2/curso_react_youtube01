import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div>
      <h1>Testando eventos</h1>
      <Evento/>
      <Evento numero={1}/>
      <Evento numero={2}/>
      
      <p>----------------------------------------</p>
      <Form/>

    </div>
  )
}

export default App;
