const btn_changeMode=document.getElementById("change-mode");

//const configUser = window.matchMedia("(prefers-color-scheme: light)");

btn_changeMode.addEventListener("click", ()=>{
    console.log("diste click")

    //entramos a modo claro
    document.body.classList.toggle("light-theme");
   
    //Cambio de logos
    if (document.body.className === "light-theme"){
        btn_changeMode.innerHTML = "Dark mode"
        document.getElementById("logo2").src="./img/WWCode_Medellin_White.svg";
        document.getElementById("logo1").src="./img/WWCode_Medellin_White.svg";
        document.getElementById("logoLogo").src="./img/logoRojo.svg";
    }else{
        btn_changeMode.innerHTML = "Change mode"
        document.getElementById("logo2").src="./img/WWCode_Medellin.svg";
        document.getElementById("logo1").src="./img/WWCode_Medellin.svg";
        document.getElementById("logoLogo").src="./img/logo.svg";
    }

    
    
    
});