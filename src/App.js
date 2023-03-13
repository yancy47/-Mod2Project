
import './App.css';
// import Navbar from './Navbar';
// import {BrowerserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About';
import { useEffect, useState } from "react";
import Form from './components/Form';
import CharacterDetails from './components/CharacterDetails';
import FetchAPI from './components/FetchAPI';

function App() {
  let [characters, setCharacters] = useState(null);
  let [input] = useState(null)
  let [test] = useState(null)
  
  useEffect(() => {
    // getCharacter("Rick");
  }, []);

  async function getCharacter(characterName) {
    // console.log("reached getCharacter")
    console.log(characterName)

    let url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

  
    try {
      let response = await fetch(url);
      let data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log("something is wrong");
    }
  }

  // fetch(url)
  //   .then((response) => response.json())
  //   // .then((data) => console.log(data));
  //    .then((data) => setCharacters(data.results));

// console.log(url)
// console.log(characters)
// }


if (characters) {
  return (
    <div className="App">
      <h1>Search for a Character</h1>
      <Form getCharacter={getCharacter} />
      <CharacterDetails characters={characters} />
      </div>
    );
  } else {
    // if charater is null
    return (
      <div>
        <h1>Character Search</h1>
    {/* <FetchAPI /> */}
    <Form getCharacter={getCharacter} />
    <About />
    
    </div>
  );
}
}

export default App;
