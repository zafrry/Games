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

    // Créer des pop pour ecrire un identifiant
        const definePlayers = () => {
            window.prompt('click', (e) => {
                document.getElementById('pop_up').style.display = 'block';
            }) 
        };

        const startNewGame =  document.getElementById('nouvelle_partie');
        startNewGame.addEventListener('click', definePlayers);





