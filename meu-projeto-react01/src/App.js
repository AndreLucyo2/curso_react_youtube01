import './App.css';
import ListaOutra from './components/ListaOutra';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderezação de listas</h1>
      <h3>Lista de coisas boas:</h3>
      <ListaOutra itens={meusItens} />
      <h3>Outra Lista de coisas boas:</h3>
      <ListaOutra itens={[]} />
    </div>
  )
}

export default App;
