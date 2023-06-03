// Definition du tour du joueur

    // Déclarer une fonction tour du joueur 
    const turnOne = document.querySelector('.turn_one');
    const turnTwo = document.querySelector('.turn_two');

    let playerOne = true;
    let playerTwo = false;

     const turnPlayers = () => {
       if (getComputedStyle(turnOne).display != "none" && getComputedStyle(turnTwo).display == "none") {
            playerOne = (turnOne.style.display = "none") && false;
            playerTwo = (turnTwo.style.display = "inline") && true;
        } else {
            playerOne = (turnOne.style.display = "inline") && true;
            playerTwo = (turnTwo.style.display = "none") && false;
        }
     }

// Fonction pour Lancer les dés et affichet le résultat dans la case Points

    // Afficher le résultat && S’il obtient un 1, c’est la fin de son tour. A faire son score ROUND est perdu.
        const displayResult = () => {
            let numbersDecimal = (Math.random() * 6) + 1;
            let numbers = Math.floor(numbersDecimal);
            const result = numbers;
            const image = document.getElementById('dice');
            image.src = '/Dés/dé ' + result + '.png';

            const currentOne = document.getElementById('current_one');
            const currentTwo = document.getElementById('current_two');
                if (playerOne === true) {
                    currentOne.innerText = result;
                } else {
                    currentTwo.innerText = result;
                }
            
            if (result === 1) {
                turnPlayers();
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
            user_one.innerText = inputOne.value
            user_two.innerText = inputTwo.value
        })
            







