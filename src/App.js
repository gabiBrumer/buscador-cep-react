import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('')

  async function handleSearch(){
    if(input === ''){
      alert ("Prencher o campo de CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data)
    } catch {
      alert("Ops! Erro ao buscar CEP")
      setInput('')
    }
  }
  return (
    <div className="container">
      <h1 className="title">BUSCADOR DE CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="" value={input} onChange={(e) => setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={handleSearch}>
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