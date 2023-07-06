//variables globales
let imagenes = [
    {
        "nombre": "aguila",
        "url": "imagenes/aguila.jpg"
    },
    {
        "nombre": "ardilla",
        "url": "imagenes/ardilla.jpg"
    },
    {
        "nombre": "buho",
        "url": "imagenes/buho.jpg"
    },
    {
        "nombre": "tigre",
        "url": "imagenes/tigre.jpg"
    },
    {
        "nombre": "zorro",
        "url": "imagenes/zorro.jpg"
    },
    {
        "nombre": "gato",
        "url": "imagenes/gato.jpg"
    },

    ///
    {
        "nombre": "aguila",
        "url": "imagenes/aguila.jpg"
    },
    {
        "nombre": "ardilla",
        "url": "imagenes/ardilla.jpg"
    },
    {
        "nombre": "buho",
        "url": "imagenes/buho.jpg"
    },
    {
        "nombre": "tigre",
        "url": "imagenes/tigre.jpg"
    },
    {
        "nombre": "zorro",
        "url": "imagenes/zorro.jpg"
    },
    {
        "nombre": "gato",
        "url": "imagenes/gato.jpg"
    },


    //imagenes nivel 2

    {
        "nombre": "aguila",//1
        "url": "imagenes/aguila.jpg"
    },
    {
        "nombre": "ardilla",
        "url": "imagenes/ardilla.jpg"//2
    },
    {
        "nombre": "buho",
        "url": "imagenes/buho.jpg"//3
    },
    {
        "nombre": "tigre",
        "url": "imagenes/tigre.jpg"//4
    },
    {
        "nombre": "zorro",
        "url": "imagenes/zorro.jpg"//5
    },
    {
        "nombre": "gato",
        "url": "imagenes/gato.jpg"//6
    },

    {
        "nombre": "caballo",
        "url": "imagenes/caballo.jpg"//7
    },
    {
        "nombre": "tortuga",
        "url": "imagenes/tortuga.jpg"//8
    },
    //
    {
        "nombre": "aguila",
        "url": "imagenes/aguila.jpg"//1
    },
    {
        "nombre": "ardilla",
        "url": "imagenes/ardilla.jpg"//2
    },
    {
        "nombre": "buho",
        "url": "imagenes/buho.jpg"//3
    },
    {
        "nombre": "tigre",
        "url": "imagenes/tigre.jpg"//4
    },
    {
        "nombre": "zorro",
        "url": "imagenes/zorro.jpg"//5
    },
    {
        "nombre": "gato",
        "url": "imagenes/gato.jpg"//6
    },
    {
        "nombre": "caballo",
        "url": "imagenes/caballo.jpg"//7
    },
    {
        "nombre": "tortuga",
        "url": "imagenes/tortuga.jpg"//8
    },

    //tecer nivel
    {
        "nombre": "aguila",
        "url": "imagenes/aguila.jpg"//1
    },
    {
        "nombre": "ardilla",
        "url": "imagenes/ardilla.jpg"//2
    },
    {
        "nombre": "buho",
        "url": "imagenes/buho.jpg"//3
    },
    {
        "nombre": "tigre",
        "url": "imagenes/tigre.jpg"//4
    },
    {
        "nombre": "zorro",
        "url": "imagenes/zorro.jpg"//5
    },
    {
        "nombre": "gato",
        "url": "imagenes/gato.jpg"//6
    },
    {
        "nombre": "caballo",
        "url": "imagenes/caballo.jpg"//7
    },
    {
        "nombre": "tortuga",
        "url": "imagenes/tortuga.jpg"//8
    },
    {
        "nombre": "perro",
        "url": "imagenes/perro.jpg"//9
    },
    {
        "nombre": "delfin",
        "url": "imagenes/delfin.jpg"//10
    },

    //

    {
        "nombre": "aguila",
        "url": "imagenes/aguila.jpg"//1
    },
    {
        "nombre": "ardilla",
        "url": "imagenes/ardilla.jpg"//2
    },
    {
        "nombre": "buho",
        "url": "imagenes/buho.jpg"//3
    },
    {
        "nombre": "tigre",
        "url": "imagenes/tigre.jpg"//4
    },

    {
        "nombre": "perro",
        "url": "imagenes/perro.jpg"//9
    },

    {
        "nombre": "delfin",
        "url": "imagenes/delfin.jpg"//10
    },
    {
        "nombre": "delfin",
        "url": "imagenes/delfin.jpg"//10
    },

];
let tablero = document.querySelector(".tablero");
let imgNombre = [];
let imgPos = [];
let tiempo = 80;
let nivel = 1;
let aciertos = 0;
let fallos = 0;
let aciertosNivel1 = 0;
let aciertosNivel2 = 0;
let aciertosNivel3 = 0;
let mostraraciertos = document.querySelector(".aciertos");
let mostrarfallos = document.querySelector(".fallos");
let mostrartiempo = document.querySelector(".tiempo");
let parartiempo;
let botoniniciar = document.querySelector(".iniciar");
let mostrarnivel = document.querySelector(".nivel");

botoniniciar.addEventListener("click", function () {
    alert("Listo el pollo🐥");

    let nombreJugador = document.querySelector("#nombreJugador").value;

    if (nombreJugador.trim() === "") {
        alert("Por favor, ingrese su nombre");
        return;
    }

    document.querySelector(".muestra").textContent = "Jugador: " + nombreJugador;

    tablero = document.querySelector(".tablero");

    parartiempo = setInterval(function () {
        tiempo--;
        mostrartiempo.textContent = tiempo;

        if (tiempo === 0) {
            setInterval(parartiempo);
            alert("Game over, más rápido la próxima vez 🤣");
            location.reload();
        }
    }, 1000);

    agregarImagenes();
});

