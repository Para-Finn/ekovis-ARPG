import { useState } from 'react'

const NewCharaFrom = () => {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const player_chara = {name, species}

        const response = await fetch('http://localhost:5000/api/characters/', {
            method: 'POST',
            body: JSON.stringify(player_chara),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            SetError(json.error)
        } 
        if (response.ok) {
            setName('')
            setSpecies('')
            setError(null)
            console.log('New character added!', json)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Character Name: </label>
            <input
                type="text"
                onChange = {(e) => setName(e.target.value)} 
                value = {name}
            /> <br/>

            <label>Species: </label> <br/>
            <input
                type="radio"
                onChange = {(e) => setSpecies(e.target.value)} 
                name = {species}
                value = "Athadern"
            /><label>Athadern</label> <br/>
            <input
                type="radio"
                onChange = {(e) => setSpecies(e.target.value)} 
                name = {species}
                value = "Krylem"
            /><label>Krylem</label> <br/>
            <input
                type="radio"
                onChange = {(e) => setSpecies(e.target.value)} 
                name = {species}
                value = "Rapter"
            /><label>Rapter</label> <br/>
            <input
                type="radio"
                onChange = {(e) => setSpecies(e.target.value)} 
                name = {species}
                value = "Human"
            /><label>Human</label> <br/>

            <button>Create character!</button>
        </form>
    )
}

export default NewCharaFrom