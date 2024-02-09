# Application de gestion de projet

Cette application permet à n'importe qui de s'inscrire de se connecter afin de créer ou gérer des projet ainsi que d'ajouter, modifier ou supprimer des tâches aux projets qui lui appartient via une Api lié avec une base de données ainsi qu'un front fait en VueJs.

## Installation Back

Tout d'abord vous devez faire un pull sur le repo git, ensuite il faudra installer certaines extensions pour le projet back via le node package manager.

```bash
cd Back/ECF1_Back
npm install express sequelize router mysql2 jsonwebtoken
```
Il faudra ensuite créer une base de données pour le projet avec la ligne de commande ci dessous.
```sql
CREATE DATABASE ecf_database
```
Ensuite rendez-vous sur le ficher db.js dans le dossier config pour modifier les information de connexion à la base de données.

Une fois cela fait il ne vous reste plus qu'a lancer le back via la commande suivante.

```bash
node app.js
```

## Installation Front

Ensuite vous devez faire un pull sur le repo git, ensuite il faudra installer certaines extensions pour le projet Front via le node package manager.

```bash
cd ../../Front
npm install vue@latest

```


Une fois cela fait il ne vous reste plus qu'a lancer le Front via la commande suivante.

```bash
npm run dev
```

## Utilisation

Vous accéderez donc à la page de connexion et inscription et vous devez créer un compte puis vous pourrez vous connecter.

Et lorsque que vous serez connecter vous aurez accès à la page d'accueil.

Les pages permettant la gestion des tâches et des projet ne sont pas encore mise en ligne.




## API
Cette API présente différents End Point mais le plus important et d'abord les End Point d'inscription et de connexion car pour accéder au autre End Point il faut être connecté et pour tester vos requêtes il faut absolument être connecté car les routes sont sécurisé donc nécessite la présence d'un JWT dans le local storage.

Les requêtes utilise le protocole HTTP.

### End Point connexion/inscription

Pour l'ajout d'un utilisateur, le End Point est le suivant : http://localhost:3000/api/user/add-user
Ce End Point permet une requêtes post et dans le corps de la requête il faut un "username" ainsi qu'un "password", bien sur le "password" sera cryptés dans la base de données.

Pour la connexion d'un utilisateur, le End Point est le suivant : http://localhost:3000/api/user/login
Ce End Point permet une requêtes post et dans le corps de la requête il faut un "username" ainsi qu'un "password"
Et cette requêtes vous retournera un JWT valide pendant une heure si le "username" et le "password" correspondes à un utilisateur dans la base de données.

### End Point Projet
Le premier End Point permet de récupérer tout les projets correspondant à l'utilisateur connecter.
http://localhost:3000/api/project/


Le second End Point permettra d'ajouter un projet si l'utilisateur et connecté et à donc un JWT valide via une requête post et deux champ dans le corps de la requête : "name", "description".
http://localhost:3000/api/project/create

Le troisième End Point permettra à l'utilisateur de modifier un projet lui appartenant.
http://localhost:3000/api/project/update/:id
En Effet chaque projet possède un id unique relié à l'id de l'utilisateur ce qui permet de sécuriser la chose.

Le dernier End Point offre la possibilité de supprimer un projet uniquement si il appartient à l'utilisateur connecté.
http://localhost:3000/api/project/delete/:id

### End Point Tâches

Les End Point suivant seront accessible uniquement si un projet existe et permettent de gérer les tâches lié à un projet.

Le Premier End Point permet de récupérer toutes les tâches d'un projet.
http://localhost:3000/api/project/:id
Avec ":id" correspondant à l'id du projet et sera accessible uniquement si le projet à été créer par l'utilisateur connecté 


Le Second permet l'ajout d'une tâche à un projet.
http://localhost:3000/api/project/create-task/:id
Cette requête nécessite d'avoir un champ "name" et un champ "description" dans le corps de la requête et le ":id" correspond à l'id unique d'un projet et cette requête s'effectuera uniquement si le projet appartient à l'utilisateur connecté.

Le troisième End Point permet la modification d'une tâche
http://localhost:3000/api/project/update/:id/:idT
Avec ":id" correspondant à l'id du projet et :"idT" à l'id de la tâche visé et sera possible uniquement si le projet auquel est attaché la tâche appartient à l'utilisateur connecté.

Le Dernier End Point donne la possibilité à l'utilisateur de supprimer une tâche d'un projet si ce projet lui appartient
http://localhost:3000/api/project/delete:/:id/:idT
Avec ":id" correspondant à l'id du projet et :"idT" à l'id de la tâche visé et sera possible uniquement si le projet auquel est attaché la tâche appartient à l'utilisateur connecté.

 

## License

[MIT](https://choosealicense.com/licenses/mit/)