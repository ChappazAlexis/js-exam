/**
 * fonction éxécutée au chargement de la page dans le navigateur et qui initialise le système de clics
 */
 window.onload = function () {
    var elements = document.getElementsByClassName("case");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', play, false);
    }
};

var currentPlayer = 1;
var scorePlayer1 = 0;
var scorePlayer2 = 0;


let arrayPlayer1Pieces = ["pion-blanc","cavalier-blanc","tour-blanc","fou-blanc","roi-blanc","reine-blanc"];
let arrayPlayer2Pieces = ["pion-noir","cavalier-noir","tour-noir","fou-noir","roi-noir","reine-noir"];



/**
 * Variables liées à la sélection
 */
var currentSelection = false;
var selectedHTML;
var selectedHTMLClasses;

// Test si la case est vide
// @param isEmpty 
function isCaseEmpty(isEmpty) {
    if(isEmpty == false) {
        //console.log('vide')
    } else {
        //console.log('plein')
    }
}

/**
 * Récupère la deuxième classe déclaré dans votre liste.
 * Découpe votre ensemble de classe selon les espaces pour les mettre dans un tableau (split).
 * @param {*} selectedClasses 
 * @returns la classe liée à une pièce si elle exise sinon renvoie vide.
 */
function getCaseClass(selectedClasses) {
    /**
     * On récupère l'ensemble des classes sous forme de tableau, et on récupère la deuxième.
     * Note : Toujours déclarer votre class liée à une pièce en deuxième.
     */
    if (selectedClasses !== "") {
        var arraySplitedClasses = selectedClasses.split(" ");
        if (arraySplitedClasses.length > 1) {
            let isEmpty = true
            isCaseEmpty(isEmpty)
            return arraySplitedClasses[1];
        } else {
            let isEmpty = false
            isCaseEmpty(isEmpty)
            return "";
        }
    }
}

/**
 * Passe au joueur suivant.
 */
function changePlayer() {

    if (currentPlayer == 1) {
        currentPlayer = 2;
    } else if (currentPlayer == 2) {
        currentPlayer = 1;
    }
    document.getElementById('currentJ').innerHTML = currentPlayer;
}

/**
 * Ajoute une classe selon le joueur courant à une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function addSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.add("selectedRed");

    } else if (currentPlayer == 2) {
        classList.add("selectedBlue");
    }
}

/**
 * Retire une classe selon le joueur courant d'une liste de classe liée à un élément HTML.
 * @param {*} classList liste des classes d'un élément HTML.
 */
function removeSelectedClassByPlayer(classList) {
    if (currentPlayer == 1) {
        classList.remove("selectedRed");
    } else if (currentPlayer == 2) {
        classList.remove("selectedBlue");
    }
}



/**
 * Fonction liée à l'évènement 'click'.
 * A MODIFIER
 */
var play = function() {
    if (!currentSelection) {
        selectedHTML = this;
        selectedHTMLClasses = this.className;
        var piece = getCaseClass(selectedHTMLClasses)
        var classPiece = getCaseClass(selectedHTMLClasses);

        isCaseAllowed(selectedHTMLClasses)
        if(isCaseAllowed(selectedHTMLClasses)==true) {
            currentSelection = true;
            addSelectedClassByPlayer(this.classList);
        }
    } else {
        if (selectedHTML == this) {
            removeSelectedClassByPlayer(this.classList)
            currentSelection = false;
        }
        

        currentSelection = false;
        
        isCaseEmpty(selectedHTML);
        changePlayer()
    }
};


function getElementsChildren() {
    let node = document.getElementById('board').children;
    for(let i = 0; i < node.length; i++) {
        switch(i) {
//noir
            case 0:
                node[i].classList.add('tour-noir')
            break;
            case 1:
                node[i].classList.add('cavalier-noir')
            break;
            case 2:
                node[i].classList.add('fou-noir')
            break;
            case 3:
                node[i].classList.add('reine-noir')
            break;
            case 4:
                node[i].classList.add('roi-noir')
            break;
            case 5:
                node[i].classList.add('fou-noir')
            break;
            case 6:
                node[i].classList.add('cavalier-noir')
            break;
            case 7:
                node[i].classList.add('tour-noir')
            break;
            case 8:
                node[i].classList.add('pion-noir')
            break;
            case 9:
                node[i].classList.add('pion-noir')
            break;
            case 10:
                node[i].classList.add('pion-noir')
            break;
            case 11:
                node[i].classList.add('pion-noir')
            break;
            case 12:
                node[i].classList.add('pion-noir')
            break;
            case 13:
                node[i].classList.add('pion-noir')
            break;
            case 14:
                node[i].classList.add('pion-noir')
            break;
            case 15:
                node[i].classList.add('pion-noir')
            break;

//blanc
            case 48:
                node[i].classList.add('pion-blanc')
            break;
            case 49:
                node[i].classList.add('pion-blanc')
            break;
            case 50:
                node[i].classList.add('pion-blanc')
            break;
            case 51:
                node[i].classList.add('pion-blanc')
            break;
            case 52:
                node[i].classList.add('pion-blanc')
            break;
            case 53:
                node[i].classList.add('pion-blanc')
            break;
            case 54:
                node[i].classList.add('pion-blanc')
            break;
            case 55:
                node[i].classList.add('pion-blanc')
            break;
            case 56:
                node[i].classList.add('tour-blanc')
            break;
            case 57:
                node[i].classList.add('cavalier-blanc')
            break;
            case 58:
                node[i].classList.add('fou-blanc')
            break;
            case 59:
                node[i].classList.add('roi-blanc')
            break;
            case 60:
                node[i].classList.add('reine-blanc')
            break;
            case 61:
                node[i].classList.add('fou-blanc')
            break;
            case 62:
                node[i].classList.add('cavalier-blanc')
            break;
            case 63:
                node[i].classList.add('tour-blanc')
            break;
        }
    }
    
}
getElementsChildren();


function reset() {
    getElementsChildren()
    console.log('reset')
}

document.getElementById("reset").addEventListener('click', function() {
    reset()
})


function isCaseAllowed (selectedHTMLClasses) {
let testCase = getCaseClass(selectedHTMLClasses)

    if (currentPlayer == 1) {
        // console.log('J1 doit jouer')
        return (arrayPlayer1Pieces.includes(testCase))
    } else {
        // console.log('J2 doit jouer')
        return (arrayPlayer2Pieces.includes(testCase))
    }
}
