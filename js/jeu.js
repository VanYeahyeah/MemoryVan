var choixMemory = 0;
var theme=[britney, chatons, chiots, lorie];
var choixTaille = 0;
var taille=[3*3];
// var motifsCartes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];//10 paires au total donc on double chaque carte. chaque chiffre correspond à un motif
var motifsCartes=[1,1,2,2];
// var etatsCartes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//0 correspond à l'état retourné
var etatsCartes =[0,0,0,0];
var cartesRetournees = [];//nombre de carte retournée (max2)
var nbPairesTrouvees = 0;//compteur de cartes déjà trouvées
var imgCartes = document.getElementById("tapis").getElementsByTagName("img");
var nbCoup = 0;
var clickDisplay = document.getElementById('nbCoup');
var cardDisplay = document.getElementById('nbPairesTrouvees');

// var discoursDisplay = document.getElementById('cestGagne');

function choix() {
    
    switch (choixMemory) {
        case 0: imgCartes[noCarte].src = "Projet/Multimedia/britney";//0 correspond à Britney
            break;
        case 1: imgCartes[noCarte].src = "Projet/Multimedia/chatons"; //1 Correspond à chatons
            break;
        case 2: //2 correspond à chiots
            break;
        case 3: //3 correspond à  lorie
            break;
      

    }
}

for (var i = 0; i < imgCartes.length; i++) {
    imgCartes[i].noCarte = i;
    imgCartes[i].onclick = function () {
        controleJeu(this.noCarte);
    }
}
initialiseJeu();

function majAffichage(noCarte) {
    switch (etatsCartes[noCarte]) {
        case 0:
            imgCartes[noCarte].src = "Projet/Multimedia/britney/carteRetournée.png";//affiche une image unique quand la carte est retournée
            break;
        case 1:
            
            imgCartes[noCarte].src = "Projet/Multimedia/britney/carte" + motifsCartes[noCarte] + ".jpg";//le chemin de l'image de la carte à retourner côté visible
            break;
        case -1:
            imgCartes[noCarte].src = "Projet/Multimedia/britney/carte" + motifsCartes[noCarte] + ".jpg";
            // imgCartes[noCarte].src="Projet/Multimedia/okay.jpg";
            break;
    }
}
function rejouer() {

    location.reload();
}
function initialiseJeu() {
    for (var position = motifsCartes.length - 1; position >= 1; position--) {
        var hasard = Math.floor(Math.random() * (position + 1));
        var sauve = motifsCartes[position];
        motifsCartes[position] = motifsCartes[hasard];
        motifsCartes[hasard] = sauve;
    }
}
function controleJeu(noCarte) {
    if (cartesRetournees.length < 2) {//s'il y a moins de deux cartes visibles
        if (etatsCartes[noCarte] == 0) {//si la carte est cachée
            etatsCartes[noCarte] = 1;
            cartesRetournees.push(noCarte);
            majAffichage(noCarte);
            
        }
        if (cartesRetournees.length == 2) {//si deux cartes sont retournées
            nbCoup++;
            var nouvelEtat = 0;//changement d'état (pour passer de cachée, à visible ou trouvées
            if (motifsCartes[cartesRetournees[0]] == motifsCartes[cartesRetournees[1]]) {//si le motif de la première carte retournée est égal à celui de la deuxième carte
                nouvelEtat = -1;//alors son nouvel état est -1 donc trouvé
                nbPairesTrouvees++;//donc on incrémente le nombre de paires trouvées de 1
            }
            etatsCartes[cartesRetournees[0]] = nouvelEtat;
            etatsCartes[cartesRetournees[1]] = nouvelEtat;
            setTimeout(function () {
                majAffichage(cartesRetournees[0]);
                majAffichage(cartesRetournees[1]);
                cartesRetournees = [];
                // if (nbPairesTrouvees == 10) {
                if(nbPairesTrouvees==2){
                    rejouer();
                }
            }, 500);
            clickDisplay.innerHTML = nbCoup;
           
        }console.log(nbPairesTrouvees);
        cardDisplay.innerHTML =nbPairesTrouvees;
    }
}   
var cestGagne=document.getElementById('cestGagne');
function affichage(cestGagne){
    if(nbPairesTrouvees==2){
     
        cestGagne.innerText = "C'est gagné!!!!";
      
    }
}
// var nbcoup = nbPairesTrouvees;
// for (nbPairesTrouvees = 0; nbPairesTrouvees < 10; score++) {
//     if (nouvelEtat = 1);
//     score++;
//     console.log(score);
// }
