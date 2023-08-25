function abrir(refer){
    let aux = document.querySelector('.ventana');
    let aux2 = document.querySelector('.imgzoom');
    aux.style.display = "block"
    aux2.src = refer;
}
function cerrar(){
    let aux = document.querySelector('.ventana');
    aux.style.display = "none"
}
function atras(){
    let var_atras = document.querySelector('.galeria');
    let aux2 = document.querySelector('.imgzoom');
    let hijos = var_atras.childElementCount;
    let actual = var_atras.children[0].currentSrc;
    let temporal;
    let nuevo;
    let i = 0;
    let j = 0;
    let bandera = false;
    
    do{
        temporal = var_atras.children[i].currentSrc;
        actual = aux2.currentSrc;
        if (actual == temporal){
            j = i;
            bandera = true;
        }
        i++;
    }while ((i < hijos) && (bandera == false))

    j--;

    if (j < 0){
        j = 8;
    }

    nuevo = var_atras.children[j].currentSrc;
    aux2.src = nuevo;
}

function adelante(){
    let var_adelante = document.querySelector('.galeria');
    let aux2 = document.querySelector('.imgzoom');
    let hijos = var_adelante.childElementCount;
    let actual = var_adelante.children[0].currentSrc;
    let temporal;
    let nuevo;
    let i = 0;
    let j = 0;
    let bandera = false;
    
    do{
        temporal = var_adelante.children[i].currentSrc;
        actual = aux2.currentSrc;
        if (actual == temporal){
            j = i;
            bandera = true;
        }
        i++;
    }while ((i < hijos) && (bandera == false))

    j++;

    if (j > 8){
        j = 0;
    }

    nuevo = var_adelante.children[j].currentSrc;
    aux2.src = nuevo;
}