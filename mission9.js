function charger() {
    function longueur(nombre, longueur) {
        var str = nombre.toString();
        while (str.length < longueur) {
            str = '0' + str;
        }
        return str;
    }

    var jour = longueur(Math.floor(Math.random() * 31) + 1, 2);
    var mois = longueur(Math.floor(Math.random() * 12) + 1, 2);
    var annee = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;

    var dateFacture = jour + '/' + mois + '/' + annee;

    var numeroFacture = longueur(Math.floor(Math.random() * 100000000), 9);

    document.getElementById('date_facture').innerText = dateFacture;
    document.getElementById('numero_facture').innerText = numeroFacture;
}

function ajouterLigne() {
    var lastRow = document.getElementById('tbody').rows.length - 1;
    var templateRow = document.getElementById('modeleLigne');
    var newRow = templateRow.cloneNode(true);

    document.getElementById('tbody').insertBefore(newRow, document.getElementById('lastLigne'));
}

function Calculer() {
    var total = 0;

    var listePrix = document.getElementsByClassName("prix");
    var listQuantite = document.getElementsByClassName("quantite");
    var listeTotal = document.getElementsByClassName("total");

    var remise = parseFloat(document.getElementById("remise").value) || 0;
    var imposition = parseFloat(document.getElementById("taxe").value) || 0;
    var expedition = parseFloat(document.getElementById("expedition").value) || 0;

    for (var i = 0; i < listePrix.length; i++) {
        var totalLigne = parseFloat(listQuantite[i].value) * parseFloat(listePrix[i].value);
        listeTotal[i].innerText = totalLigne.toFixed(2);
        total += totalLigne;
    }

    var sous_total = total;
    document.getElementById("sous_total").innerText = sous_total.toFixed(2) + " €";

    var sous_total_remise = (sous_total - remise);
    document.getElementById("sous_total_remise").innerText = sous_total_remise.toFixed(2) + " €";

    var taxe_total = (sous_total * (imposition / 100));
    document.getElementById("taxe_total").innerHTML = taxe_total.toFixed(2);

    var solde_total = sous_total_remise + taxe_total + expedition;
    document.getElementById("solde_total").innerHTML = solde_total.toFixed(2);
}

function genererContenu() {
    var tabDesc = ["Product A", "Product B", "Product C", "Product D"];
    var tbody = document.getElementById("tbody");
    var rows = tbody.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cells = row.getElementsByTagName("td");

        const quantite = Math.floor(50 * Math.random() + 1);
        const prix = (Math.floor(10000 * Math.random() + 1) / 100).toFixed(2);

        cells[0].getElementsByTagName("input")[0].value = tabDesc[Math.floor(Math.random() * tabDesc.length)];
        cells[1].getElementsByTagName("input")[0].value = quantite;
        cells[2].getElementsByTagName("input")[0].value = prix;
    }
    Calculer();
}