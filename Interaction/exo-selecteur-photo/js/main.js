// Les variables
var photos = document.querySelectorAll('#photo-list li');
var paragraph = document.querySelector('#total em');


// Les Fonctions
function selectedPhoto(){
    this.classList.toggle('selected');
    


    var nbSelectedPhotos = document.querySelectorAll('li.selected').length;
    console.log('nbSelectedPhotos');

    paragraph.textContent = nbSelectedPhotos;
}



// Les Evts


for(var i = 0; i < photos.length; i++){
    photos[i].addEventListener('click', selectedPhoto);
}