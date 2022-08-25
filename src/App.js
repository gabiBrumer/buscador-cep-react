import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">BUSCADOR DE CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP" />
        <button className="buttonSearch">
          < FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP:</h2>

        <span>Rua:</span>
        <span>Complemento:</span>
        <span>Bairro:</span>
        <span>Localidade:</span>
      </main>
    </div>
  );
}

export default App;