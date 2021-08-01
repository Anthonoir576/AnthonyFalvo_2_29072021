// CONSTANTES ET VARIABLES
const onglets = document.querySelectorAll('.nav-link');
let data;


// FONCTION ET LISTENER

// Boucle qui parcours tous les onglets aillant la classe nav-link
onglets.forEach(onglet => {

    // A l'écoute du click
    onglet.addEventListener('click', () => {

        // Vérifie si l'onglet cliqué n'as pas déjà la classe active
        if (onglet.classList.contains('active')) {

            // retourne rien
            return;    

        } else {

            // Sinon l'ajoute
            onglet.classList.add('active');

        }

        // data rajouter en HTML 
        data = onglet.getAttribute('data-onglets');

        // Boucle qui vérifie avec la condition if, que l'attribut et different, si il l'es, il supprimera la classe active de cette élément.
        for (let i = 0; i < onglets.length; i++) {

            if (onglets[i].getAttribute('data-onglets') != data) {

                onglets[i].classList.remove('active')

            }

        }

    })

});



