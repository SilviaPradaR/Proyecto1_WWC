let chisteParteI = document.getElementById("first-part-joke");
let chisteParteII = document.getElementById("second-part-joke");
let botonChiste = document.getElementById("one-more");


botonChiste.addEventListener("click", ()=>chistesAleatorios())

async function chistesAleatorios() {
    const endpoint = "https://api.dadjokes.io/api/random/joke";
    let response;
    try {
        response = await fetch(endpoint);
    } catch (error) {
        console.log('Ups!!')
    }
    const data = await response.json();
    console.log(data)
    const ListaChistes = data.body;
    const primerChiste = ListaChistes[0];
    const chiste = primerChiste.setup;
    const respuesta = primerChiste.punchline;
    document.getElementById("first-part-joke").textContent = chiste;
    document.getElementById("second-part-joke").textContent = respuesta;
    console.log(chiste, respuesta);
}

