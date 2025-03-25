import { useParams } from 'react-router-dom';

const CharacterDetails = ({marvelData}) => {
    const { id } = useParams();
    const character = marvelData.find(char => char.id === parseInt(id) )

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.details}</p>
        </div>
    );
};

export default CharacterDetails;