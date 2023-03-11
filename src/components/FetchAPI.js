import React from "react";
import { json } from "react-router-dom";

function FetchAPI() {

    const apiGet  = () => {
        fetch(`https://rickandmortyapi.com/api/character/`) // fetch contains URL that we are calling then come back as promise then convert to JSON data and ten log to data call it in button below   
    .then((response) => response.json())
    .then((data) => console.log(json));
        
}
    return (
    
        <div>
            my API <br />
            <button onClick={apiGet}> Fetch API </button>
        </div>
    )

}
export default FetchAPI 

