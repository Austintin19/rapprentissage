const person = {
    nom : "Alex",
    prenom : "Alexoda",
    Sexe : "Homme",
    dateTime : Date(),
    nomcomplet : function() {
        return this.nom +" "+ this.prenom + " " + this.dateTime ;
    }
}
const pris  = document.querySelector('.Alex');
const lui = person.dateTime;
function heure(){
    pris.innerHTML = lui;
}

function heur(){
    pris.remove();
}