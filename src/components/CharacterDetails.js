function CharacterDetails({ characters }) {

  return (
    <div>
      {characters.map((character) => {
                return (
                    <div key={character.id}>
                      <h1>{character.name}</h1> 
                        <img src={character.image} alt={character.name} />
                        <h2>{character.orgin}</h2>
                        <h2>Species:{character.species}</h2>
                        <h2>Status:{character.status}</h2>
                        </div>       
                );
            })}
        </div>
  );
}

export default CharacterDetails;

    
   
