//https://sharemycode.fr/5an
var titleElt = $('h1'); // elt jQuery
var paragraphElt = $('p.paragraph'); //  elt jQuery
var btn = $('button#btn'); // elt jQuery
var btn2 = $('button#btn2');


console.log(titleElt);
 // modification
 titleElt.text('La librairie jQuery');
 paragraphElt.html('<strong>Hello</strong>');

function changeTitleColor(){
    titleElt.css('color', 'blue');
}


 btn.on('click', changeTitleColor);


 var items = $('li');
 
 function showText() {
  console.log( $(this) );
  alert( $(this).text() )
 }
 
 items.on('click', showText );

 function shwInputValue(){

    alert($('input').val());
}


 btn2.on('click', shwInputValue)

 /* ********************************************* */
//https://sharemycode.fr/opm

 
/* Réaliser un compteur de caractères (comme Twitter)

#HTML
- un titre h1 avec l'intitulé compteur de caractères
- un textarea avec un placeholder "Votre message..."
- un paragraphe qui contient la phrases "0 caractère(s) restant"
- une balise em qui entoure le nombre de caractère
<p><em>140</em> caractère(s) restant</p>

# CSS 
- centrer le titre et le textarea dans un container de 700px
- ajouter dans le CSS une class 'danger' qui a une popriété color:red

# Interaction
- Lorsque l'utilisateur saisit du texte dans le champ, 
  il doit voir se mettre à jour le nombre de caractères restants
- BONUS : Quand le nombre de caractère descend SOUS 0, on affiche ce nombre en rouge

# Ce que vous allez utiliser

La sélection d'élément ( avec $(selector) )
le gestionnaire d'évènements ( avec .on() ) keyup, keydown
La manipulation du DOM ( .text(), .val(), .length, et addClass() / removeClass() ) */


/***************  MOI   ***************/


/* var areaElt = $('textarea');
var numElt = $('p em')

console.log('numElt')

function countText(){

    var count = areaElt.val().length;
    console.log('count');

    if(count < 140 ){

        if(numElt.hasClass('danger')){
            numElt.removeClass('danger');
        }
        
        numElt.text(140-count);
        
    }
    else if (count > 140){

        numElt.text(140-count);
        numElt.addClass('danger');

    }
    
}


areaElt.on('keyup', countText)
areaElt.on('keydown', countText)


console.log('countText'); */

/***************  CORRECTION **************/



 // 1 on selectionne TOUS les élts dont l'interaction a besoin
    var textareaElt = $('textarea');
    var emElt = $('em');
     
    // 3 on créé la fonction appelée par l'evt
    function printCounter() {
     // 1 récupérer la valeur du champ et compter le nombre de caractères
     var counter = textareaElt.val().length; // 1
     // 2 calcul pour compter le nombre de caractères restants à partir de 140
     var restCounter = 140 - counter; // 139
     // 3 remplace le texte de la balise <em> par le nombre de caractères restants
     emElt.text(restCounter);
     
     if(restCounter<0) {
     	emElt.addClass('danger')
     }
     else {
     	if(emElt.hasClass('danger')) {
        	emElt.removeClass('danger')
        } 	
     }
    }
    
    // 2 on pose un écouteur d'evt qui va déclencher un fonction
    textareaElt.on('keyup', printCounter)
    textareaElt.on('keydown', printCounter)

