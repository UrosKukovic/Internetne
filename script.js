const tekst = document.querySelector(".temp_tekst");
const slika_klime = document.querySelector(".slika_klima");
let stanje = true;
let temna_tema = document.querySelector(".temna-tema");
const gumb = document.querySelector(".Gumb_vklop_izklop");


console.log("Testing if script.js gets called...");
console.log("script.js gets called.");

AC_off();



slika_klime.src = "air-conditioner_OFF.png";

gumb.addEventListener('click', function (e) {
    if(!stanje){
        AC_on();
    }
    else{
        AC_off();
    }
    
});



function AC_on(){
    stanje = true;
    slika_klime.src = "air-conditioner_ON.png";
    gumb.innerHTML = "IZKLOP";
    
}

function AC_off(){
    stanje = false;
    slika_klime.src = "air-conditioner_OFF.png";
    gumb.innerHTML = "VKLOP";
    
}

