https://developers.themoviedb.org/3/getting-started/introduction

exemple de call API pour récupérer les données du film qui a l'ID 550 en language fr
on passe dans la querystring de l'url :
- l'ID du film
- la clé API
- le code language (fr)

1/ exemple de call api pour récupérer le détail d'un film qui a l'id 550
https://api.themoviedb.org/3/movie/550?api_key=efdeb661aaa006b1e4f36f990a5fd8fd&language=fr

------------------------------------------------------------------------------------------

2/ exemple de call api pour récupérer la liste "découvrir des films"
https://api.themoviedb.org/3/discover/movie?api_key=efdeb661aaa006b1e4f36f990a5fd8fd&language=fr


------------------------------------------------------------------------------------------

3/ exemple de call api pour récupérer la liste des films sur une requete de recherche (ici le mot 'black')
https://api.themoviedb.org/3/search/movie?api_key=efdeb661aaa006b1e4f36f990a5fd8fd&query=black&language=fr