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

return (
    <div>
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