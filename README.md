# nodeJS-exercices

Le dossier __data__ contient les fichiers _.json_ correspondant aux listes d'utilisateurs, de message et de discussions.
<br>

</br>

Le dossier __lib__ contient trois fichiers _model.js_ :

Le fichier _users.model.js_ est composé de deux fonctions :
- _getUsers()_ qui va chercher les utilisateurs dans leur liste.
- _saveUsers()_ qui sauvegarde les utilisateurs dans leur liste.
<br>

</br>

Le fichier _messages.model.js_ est composé de deux fonctions :
- _getMessages()_ qui fait comme pour _getUsers()_ mais avec les messages.
- _saveMessages()_ qui fait comme pour _saveUsers()_ mais avec les messages.
<br>

</br>

Le fichier _discussions.model.js_ est composé de deux fonctions :
- _getDiscussions()_ qui n'est pas fonctionnelle.
- _saveDiscussions()_ qui n'est pas fonctionnelle.
<br>

</br>

A la fin des fichiers _model.js_, les fonctions sont exportées grâce à _module.exports_ afin de permettre leur utilisation dans le fichier _index.js_.
<br>

</br>

Dans le fichier _index.js_ se situent des fonctionnalités _app.post_ et _app.get_ :
- _app.post('/users', ...)_ nous permet d'ajouter un utilisateur et son mot de passe à la liste des utilisateurs, la fonction vérifie si l'utilisateur n'existe pas déjà.
- _app.post('/messages', ...)_ nous permet d'ajouter des messages à leur liste, avec l'heure à laquelle ils ont été publiés ainsi que leur auteur.
- _app.post('/discussions', ...)_ n'est pas fonctionnelle.
- _app.get('/users/me', ...)_ nous permet d'identifier un utilisateur et d'enregistrer son authentification dans les cookies.
- _app.get('/messages', ...)_ nous permet d'obtenir tous les messages à partir de leur liste.
- _app.get('/discussions', ...)_ n'est pas fonctionnelle.
