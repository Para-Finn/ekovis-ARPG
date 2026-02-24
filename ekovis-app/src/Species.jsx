
function Species(){

    const hum = "Humans";
    const ath = "Athadern";
    const kry = "Krylem";

    return(
        <ul>
            <li>Raptor</li>
            <li>{ath}</li>
            <li>{kry.toUpperCase()}</li>
        </ul>
    );
}

export default Species