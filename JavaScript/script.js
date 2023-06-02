// Fonction pour Lancer les dés

    // Donner un nombre aléatoir entre 1 et 6
        const throwDice = () => {
            let numbersDecimal = (Math.random() * 6) + 1;
            let numbers = Math.floor(numbersDecimal);
            return numbers;
        };

    // Afficher le résultat 
        const displayResult = () => {
            const result = throwDice();
            const image = document.getElementById('dice');
            image.src = '/Dés/dé ' + result + '.png';
        }; 

// Fonction Nouvelle Partie demande de choisir un identifiant

    // Créer des pop_up pour ecrire un identifiant
        const modal = document.querySelector('.modal');

        const startNewGame = () => {
            modal.classList.toggle('active');
        }

        const closePop = () => {







            
            modal.classList.toggle('disactive');
        }




