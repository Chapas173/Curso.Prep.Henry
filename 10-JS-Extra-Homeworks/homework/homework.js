// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for(let i in objeto){
    matriz.push([i,objeto[i]]);
  }
  return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
  
  for(let i=0;i<string.length;i++){
    letra = string[i];
    if(letra in objeto){
      objeto[letra]++;
      continue;
    }
    objeto[letra] = 1;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas="",minusculas="";
  for(let i=0;i<s.length;i++){
    letra = s[i];
    if(letra.charCodeAt(0)<91 && letra.charCodeAt(0)>64){
      mayusculas += letra;
    }
    else{
      minusculas += letra;
    }
  }
  s = mayusculas+minusculas;
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras = [];
  var indice = 0;
  for(let i=0;i<str.length;i++){
    letra = str[i];
    if(letra.charCodeAt(0) === 32){
      cadena = str.substring(indice,i);
      palabras.push(cadena);
      indice = i+1;
    }
  }
  cadena = str.substring(indice,str.length)
  palabras.push(cadena);

  
  
  var j=0;
  var palabrasAlreves = []
  for(let i=0;i<palabras.length;i++){
    alreves = "";
    palabra = palabras[i];
    for(let j=0;j<palabra.length;j++){
      alreves += palabra[palabra.length-j-1];
    }
    palabrasAlreves.push(alreves);
  }


  str =palabrasAlreves[0];
  for(let i=1;i<palabrasAlreves.length;i++){
    str += " "+palabrasAlreves[i];
  }

  return str;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var matriz = [];
  aux = numero;
  while(aux > 9){
    resto = Math.trunc(aux % 10);
    aux /= 10;
    matriz.push(resto);
  }
  matriz.push(Math.trunc(aux));

  var alreves = 0; 
  for(let i=0; i<matriz.length;i++){
    alreves += matriz[matriz.length-i-1]*Math.pow(10,i);
  }
  alreves = Math.trunc(alreves)

  if(alreves == numero){
    return "Es capicua";
  }
    return "No es capicua";  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaModificada = "";
  for(let i=0;i<cadena.length;i++){
    letra = cadena[i]
    if(letra !== "a" && letra !== "b"  && letra !== "c"){
      cadenaModificada +=letra;
    }     
  }
  return cadenaModificada;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var longitudes = [];
  for(let i=0;i<arr.length;i++){
    longitudes.push(arr[i].length);
  }
  
  var valoraux = Math.max.apply(null,longitudes)+1;
  var ordenado = [];
  for(let i=0;i<arr.length;i++){
    ind = longitudes.indexOf(Math.min.apply(null,longitudes));
    ordenado.push(arr[ind]);
    longitudes[ind] = valoraux;
  }

  return ordenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] interseccion [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  interseccion = [];
  for(let i=0;i<arreglo1.length;i++){
    elemento = arreglo1[i];
    if(arreglo2.indexOf(elemento)+1){
      interseccion.push(arreglo1[i]);
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

