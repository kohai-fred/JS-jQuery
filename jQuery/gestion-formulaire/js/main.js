 	// Selection les élmts (tous les champs, et le formulaire)
     var form = $('form');
     var prenomInput = $('input');
     var situationSelect = $('select');
     var messageTextarea = $('textarea');
     var checkElt = $('.top-form');
      
     // Détecter l'evt submit sur le form -> executer une fonction onSubmit
     // A la soumission, récupérer la valeur de TOUS les champs, et les afficher dans la console
     
     function onSubmit(event) {
        // 1 empecher la page de se recharger
        event.preventDefault();
        checkElt.hide()
        // 2 on reset tous les p.error en les masquant
        $('p.error').text("").hide();

        // 2.1 Compter le nombres d'erreurs

        var nbErrors = 0;
        
        // 3 on récupérer les valeurs de tous les champs
        var prenom = prenomInput.val();
        var situation = situationSelect.val();
        var message = messageTextarea.val();
        console.log(prenom);
        console.log(situation); // "0", "1", "2", "3"
        console.log(message);
        
        
        // 4 on traite les erreurs CHAMP par CHAMP
        
        // Traiter les erreurs du champ prenom 
        //  -> le champ doit contenir un prenom 
        //  -> le prénom doit comporter au moins 2 caractères
        if(prenom.length == 0) {
            // injecter le texte "le champ doit contenir un prenom" dans le p qui suit l'input
            prenomInput.next().text("le champ doit contenir un prenom").show();
            nbErrors++;
        }

        else if(prenom.length<2) {
            prenomInput.next().text("le prénom doit comporter au moins 2 caractères").show();
            nbErrors++;
        }
        
        /*****************************************/
        // Traiter les erreurs du champ situation
        //-> vous devez sélectionner un choix
        if(situation == 0) {
            situationSelect.next().text("vous devez sélectionner un choix").show();
            nbErrors++;
        }
        
        
        /*****************************************/
        // Traiter les erreurs du champ message
        // -> le message doit comporter au moins 10 caractères
        // -> le message doit comporter maximum 50 caractères
        if(message.length<10) {
            messageTextarea.next().text("le message doit comporter au moins 10 caractères").show();
            nbErrors++;
        }

        else if(message.length>50) {
            messageTextarea.next().text("le message doit comporter maximum 50 caractères").show();
            nbErrors++;
        }

        console.log(nbErrors);
    
        if(nbErrors == 0){
            checkElt.removeClass('loose');
            checkElt.addClass('succes');
            checkElt.text("il y "+nbErrors+" erreur(s)").slideDown();
        }
        else{
            checkElt.removeClass('succes');
            checkElt.addClass('loose');
            checkElt.text("Coool, le formulaire a été envoyé !").slideDown();
        }
    }
     
     
    form.on('submit', onSubmit);