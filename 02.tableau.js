var villes = new Array('nantes', 'paris', 'saint-nazaire', 'angers', 'le mans');

/*
forEach()
*/
villes.forEach(function(element) {
    console.log(element);
});

/*
every()
*/
var lettreADansToutesLesVilles = function(element) {
    return element.includes('a')
};
var resultat = villes.every(lettreADansToutesLesVilles);

console.log(resultat);

/*
some() 
*/
var auMoinsUneVilleAvecUnTiret = function(element) {
    return element.includes('-')
};


var resultat2 = villes.some(auMoinsUneVilleAvecUnTiret);
console.log(resultat2);

/*
filter() 
*/
var villesSansTiretSansEspace = function(element) {
    return !element.includes(' ') && !element.includes('-')

};
var resultat3 = villes.filter(villesSansTiretSansEspace);
console.log(resultat3);

/*
chainer les fonctions 
*/
var villesMajusculeSeTerminantParS = function(element) {
    return element.endsWith("s") && element.toUpperCase()
};

var resultat4 = villes.filter(villesMajusculeSeTerminantParS).map(villesMajusculeSeTerminantParS)
console.log(resultat4);