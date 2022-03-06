# nodeJS-exercices

Le dossier data contient les fichiers .json correspondant aux listes d'utilisateurs, de message et de discussions.


Le dossier lib contient trois fichiers model.js :

Le fichier users.model.js est composé de deux fonctions :
getUsers() qui va chercher les utilisateurs dans une liste users.
saveUsers() qui sauvegarde les utilisateurs dans une liste users.

Le fichier messages.model.js est composé de deux fonctions :
getMessages() qui fait comme pour getUsers() mais avec les messages.
saveMessages() qui fait comme pour saveUsers() mais avec les messages.

Le fichier disscussions.model.js est composé de deux fonctions :
getDiscussions() qui n'est pas fonctionnelle.
saveDiscussions() qui n'est pas fonctionnelle.

A la fin des fichiers model.js, les fonctions sont exportées grâce à module.exports afin de permettre leur utilisation dans le fichier index.js.


Dans le fichier index.js se situent des fonctionnalités app.post et app.get :
app.post('/users', ...) nous permet d'ajouter un utilisateur et son mot de passe à la liste des utilisateurs, la fonction vérifie si l'utilisateur n'existe pas déjà.
app.post('/messages', ...) nous permet d'ajouter des messages à leur liste, avec l'heure à laquelle ils ont été publiés ainsi que leur auteur.
app.post('/discussions', ...) n'est pas fonctionnelle.
app.get('/users/me', ...) nous permet d'identifier un utilisateur et d'enregistrer son authentification dans les cookies.
app.get('/messages', ...) nous permet d'obtenir tous les messages à partir de leur liste.
app.get('/discussions', ...) n'est pas fonctionnelle.

Les fichiers package-lock.json et package.json sont 
