document.getElementById("monFormulaire").addEventListener("submit", function(event) {

    // Empêche le rechargement de la page
    event.preventDefault();

    // Affiche la page de remerciement
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
            <h1>thx</h1>
            <button id="finExperience">
                end exp
            </button>
        </div>
    `;

    // Gestion du bouton final
    document.getElementById("finExperience").addEventListener("click", function() {

        document.body.innerHTML = "";
        document.body.style.backgroundColor = "red";

    });

});
