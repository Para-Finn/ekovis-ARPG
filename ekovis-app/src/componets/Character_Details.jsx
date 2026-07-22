const CharacterDetails = ({character}) => {
    return (
        <div>
            <h3>{character.name}</h3>
            <h5>Level {character.level} {character.species}</h5>
        </div>
    )
}

export default CharacterDetails