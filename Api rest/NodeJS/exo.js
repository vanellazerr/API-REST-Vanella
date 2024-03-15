const nombre=7 

if(nombre% 2 == 0) {
    console.log ("Le nombre est pair");
} else{
    console.log ("Le nombre est impaire");
}

switch (nombre% 2) {
    case 0:
        console.log("Le nombre est pair")
        break;
        default:
            console.log ("le nombre est impaur");
            break;
}

let compteur=0; 

for(let i=0; i<=5; i ++) {
    console.log(compteur);
}

const nombres= [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

for ( const nombre of nombres) {
console.log (nombres);
}

console.log(nombre)
if (nombre %2== 0) {
break;
    }

for (const index in nombres) {
    console.log (index);
}

compteur=0
while(compteur <=5); {
    console.log(compteur);
    compteur++;
}

Excercice-6 

let tableau =[1, 2, 3, 4, 5,];

Arial.Push(6)

tableau Unshif(0)

tableau.push[7,8,9]

let portion = tableau.slice(2,5)

tableau.splice(2,1)

let autreTableau = [10, 11, 12];
let nouveauTableau= tableau.concat(autreTableau);

nouveauTableau.forEach(element => console.log(element));

let index= nouveauTableau.infrxOf(5);

