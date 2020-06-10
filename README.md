
# To-do

## Lien
https://charlotteisambert.github.io/to-do/

## Contexte

Projet réalisé lorsque j'ai commencé à coder en **React** (version 16, avec hooks) et **Typescript** au début de mon stage de fin d'études, en janvier 2020, pour appréhender les technologies utilisées sur le projet.

## Présentation du projet

Application web contenant une to-do list qui permet d'ajouter des tâches, de les supprimer, de les check et uncheck. Un petit aperçu ci-dessous :

![screenshot-to-do](/public/screenshot-to-do.png)


Pour voir comment appliquer un **Design Pattern** en Javascript, j'ai intégré à mon projet une **Factory**. Il y a ainsi différents types de tâche : petit texte, grand texte et nombre. Ceux-ci sont différenciés principalement un tag en haut à gauche : une étoile jaune pour les petits textes, un rond viollet pour les grands textes et un carré rouge pour les nombres. Mais on pourrait imaginer d'autres disparités entre les tâches, ou bien d'autres types de tâche (date, liste, etc.).

## Progression du projet

La partie front est terminée. 
Je compte revenir sur ce projet pour y ajouter une partie back et base de données afin d'y stocker les tâches. Dans l'état actuel des choses, les tâches disparaîtront après un rafraîchissement ou la fermeture du navigateur. 

## Installation 

Pour pouvoir lancer le projet en local, il faut executer ces commandes : 

`git clone https://github.com/charlotteisambert/to-do`

`cd to-do`

`yarn install`

`yarn start`

Sinon cliquez ici : https://charlotteisambert.github.io/to-do/
