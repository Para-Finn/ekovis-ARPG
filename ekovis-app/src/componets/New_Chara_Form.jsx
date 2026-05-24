function CharaForm() { 
    return(
        <form>
            <div>
                <label for="chara_name">Character's name: </label>
                <input type="text" id="chara_name" name="chara_name"/>
            </div>

            <div>
                {/* Select species */}
                <input type="radio" id="Rapter" name="chara_species" /> 
                <label for="Rapter">Rapter</label><br/>

                <input type="radio" id="Krylem" name="chara_species" /> 
                <label for="Krylem">Krylem</label><br/>
            </div>

            {/* TO DO: Have traits be hidden. Then, based on species selected, show relevant traits */}
            <div id="rapter_traits">
                <div id="rapter_common">
                    <input type="checkbox" id="feathers" name="feathers"/>
                    <label for="feathers">Feathers</label>

                    <input type="checkbox" id="nose_spike" name="nose_spike"/>
                    <label for="nose_spike">Nose Spike</label>
                </div>

                <div id="rapter_uncommon">
                    <input type="checkbox" id="wings" name="wings"/>
                    <label for="wings">Wings</label>

                    <input type="checkbox" id="horns" name="horns"/>
                    <label for="horns">Horns</label>
                </div>
            </div>

            <div id="krylem_traits">
                <div id="krylem_common">
                    <input type="checkbox" id="shell" name="shell"/>
                    <label for="shell">Shell</label>
                </div>

                <div id="krylem_uncommon"> 
                    <input type="checkbox" id="odd_bones" name="odd_bones"/>
                    <label for="odd_bones">Odd bones</label>

                    <input type="checkbox" id="no_bones" name="no_bones"/>
                    <label for="no_bones">No bones</label>

                    <input type="checkbox" id="floating_jaw" name="floating_jaw"/>
                    <label for="floating_jaw">Floating jaw</label>
                </div>

                <div id="krylem_rare">
                    <input type="checkbox" id="no_jaw" name="no_jaw"/>
                    <label for="no_jaw">No jaw</label>
                </div>

            </div>

            <div>
                {/* Input reference image */}
                <label for="Reference">Character Reference: </label> <br/>
                <input type="file" id="Reference" name="chara_ref" accept="image/png, image/jpeg" />
            </div>

        </form>
    );
}

export default CharaForm;