let allCharacters = document.querySelector("#AllCharacters");
let females = document.getElementById("Females");
let males = document.getElementById("Males");
let alive = document.querySelector("#Alive");
let dead = document.querySelector("#Dead");

allCharacters.addEventListener("click", selectAllCharacters);
females.addEventListener("click", selectFemales);
males.addEventListener("click", selectMales);
alive.addEventListener("click", selectAlive);
dead.addEventListener("click", selectDead);

function selectAllCharacters() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const results = fetch("https://rickandmortyapi.com/api/character");
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
};

function selectFemales() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&gender=female");
    results.then(response => response.json())
        .then(data => {             
            crearCards(data.results)
        })
};

function selectMales() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&gender=male");
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
};

function selectAlive() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&status=alive");
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
};

function selectDead() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const results = fetch("https://rickandmortyapi.com/api/character/?name=rick&status=dead");
    results.then(response => response.json())
        .then(data => {
            crearCards(data.results)
        })
}

function crearCards(characters) {
    let charactersContainer = document.querySelector(".characters-container");
    characters.forEach(character => {
    
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
};

function cleanCards(){
    let charactersContainer = document.getElementsByClassName("characters-container")[0]; 
    while (charactersContainer.firstChild) {        
        charactersContainer.removeChild(charactersContainer.firstChild);      
    }
};