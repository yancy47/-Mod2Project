import { useState } from "react"

function Form({ getCharacter }) {

let [input, setInput] = useState('')

function handleChange(e) { 
    setInput(e.target.value) 
}

function handleSubmit(e) {
    e.preventDefault() 
    // console.log('testing 123')
    // console.log(input)
    getCharacter(input);
}

// let characterName = character.map((obj)=> {
//     <p>{obj.common_name}</p> 
// })

return (
    <div>
      <h1>Character Search</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} style= {{ 
                hovercolor: 'green',
                backgroundColor: "lightgreen",
                borderRadius: '8px'}} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Form;