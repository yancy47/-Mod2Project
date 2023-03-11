
import './App.css';
// import Navbar from './Navbar';
// import {BrowerserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About';
import { useEffect, useState } from "react";
import Form from './components/Form';
import CharacterDetails from './components/CharacterDetails';
import FetchAPI from './components/FetchAPI';

function App() {
  let [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter("Rick");
  }, []);

  async function getCharacter(name) {
    console.log(name);

    // const key = process.env.REACT_APP_KEY;
    let url = `https://rickandmortyapi.com/api/character/`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.log("something is wrong");
    }
  }

//     fetch(url) 
//     .then ((response) => response.json())
//     .then ((data) => setCharacter(data.results)) 
//     console.log(url)
// }


if (character) {
  return (
    <div className="App">
      <CharacterDetails character={character} />
      <Form getCharacter={getCharacter} />
      {/* <h1> Name: {character.name}</h1>
          <img src={character.image} alt={character.Title} /> */}
      </div>
    );
  } else {
    // if charater is null
    return (
      <div>
        {/* <h1>Character Search</h1> */}
    <Form getCharacter={getCharacter} />
    <About />
    <FetchAPI />
    </div>
  );
}
}

export default App;
