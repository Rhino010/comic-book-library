

const Comics = ({marvelData}) => {
    

    return (
        <div>
            <h2>Comics:</h2>
            <ul>
                {marvelData.map((character) => (
                    <li key={character.id}>Name: {character.name}, Comics: {character.comics}</li>

                ))}
            </ul>
        </div>
    );
};

export default Comics;