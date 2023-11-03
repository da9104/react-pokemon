const Pokemon = ({ pokemon, types }) => {
 
     return (
        <div className="flex flex-col justify-center items-center">
          <div className="text-center underline">
            {pokemon.name}    
          </div>
            {pokemon.sprites ? (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            ) : (null)
           }

          {types.join(', ')}

          {/* {pokemon.types.} */}
           
          {!isNaN(pokemon) ? '' : (
                <>
                <h3>Height: {pokemon.height * 10} Cm</h3>
                <h3>Weight: {pokemon.weight / 10} Kg</h3>
                </>
            )}
  
        </div>
      );
   
  };

  export default Pokemon