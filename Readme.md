# Rapport Mini Projet web

Le projet simule un jeu entre des **personnages** et des **monstres**, chaque caractère du jeu dispose d'un nombre de points de vie, des points d'attaque et capacité d'esquive.


# Le strict minimum


## Choisir un personnage 

> http://127.0.0.1:8080/chooseCharacter.html
Cette fenêtre vous permet de choisir votre personnage grâce au nom, mais aussi vous donne la possibilité d'accéder à l'ajout d'un nouveau personnage ou monstre.


## Affichage du personnage et du premier monstre 

> http://127.0.0.1:8080/showCharacter.html
Cette fenêtre vous permet de voir le profil de votre personnage et celui du premier monstre et d'accéder à l'arène du combat.

## L’arène du combat 

> http://127.0.0.1:8080/arene.html
>Cette fenêtre vous permet de **lancer** le combat et voir les coups qui sont portés chaque seconde , **choisir** d'affronter le monstre **suivant** et **afficher** les stats après la fin du jeu.

 



# Le PLUS ++++

## Ajout de personnage
L'application vous permet aussi d'ajouter un personnage ou un monstre.

> http://127.0.0.1:8080/addpersonnage.html


## Utilisation d'AJAX
Lors du chargement du nouveau monstre on fait un appel ajax grace à la fonction **loadnext** inclue dans **cookies.js**.

    function loadnext()  {  
    var ajax = new XMLHttpRequest();  
    ajax.open('POST', 'netfighter');  
    ajax.onload=function()  
      { if(ajax.status===200)  
         {  
           var reponse=ajax.responseText;  
           console.log(ajax.responseText);  
           if(reponse=="Au Suivant!")  
             {  
              chargeinfomonstre();  
              document.getElementById("nextbtn").style.display =    "none";  
             }  
             else  
            {  
             document.getElementById("fightb").disabled=true;  
             document.getElementById("nextbtn").disabled=true;  
             document.getElementById("spanmon").innerHTML = nbtue;  
             document.getElementById("defeat").style.display = "initial";  
            }  
  
            alert(ajax.responseText);   
        }  
       else  
       {  
       console.log('ajax failed');  
       }  
      };  
      ajax.send();  
      };

## Utilisation de Bootstrap
**Bootstrap** est une collection d'outils utiles à la création du design de sites et d'applications web. C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option.

## Animation lors du combat
Affichage à chaque round (environs 1 seconde )  du combat si le personnage et le monstre on esquivé l'attaque avec un **voyant** coloré ( T ou E ) à coté des points de vie.

## Utilisation de Github

