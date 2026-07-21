import { useEffect, useState } from 'react'
import CharacterDetails from '@/componets/Character_Details'

const Masterlist = () => {
    const [chara, setCharacters] = useState(null)

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('http://localhost:5000/api/characters')
            const json = await response.json()

            if (response.ok) {
                setCharacters(json)
            }
        }

        fetchCharacters()
    }, [])

    return (
        <div className="masterlist">
            <h2>Masterlist</h2>
            <div className="characters">
                {chara && chara.map((character) => (
                    <CharacterDetails key={character._id} character={character}/> 
                ))}
            </div>
        </div>
    )}

export default Masterlist