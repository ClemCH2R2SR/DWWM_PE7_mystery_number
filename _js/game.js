"use strict;"

//declaration de constantes indiquant les limites du jeu
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;

//fonction permettant au joueur de rentrer son pseudo avant la partie en retournant l'input
function askPlayerName()
{
    return prompt("Quel est votre nom de joueur svp ?");
}

// fonction pour attribuer un nombre aleatoirs flottant entre 0 et 1 multiplié par la limite max retournant l'entier inferieur+1 
function getRandomNumber()
{
    return (Math.floor(Math.random() * MAX_RANDOM_NUMBER)+1);
}

// fonction permzttant au houeur de proposer un chiffre et de retourner son input
function askPlayerInput()
{
    return prompt(`Quelle est votre proposition entre ${MIN_RANDOM_NUMBER} et ${MAX_RANDOM_NUMBER} ?`);
}

//la fonction compare la saisie du joueur avec le nombre à deviner
//les cas 1 et 2 indique un 'hors limite' trop grand ou trop petit et renvoie la valeur false
//les cas 3 et 4 indique un chiffre plus petit ou plus grand avec une indicationpour le jouer et renvoie la valeur false
//le cas 5 indique que le joueur a deviner le nombre et renvoie true
//tout autre cas par defaut renvoie false
function checkPlayerInput(playerInput, numberToGuess)
{
    if (playerInput > MAX_RANDOM_NUMBER) {
        alert(`On a dit un nombre inférieur ou égal à ${MAX_RANDOM_NUMBER} !!`);
        return false;
    }
    if (playerInput < MIN_RANDOM_NUMBER) {
        alert(`On a dit un nombre supérieur ou égal à ${MIN_RANDOM_NUMBER} !!`);
        return false;
    }
    if (playerInput > numberToGuess) {
        sayMessage(`Votre proposition est plus grande que le nombre mystère !`);
        return false;
    }
    if (playerInput < numberToGuess) {
        sayMessage(`Votre proposition est plus petite que le nombre mystère !`);
        return false;
    }
    if (playerInput == numberToGuess) {
        sayMessage(`Félicitations,le nombre mystère est bien ${numberToGuess} !`);
        return true;
    }
    return false;
}
//fonction pour faire deviner le chiffre
//la variable playerinput prend la valeur de retour de la fonction qui demande au joueur de saisir un reponse
//la console log cette reponse
//la fonction retourne la valeur de la fonction servant a comparé le nombre à deviner au nombre saisie par le joueur
function makePlayerGuess(numberToGuess)
{
    let playerInput = askPlayerInput();
    console.log("le joueur a saisi : " + playerInput);
    return checkPlayerInput(playerInput, numberToGuess);
}

//declarer la fonction runGame qui doit contenir le parametre playerName
//cette fonction log le message de bienvenu accompagné du playerName
//déclare un numberToGuess et lu afffecte une valeur numerique aléatoire avec la methode getRandomNumber
//puis log numberToGuess dans un message
function runGame(playerName)
{
    console.log(`Bienvenue dans le jeu du nombre mystère, ${playerName}!`);
    let numberToGuess = getRandomNumber();
    console.log("nombre mystère : " + numberToGuess);

    let hasFoundNumber = false;
    //attribuer à la variable hasFoundNumber la valeur de retour de la fonction makePlayerGuess avec comme parametre numberToGuess
    //tant que hasFoundNumber a pour valeur false
    while (!hasFoundNumber) {
        hasFoundNumber = makePlayerGuess(numberToGuess);
    }
    // executer la fonction sayMessage avec comme parametre un string
    sayMessage("Fin de la partie...");

}
//construction de la fonction askPlayerToPlayAgain
function askPlayerToPlayAgain()
{   //envoyer comme résultat le parametre de la fonction confirm
    return confirm("Voulez-vous faire une nouvelle partie ?");
}

// construction fonction main
function main()
{   //appel de sayHello
    sayHello();
    //creer la variable à courte portée playerName et lui attribuer le résultat de la fonction askPlayerName
    let playerName = askPlayerName();
    //creer la variable à courte portée startGame et lui attribuer la valeur True
    let startAGame = true;
    //Tant que startGame a pour valeur true faire la boucle
    while (startAGame) {
        //executer la fonction runGame avec le parametre playerName
        runGame(playerName);
        //attribuer à startAGame le resultat de la fonction askPlayerToPlayAgain
        startAGame = askPlayerToPlayAgain();
    }
    //appel de sayGoodbye
    sayGoodbye();
}

//execution fonction main
main();