function CharaForm() { 
    return(
        <form action="/Character_Submission.jsx">
            <div>
                {/* Select species */}
                <input type="radio" id="Athadern" name="chara_species" value="ath" /> 
                <label for="Athadern">Athadern</label><br/>

                <input type="radio" id="Krylem" name="chara_species" value="kry" /> 
                <label for="Krylem">Krylem</label><br/>

                <input type="radio" id="Human" name="chara_species" value="hum" /> 
                <label for="Human">Human</label><br/>
            </div>

            <div>
                {/* Input reference image */}
                <label for="Reference">Character Reference: </label>
                <input type="file" id="Reference" name="chara_ref" accept="image/png, image/jpeg" />
            </div>

            <input type="submit" value="Submit" />
        </form>
    );
}

export default CharaForm;