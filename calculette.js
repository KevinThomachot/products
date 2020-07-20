function calculer() {
    let valeur1 = document.getElementById("output").value;
    let valeur2 = eval(valeur1);
    document.getElementById("output").value = valeur2;
}

function afficher (val) {
    document.getElementById("output").value+=val
}

function effacer () {
    document.getElementById("output").value = "";
}