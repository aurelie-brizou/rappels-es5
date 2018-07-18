function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function (){
        return this.nom +' '+ this.prenom +' '+ this.pseudo;
    }
}

var jules = new Personne ('LEMAIRE', 'jules', 'jules77');
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

var paul = new Personne('LEMAIRE', 'Paul', 'paul44');


function afficherPersonne(p) {
    console.log(p.nom);
    console.log(p.prenom);
    console.log(p.pseudo);
    console.log(p.age);
    console.log(p.getNomComplet());
}

afficherPersonne(paul);

/*
Modifier un objet
*/
jules.pseudo = "jules44"
console.log(jules.getNomComplet());

/*
Ajouter une propriété à Personne
*/
jules.age;
console.log(jules.age);
Personne.prototype.age = 'Non renseigné';
afficherPersonne(jules);
console.log(jules.age);

/*
Ajouter une méthode à Personne
*/
function getInitiales() {
    var premiereLettrePrenom = this.prenom.charAt(0);
    var premiereLettreNom = this.nom.charAt(0);
return premiereLettrePrenom + premiereLettreNom
};

Personne.prototype.getInitiales = getInitiales;
console.log(jules.getInitiales());

/*
Objet sans fonction constructeur
*/

var robert = new Personne();
robert.prenom = 'Robert';
robert.nom = 'LEPREFET';
robert.pseudo = 'robert77';
robert.getNomComplet();

afficherPersonne(robert);

/*
Héritage via une fonction constructeur
*/
function Client(nomClient, prenomClient, pseudoClient, numeroClient) {
    Personne.call(this, nomClient, prenomClient, pseudoClient)
    this.numeroClient = numeroClient;
    this.getInfos = function() {
        return this.numeroClient + ' ' + this.getNomComplet()
    }
}

var steve = new Client('steve', 'LUCAS', 'steve44', 'A01');
afficherPersonne(steve);

console.log(steve.numeroClient);
console.log(steve.getInfos());