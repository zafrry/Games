// Bouton Hold
    const turnOne = document.querySelector('.turn_one');
    const turnTwo = document.querySelector('.turn_two');

    const globalOne = document.getElementById('global_one');
    const globalTwo = document.getElementById('global_two');

    const userOne = document.getElementById('user_one');
    const userTwo = document.getElementById('user_two');

    const endMessage = document.getElementById('end_message');
    const winnerPopFermer = document.getElementById('fermer');
    const endGame = document.querySelector('.end_game');

    let playerOne = true;
    let playerTwo = false;

    let playerOneGlobalScore = 0;
    let playerTwoGlobalScore = 0;

    const turnPlayers = () => {
        // Permet de stocker le score
        if (playerOne === true) {
            playerOneGlobalScore += firstPlayer;
            firstPlayer = 0;
            currentOne.innerText = firstPlayer;
            globalOne.innerText = playerOneGlobalScore
        }
        if (playerTwo === true){
            playerTwoGlobalScore += secondPlayer;
            secondPlayer = 0;
            currentTwo.innerText = secondPlayer;
            globalTwo.innerText = playerTwoGlobalScore
        }

        // Regle pour ne pas dépasser 100 points
        if (playerOneGlobalScore > 100) {
            playerOneGlobalScore = 0;
            globalOne.innerText = playerOneGlobalScore
        };
        if (playerTwoGlobalScore > 100) {
            playerTwoGlobalScore= 0;
            globalTwo.innerText = playerTwoGlobalScore
        };

        // Permet de changer de joueur
        if (getComputedStyle(turnOne).display != "none" && getComputedStyle(turnTwo).display == "none") {
            playerOne = (turnOne.style.display = "none") && false;
            playerTwo = (turnTwo.style.display = "inline") && true;
        } else {
            playerOne = (turnOne.style.display = "inline") && true;
            playerTwo = (turnTwo.style.display = "none") && false;
        }

        // Affiche le winner
        if (playerOneGlobalScore === 100) {
            endGame.classList.toggle('active');
            endMessage.innerText = `${userOne} à gagner la partie`;
            winnerPopFermer.classList.toggle('active');
        } else if (playerTwoGlobalScore === 100) {
            endGame.classList.toggle('active');
            endMessage.innerText = `${userTwo} à gagner la partie`;
            winnerPopFermer.classList.toggle('active');
        }
    }

// Bouton Dés

    const currentOne = document.getElementById('current_one');
    const currentTwo = document.getElementById('current_two');

    let secondPlayer = 0;
    let firstPlayer = 0;

   
    const displayResult = () => {
        // Calcul et renvoie un chiffre aléatoire entre 1 à 6
        let numbersDecimal = (Math.random() * 6) + 1;
        let numbers = Math.floor(numbersDecimal);
        const result = numbers;
        const image = document.getElementById('dice');
        image.src = '/Dés/dé ' + result + '.png';
        // Affiche le résultat dans la case POINTS
            if (playerOne === true) {
                secondPlayer = 0;
                currentTwo.innerText = secondPlayer;
                firstPlayer += result;
                currentOne.innerText = firstPlayer;
            } else {
                firstPlayer = 0;
                currentOne.innerText = firstPlayer;
                secondPlayer += result;
                currentTwo.innerText = secondPlayer;
            };
            // Si le score est équivaut à 1 les points sont perdu et c'est le joueur suivant qui joue
            if (result === 1) {
                if (getComputedStyle(turnOne).display != "none" && getComputedStyle(turnTwo).display == "none") {
                    playerOne = (turnOne.style.display = "none") && false;
                    firstPlayer = 0;
                    currentOne.innerText = firstPlayer;
                    playerTwo = (turnTwo.style.display = "inline") && true;
                } else {
                    playerOne = (turnOne.style.display = "inline") && true;
                    playerTwo = (turnTwo.style.display = "none") && false;
                    secondPlayer = 0;
                    currentTwo.innerText = secondPlayer;
                }
            }
    }; 

// Fonction Nouvelle Partie demande de choisir un identifiant

    // Créer des pop_up pour ecrire un identifiant
        const modal = document.querySelector('.modal');

        const startNewGame = () => {
            modal.classList.toggle('active');
        }

    // Validation des identifiants
        const inputOne = document.getElementById('one');
        const inputTwo = document.getElementById('two');

        const closePop = () => {
            if (inputOne.value === '' || inputTwo.value === '') {
                alert(`Vous n'avez pas saisie le nom des joueurs !`)
            }    
        }

        const btnValider = document.getElementById('valider');

        btnValider.addEventListener('click', () => {
            userOne.innerText = inputOne.value
            userTwo.innerText = inputTwo.value
        })
            







