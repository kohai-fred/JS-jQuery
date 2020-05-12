var form = $('form');
var selectCats = $('select#choix-chats');
var saisieText = $('textarea');
var good =$('.message-ok');

console.log('good');
console.log('form');
console.log('selectCats');
console.log('saisieText');



function onSubmit(event){
    event.preventDefault();

    var nbErrors = 0;
    console.log('nbErrors');


    var select = selectCats.val();
    var text = saisieText.val();
    console.log(select);
    console.log(text);

    if(select == 0){
        selectCats.addClass('color-error');
        nbErrors++;
    }

    if(text.length<15){
        saisieText.addClass('color-error');
        nbErrors++;
    }
    
    if(nbErrors == 0){
        good.show().slideDown();
        form.slideUp();
    }
    
}




form.on('submit', onSubmit);