function agregarImagenes() {
    let nivelActual = nivel - 1; // Restamos 1 para obtener el índice correcto del nivel en el arreglo de imágenes
    let inicio = nivelActual * 12; // Calculamos el índice de inicio para el nivel actual
    let fin;

    if (nivel === 2) {
        fin = inicio + 16; // Incrementamos el rango a 8 imágenes para el nivel 2
    } else if (nivel === 3) {
        fin = inicio + 20; // Incrementamos el rango a 10 imagenes para el 3 nivel 
    } else {
        fin = inicio + 12; // Mantenemos el rango en 6 imágenes para los demás niveles
    }


    let contenedor = document.getElementById("contenedor");

    if (contenedor !== null) {
        if (fin > imagenes.length) {
            fin = imagenes.length; // Ajustamos el índice de fin si es mayor al número de imágenes disponibles
        }
        for (let i = inicio; i < fin; i++) {
            if (imagenes[i]) { // Verificar si el elemento existe en el arreglo
                let img = document.createElement("img");
                img.setAttribute("src", imagenes[i].url);
                img.setAttribute("class", "imgTamano");
                img.setAttribute("src", "imagenes/perdio.png");
                img.setAttribute("id", i);
                img.addEventListener("click", mostrarImagenes);
                contenedor.appendChild(img);
            } else {
                console.error("El elemento en el índice", i, "no está definido en el arreglo de imágenes.");
            }
        }
    } else {
        console.error("El elemento contenedor no existe");
    }
    imgNombre = [];
    imgPos = [];
}


function quitarImagenes() {
    let imagenActualTablero = document.querySelectorAll(".tablero img");
    for (let i = 0; i < imagenActualTablero.length; i++) {
        imagenActualTablero[i].remove();
    }
}



function mostrarImagenes() {
    let imgID = this.getAttribute("id");

    if (imgPos.includes(imgID)) {
        return;
    }

    if (this.classList.contains("acertada")) {
        alert("Ya has acertado esta imagen.");
        return;
    }

    this.setAttribute("src", imagenes[imgID].url);
    imgNombre.push(imagenes[imgID].nombre);
    imgPos.push(imgID);

    if (imgNombre.length === 2) {
        setTimeout(compararImg, 200);
    }
}



function compararImg() {
    let imagenActualTablero = tablero.querySelectorAll(".tablero img");

    if (imgNombre.length !== 2) {
        console.error("Debe haber exactamente 2 imágenes seleccionadas");
        imgNombre = [];
        imgPos = [];
        return;
    }

    let img1 = null;
    let img2 = null;

    for (let i = 0; i < imagenActualTablero.length; i++) {
        if (imagenActualTablero[i].getAttribute("id") === imgPos[0]) {
            img1 = imagenActualTablero[i];
        } else if (imagenActualTablero[i].getAttribute("id") === imgPos[1]) {
            img2 = imagenActualTablero[i];
        }
    }

    if (!img1 || !img2) {
        console.error("No se encontraron las imágenes seleccionadas");
        imgNombre = [];
        imgPos = [];
        return;
    }

    if (img1 === img2) {
        alert("Ya has acertado esta imagen.");
        imgNombre = [];
        imgPos = [];
        return;
    }

    let nombreImg1 = imgNombre[0];
    let nombreImg2 = imgNombre[1];

    if (nombreImg1 === nombreImg2) {
        alert("¡Felicidades! Acertaste, las imágenes son iguales.");
        img1.setAttribute("src", "imagenes/gano.jpg");
        img2.setAttribute("src", "imagenes/gano.jpg");
        img1.classList.add("acertada");
        img2.classList.add("acertada");

        if (nivel === 1) {
            aciertosNivel1++;
            mostraraciertos.textContent = aciertosNivel1;

            if (aciertosNivel1 === 6) {
                alert("👍¡Felicitaciones! Pasaste al siguiente nivel,");
                nivel++;
                quitarImagenes();
                tiempo = 70;
                aciertosNivel1 = 0;
                fallos = 0;
                mostrarnivel.textContent = nivel;
                mostraraciertos.textContent = aciertosNivel1;
                mostrarfallos.textContent = fallos;
                mostrartiempo.textContent = tiempo;
                mostraraciertos.textContent = aciertos;
                agregarImagenes();
            }
        } else if (nivel === 2) {
            aciertosNivel2++;
            mostraraciertos.textContent = aciertosNivel2;

            if (aciertosNivel2 === 8) {
                alert("👍¡Felicitaciones! Pasaste al siguiente nivel");
                nivel++;
                quitarImagenes();
                tiempo = 50;
                aciertosNivel2 = 0;
                fallos = 0;
                mostrarnivel.textContent = nivel;
                mostraraciertos.textContent = aciertosNivel2;
                mostrarfallos.textContent = fallos;
                mostrartiempo.textContent = tiempo;
                mostraraciertos.textContent = aciertos;
                agregarImagenes();
            }
        } else if (nivel === 3) {
            aciertosNivel3++;
            mostraraciertos.textContent = aciertosNivel3;

            if (aciertosNivel3 === 10) {
                alert("👌¡Felicidades! Has completado todos los niveles.")

                location.reload();
            }
        }
    } else {
        alert("¡Perdiste! Las imágenes son diferentes.");
        img1.setAttribute("src", "imagenes/perdio.png");
        img2.setAttribute("src", "imagenes/perdio.png");
        fallos++;
        mostrarfallos.textContent = fallos;
    }

    imgNombre = [];
    imgPos = [];
}

