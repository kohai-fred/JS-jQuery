/* 
https://sharemycode.fr/phb
*/

var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

var index = 0;
var idInterval = null;

// 1ere interaction : nextImage
// Au clic sur le button#slider-next, on affiche :
//  > l'image suivante (remplacer le valeur de l'attribut src)
//  > le texte de l'image suivante (remplacer le texte qui est dans la balise figcaption)

var nextBtn = document.querySelector('button#slider-next');
var prevBtn = document.querySelector('button#slider-previous');
var playBtn = document.querySelector('button#slider-toggle');
var icoElt = document.querySelector('button#slider-toggle i')
var randomBtn = document.querySelector('button#slider-random')
var imageElt = document.querySelector('figure.slider img');
var titleElt = document.querySelector('figure.slider figcaption');

console.log(nextBtn);
console.log(imageElt);
console.log(titleElt);

 // poser un écouteur d'evt sur nextBtn, qui exécutera la fonction nextImage()
 

 function nextImage() {
    index++;

    if(index>=slides.length){
        index = 0;
    }
    // remplacer "images/2.jpg" par une expression à partir du tableau slides
    imageElt.src = slides[index].image;
    titleElt.textContent = slides[index].legend;
}
 nextBtn.addEventListener('click', nextImage);


 
 // nextImage - vous devez récupérer 'images/2.jpg' et 'Fast Lane' - et modifier la page HTML pour afficher l'image et le titre

 function prevImage() {
    index--;

    if(index<0){
        index = slides.length-1;
    }
    // remplacer "images/2.jpg" par une expression à partir du tableau slides
    imageElt.src = slides[index].image;
    titleElt.textContent = slides[index].legend;
}
 prevBtn.addEventListener('click', prevImage);

     function playPause() {
     // servez de idInterval pour :
    
    // Déterminer SI le dipo n'est pas lancé
    // > ALORS on le lance ( setInterval () )
    // SINON
    // > ALORS on le stoppe ( clearInterval() )
    // Exécuter la fonction nextImage toutes les secondes (avec setInterval)
    
    if(idInterval==null){
        idInterval = setInterval(nextImage, 1000);
        icoElt.classList.remove('fa-play');
        icoElt.classList.add('fa-pause');
    }
    else{
        clearInterval(idInterval);
        idInterval = null;
        icoElt.classList.remove('fa-pause');
        icoElt.classList.add('fa-play');  
        
        console.log('icoElt');
    }
    console.log('idInterval');
    
}
/* var id = setInterval(playBtn, 1000);
        console.log('idInterval'); */



 playBtn.addEventListener('click', playPause);


function randomImage(event){
    console.log(event);
    var randomIndex = getRandomIntInclusive(0, slides.length-1);
    //index = getRandomIntInclusive(0, slides.length-1);

    imageElt.src = slides[index].image;
    titleElt.textContent = slides[index].legend;

    while(randomIndex == index){
    vrandomIndex = getRandomIntInclusive(0, slides.length-1);

    }
    index = randomIndex
    console.log('index');
}


randomBtn.addEventListener('click', randomImage);


function onKeyup(event) {
    console.log(event.code); // "ArrowRight", "ArrowLeft", "KeyP", "KeyR"
 
    // si fleche droite est préssée > on execute nextImage
    /* if(event.code == "ArrowRight"){
     nextImage();
    }
    //.....
    else if (event.code == "ArrowLeft"){
        prevImage();
    }
    else if(event.code == "KeyP"){
        playPause();
    }
    else if(event.code == "KeyR"){
        randomImage();
    }
    */
   switch(event.code) {
    case "ArrowRight": 
     nextImage();
    break;

    case "ArrowLeft": 
     prevImage();
    break;

    case "KeyP": 
     playPause();
    break;

    case "KeyR": 
     randomImage();
    break;
   }
  }
  






nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
playBtn.addEventListener('click', playPause);
randomBtn.addEventListener('click', randomImage);
document.addEventListener('keyup', onKeyup);


/*
les event du clavier 
- keydown : event qui se déclenche quand une touche est enfoncée
- keyup  : event qui se déclenche quand une touche est relâchée


fleche gauche : executer previousImage()
fleche droite : executer nextImage()
touche p : exécuter playPause()
touche r: executer random()
*/



