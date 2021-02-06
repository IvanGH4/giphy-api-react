import React, { useState } from 'react';
import Card from './components/Card';
import logo from './assets/logo.png'

function App() {

  const [input, setInput] = useState('');
  const [gif, setGif] = useState([]);

  const api_key = '1IV737htLSe5y3Wyef04AaLJa8SF2Kw5';

  function handleChange(e) {
    setInput(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&q=${input}`);
      const data = await res.json();
      console.log(data.data);
      setGif(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <header>
          <h1>GIPHY Api</h1>
          <form className="search-box" onSubmit={handleSubmit}>
            <input className='search' type='text' placeholder='Search a GIPHY' value={input} onChange={handleChange} />
            <input className='btn' type="submit" value="Search"/>
          </form>
      </header>
      <div className="wrapper">
        {
          gif.length === 0 && <h2>Search for your favourite gifs!</h2>
        }
        {gif.map((item, idx) => {
          return  <Card info={item} key={idx} />
        })}
      </div>
      <footer>
        <img src={logo} alt="#"/>
        <a href='https://developers.giphy.com/' target='_blank'>GIPHY</a>
      </footer>
    </div>
  );
}

export default App;
