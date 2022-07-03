import './App.css';
import Condicional from './components/Condicional';
import ListaOutra from './components/ListaOutra';

function App() {

const meusItens =['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderezação de listas</h1>
      <ListaOutra itens={meusItens}/>
    </div>
  )
}

export default App;
