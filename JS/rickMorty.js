let allCharacters = document.querySelector("#AllCharacters");
let females = document.querySelector("#Females");
let males = document.querySelector("#Males");
let alive = document.querySelector("#Alive");
let dead = document.querySelector("#Dead");

allCharacters.addEventListener("click", selectAllCharacters());
females.addEventListener("click", selectFemales());
males.addEventListener("click", selectMales());
alive.addEventListener("click", selectAlive());
dead.addEventListener("click", selectDead());

//document.querySelector(".container")
//replaceClass=document.querySelector(".container")
//esta.classList.replace("characters","container")
//replaceClass.classList.replace("container","characters")


function selectAllCharacters() {
    //alert("Seleccionaste categoria All");
    const results = fetch("https://rickandmortyapi.com/api/character")
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
};

function selectFemales() {
    //alert("Seleccionaste categoria females");
    console.log("1")
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&gender=female")
    console.log("2")
    results.then(response => response.json())
        .then(data => {
            console.log("3")
            
            console.log(data.results)
            crearCards(data.results)
        })
}

function selectMales() {
    //alert("Seleccionaste categoria males");
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&gender=male")
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
}

function selectAlive() {
    //alert("Seleccionaste categoria alive");
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&status=alive")
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
}

function selectDead() {
    //alert("Seleccionaste categoria dead");
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&status=dead")
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
}

function crearCards(characters) {
    let charactersContainer = document.querySelector(".characters-container")
    characters.forEach(character => {
        console.log("4 "+character.name)
        charactersContainer.innerHTML += `
    <div class="character-card">
        <span>${character.name}</span>
        <div class="character-info">
            <figure>
                <img src="${character.image}" alt="">     
            </figure>
             
            <div>
                <p>${character.gender}</p>
                <p>${character.status}</p>
                <p>${character.species}</p>
            </div>
        </div>
    </div>    
    `
    });
}
