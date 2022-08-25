let allCharacters = document.querySelector("#AllCharacters");
let females = document.querySelector("#Females");
let males = document.querySelector("#Males");
let alive = document.querySelector("#Alive");
let dead = document.querySelector("#Dead");

allCharacters.addEventListener("click", selectAllCharacthers);
females.addEventListener("click", selectFemales);
males.addEventListener("click", selectMales);
alive.addEventListener("click", selectAlive);
dead.addEventListener("click", selectDead);

function selectAllCharacthers(){
    alert("Seleccionaste categoria All");
    console.log("Aqui están los personajes")
}
// function selectAllCharacthers(done){
//     const results = fetch("https://rickandmortyapi.com/api/character");
//     results.then(response => response.json()).then(data=>{
//         done(data)
//     });
// }
// selectAllCharacthers(data => {

//     data.results.forEach(personaje => {

//     const article = document.createRange().createContextualFragment(/*html */ `
//     <article class="article">
//         <h1 class="nombrePersonaje">${personaje.name}</h1>

//         <div class="img-container">
//             <img src="${personaje.image}" alt="Personaje">
//         </div>

//         <div>
//         <p class="gender">${personaje.gender}</p>
//         <p class="status">${personaje.status}</p>
//         </div>
//     </article>
    
//     `);
//     const section = document.querySelector("section");

//     // document.querySelector("section").textContent =article;

//     section.append(article)
//     });
// } )


function selectFemales(){
    alert("Seleccionaste categoria females");
}

function selectMales(){
    alert("Seleccionaste categoria males");
}

function selectAlive(){
    alert("Seleccionaste categoria alives");
}

function selectDead(){
    alert("Seleccionaste categoria dead");
}

fetch("https://rickandmortyapi.com/api/character")
.then(response=>response.json())
.then(data=>{
    crearCards(data.results)
})

function crearCards(characters){
    let charactersContainer = document.querySelector(".characters-container")
    characters.forEach(character => {
        charactersContainer.innerHTML +=`
    <div class="character-card">
        <span>${character.name}</span>
        <div class="character-info">
            <figure>
                <img src="${character.image}" alt="">     
            </figure>
             
            <div>
                <p>${character.gender}</p>
                <p>${character.status}</p>
                <p>Name of the Character</p>
            </div>
        </div>
    </div>    
    `
    
    
        
    });
}
  