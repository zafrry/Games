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

    // Affecter un évenement lors du click sur le boutton 
        const diceButton = document.getElementById('throw');
        diceButton.addEventListener('click', displayResult);

// Fonction Nouvelle Partie demande de choisir un identifiant

    // Créer des pop_up pour ecrire un identifiant
        const modal = document.querySelector('.modal');
        const definePlayers = () => {
            modal.classList.toggle('active');
        };

        const closePopUp = document.getElementById('closePop');


        const startNewGame =  document.getElementById('nouvelle_partie');
        startNewGame.addEventListener('click', definePlayers);
        closePopUp.addEventListener('click', definePlayers);







