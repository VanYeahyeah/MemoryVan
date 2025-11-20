window.onload = init;

let conformiteMdp = 0;
let pointMinuscule = 0;
let pointMajuscule = 0;
let pointChiffre = 0;
let pointNbCaracteres =0 ;

function init(){
    document.getElementById('mdp').addEventListener('input', controleMotDePasse);
    document.getElementById('mdpVerif').addEventListener('input', controleMotDePasse);    
    };

function validation(mdp, mdpVerif){
    conformiteMdp = pointMinuscule + pointMajuscule + pointChiffre + pointNbCaracteres;
    console.log(conformiteMdp);
    if((conformiteMdp ==4) && (mdp == mdpVerif)){
        document.getElementById("valider").disabled=false;
    }else{
        document.getElementById("valider").disabled =true;
    }
}
function controleMotDePasse(){
    console.log("controle mdp");
    let mdp = document.getElementById("mdp").value;
    let mdpVerif = document.getElementById("mdpVerif").value;
    verifMdpIdentique(mdp,mdpVerif)
    verifMinuscule(mdp);
    verifMajuscule(mdp);
    verifChiffre(mdp);
    verifNbCaracteres(mdp);
    validation(mdp,mdpVerif);
}
function verifMinuscule(mdp){
    console.log("Vérification minuscule pour:",mdp);
    let presenceMinuscule = false;
    for(let i=0;i <mdp.length;i++){
        if(mdp.charCodeAt(i)>=97 && mdp.charCodeAt(i) <= 122){
            presenceMinuscule = true;
            break;
        }
    }

if(presenceMinuscule){
    colorTextGreen('minuscule');
    pointMinuscule = 1;
}else{
    colorTextRed('minuscule');
    pointMinuscule = 0;
}
}
function verifMajuscule(mdp){
    let presenceMajuscule =false;
    for(let i=0;i<mdp.length;i++){
        if(mdp.charCodeAt(i)>=65 && mdp.charCodeAt(i) <=90){
            presenceMajuscule =true;
        }
    }
    if(presenceMajuscule){
        colorTextGreen('majuscule');
        pointMajuscule = 1;
    }else{
        colorTextRed('majuscule');
        pointMajuscule=0;
    }

}

function verifChiffre(mdp){
    let presenceChiffre = false;
    for(let i = 0; i<mdp.length;i++){
        if(mdp.charCodeAt(i)>=48 && mdp.charCodeAt(i)<=57){
            presenceChiffre =true;
        }
    }
    if(presenceChiffre){
        colorTextGreen('chiffre');
        pointChiffre = 1;
    }else{
        colorTextRed('chiffre');
        pointChiffre=0;
    }
}
function verifNbCaracteres(mdp){
    let nbCaract= false;
    if(mdp.length ==0){
        colorTextRed('minuscule');
        colorTextRed('majuscule');
        colorTextRed('chiffre');
        colorTextRed('nbCaracteres');
    }
    if(mdp.length>=8){
        colorTextGreen('nbCaracteres');
        nbCaract=true;
    }else{
        colorTextRed('nbCaracteres');
        nbCaract =false;
    }
    if (nbCaract){
        pointNbCaracteres = 1;
    }else{
        pointNbCaracteres =0;
    }
}
function colorTextRed(id){
    document.getElementById(id).style.color="red";
}
function colorTextGreen(id){
    document.getElementById(id).style.color="green";
}
function verifMdpIdentique(mdp, mdpVerif){
    if(mdp ===mdpVerif && mdp.length>0){
        colorTextGreen("identique");
    }else{
        colorTextRed("identique");
    }
};
