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

const getData=(apiURL)=>{
    return fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                crearCards(data.results),
                printPagination(data.info)
            })
}

function selectAllCharacters() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const api="https://rickandmortyapi.com/api/character";
    getData(api);
}

function selectFemales() {
    if(document.body.children[3].className=="container"){
        let clasePadre=document.querySelector(".container");
        let claseHijo=document.querySelector(".message");
        clasePadre.removeChild(claseHijo);
        let replaceClass=document.querySelector(".container");
        replaceClass.classList.replace("container","characters");
    }
    cleanCards();
    const api = "https://rickandmortyapi.com/api/character/?gender=female";
    getData(api);
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
    const api = "https://rickandmortyapi.com/api/character/?gender=male";
    getData(api);
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
    const api = "https://rickandmortyapi.com/api/character/?status=alive";
    getData(api);
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
    const api = "https://rickandmortyapi.com/api/character/?status=dead";
    getData(api);
}

function crearCards(characters) {
    cleanCards();
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

function printPagination(info){
    let html =`
    <li class="page-item">
      <a class="button-pag" onclick="getData('${info.prev}')">Previous</a>
    </li>
    <li class="page-item">
      <a class="button-pag" onclick="getData('${info.next}')">Next</a>
    </li>
 `
    document.querySelector(".pagination").innerHTML=html;
}

function cleanCards(){
    let charactersContainer = document.getElementsByClassName("characters-container")[0]; 
    while (charactersContainer.firstChild) {        
        charactersContainer.removeChild(charactersContainer.firstChild);      
    }
};
    