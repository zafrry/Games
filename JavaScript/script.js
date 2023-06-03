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

// Definition du tour du joueur

        // Déclarer une fonction tour du joueur 
        const turnOne = document.querySelector('.turn_one');
        const turnTwo = document.querySelector('.turn_two');

        const turnPlayers = () => {
            if (getComputedStyle(turnOne).display != "none" && getComputedStyle(turnTwo).display == "none") {
                turnOne.style.display = "none";
                turnTwo.style.display = "inline";
            } else {
                turnOne.style.display = "inline";
                turnTwo.style.display = "none";
            }
        }


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
            







