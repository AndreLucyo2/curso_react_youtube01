import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {

  const nome = 'André lucio';
  const newName = nome.toUpperCase();
  const urlImg = 'https://via.placeholder.com/200'

  function sum(a,b){
    return a+b;
  }

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {nome}</p>
      <p>Olá, {newName} !</p>
      <p>Olá, {sum(10,20)}</p>
      <img src={urlImg} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
