//menu
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
for(i=0;i<=16;i++){
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
}
}

let HTML = document.getElementById("HTML");
crearBarra(HTML/CSS);

let OFFICE = document.getElementById("OFFICE");
crearBarra(OFFICE);

let MOVAVI = document.getElementById("MOVAVI");
crearBarra(MOVAVI);

let PHOTOSHOP = document.getElementById("PHOTOSHOP");
crearBarra(PHOTOSHOP);

let JAVASCRIPT = document.getElementById("JAVASCRIPT");
crearBarra(JAVASCRIPT);


let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("skills");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(HTML, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(JAVASCRIPT, 11, 1, intervalJavascript);
        },100);
        const intervalOffice = setInterval(function(){
            pintarBarra(OFFICE, 11, 2, intervalOffice);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(PHOTOSHOP, 15, 3, intervalPhotoshop);
        },100);
        const intervalMovavi = setInterval(function(){
            pintarBarra(MOVAVI, 16, 4, intervalMovavi);
        },100);
        
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}