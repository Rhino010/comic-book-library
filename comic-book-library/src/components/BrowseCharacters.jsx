import { useNavigate } from "react-router-dom";


const BrowseCharacters = ({marvelData}) => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {marvelData.map((character) => (
                    <li key={character.id} onClick={() => navigate(`/character-details/${character.id}`)}>{character.name}</li>

                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;