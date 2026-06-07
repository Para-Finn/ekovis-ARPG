function CharaForm() { 
    
    function RevealRapterTraits() {
        const rapter_traits = document.getElementById("rapterTaits");
        rapter_traits.style.visibility = "visible";
    }
    
    return(
        <body>
            <div>
                {/* Select species */}
                <button onClick={RevealRapterTraits}>Rapter</button>
            </div>

            <div>
                {/* Species traits */}
                <div id="rapterTaits">
                    <p>These are rapter traits</p>
                </div>
                
            </div>
            

            <div>
                {/* Input reference image */}
                
            </div>
        </body>
    );
}

export default CharaForm;