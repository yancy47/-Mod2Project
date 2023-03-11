function CharacterDetails({ character }) {

  return (
    <div>
     
      <h1>Name: {character.name}</h1>
      <h2>Species: {character.species}</h2>
      <img src={character.image} alt={'Image of Chararcter' }/>
      <h2>Origin: {character.origin}</h2>
    </div>
  );
}

export default CharacterDetails;

    
   
