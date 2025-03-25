import mockMarvelAPI from "./mockData";

const BrowseCharacters = (mockMarvelAPI) => {


    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {mockMarvelAPI.map((character) => (
                    <li key={character.id}>Name: {character.name}, Comics: {character.comics}</li>

                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;