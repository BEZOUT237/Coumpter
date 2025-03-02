let compteur = 0;

    function diminuer(){
        compteur = compteur - 1;
        document.getElementById('compteur').innerHTML = compteur;
    }
    function ajouter(){
            compteur = compteur + 1;
            document.getElementById('compteur').innerHTML = compteur;
}