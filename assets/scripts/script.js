// Récuperation des elements du DOM
// ********************************
const inputFirstname = document.getElementById('input-firstname');
const inputLastname = document.getElementById('input-lastname');

const inputNb1 = document.getElementById('input-nb1');
const inputNb2 = document.getElementById('input-nb2');
const inputNb3 = document.getElementById('input-nb3');
const inputNb4 = document.getElementById('input-nb4');
const inputNb5 = document.getElementById('input-nb5');

const btnCalc = document.querySelector('#btn-calcul');
const displayResult = document.querySelector('#display-result');

// Interaction avec l'evenement "click" du bouton
// **********************************************
btnCalc.addEventListener('click', () => {
    // - Recuperation du nom et prenom
    const firstname = inputFirstname.value;
    const lastname = inputLastname.value.toUpperCase();

    // - Recuperation les nombres
    const nb1 = parseFloat(inputNb1.value);
    const nb2 = parseFloat(inputNb2.value);
    const nb3 = parseFloat(inputNb3.value);
    const nb4 = parseFloat(inputNb4.value);
    const nb5 = parseFloat(inputNb5.value);

    // - Operation mathématique
    const result = (nb1 + nb2 + nb3 + nb4 + nb5) / 5;

    const resultRounded1 = Math.round(result * 10) / 10;
    const resultRounded2 = result.toFixed(1);

    // - Affichage du resultat
    displayResult.innerHTML = `${firstname} ${lastname} a obtenu une moyenne de ${resultRounded1} !`;

    // displayResult.innerHTML = firstname + ' ' + lastname + ' a obtenu une moyenne de ' + resultRounded1 + ' !';
})