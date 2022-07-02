import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';


function App() {

  const nomeVar = 'Pedro';

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome='Andre' />
      <SayMyName nome='Maria' />
      <SayMyName nome={nomeVar} />

      <Pessoa
        nome='Andre'
        idade='28'
        profissao="dev"
        foto="https://via.placeholder.com/200"
      />

      <List />

    </div>
  );
}

export default App;
