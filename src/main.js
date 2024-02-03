// Constant per guardar els resultats introduits per cada usuari en memòria
const memoria = [];

function Operar() {
  // Creació de totes les variables principals y les extreu de les dades introduides per l'usuari
  const nomUsuari = document.getElementById("nomUsuari").value;
  const operand1 = document.getElementById("operand1").value;
  const operand2 = document.getElementById("operand2").value;
  const operand3 = document.getElementById("operand3").value;

  // Comprova que s'hagi introduit alguna dada a l'Operand 1 i 2
  if (!operand1 || !operand2) {
    alert("Operand_1 i Operand_2 són obligatoris.");
    return;
  }

  let resultat;

  // Si tots els operands són valors numèrics, realitza la suma d'aquests
  if (!isNaN(operand1) && !isNaN(operand2) && !isNaN(operand3)) {
    resultat =
      parseFloat(operand1) + parseFloat(operand2) + parseFloat(operand3);
  } else {
    // concatena el resultat en el cas que els valors introduits siguin alfanumèrics
    resultat = operand1.toString() + operand2.toString() + operand3.toString();
  }

  // Comprovació de que aquesta operació s'hagi realitzat anteriorment
  const operacioAnterior = memoria.find(
    (entry) => entry.operands === `${operand1},${operand2},${operand3}`
  );

  // Emmagatzema l'usuari introduit, la operació i el resultat en la memòria
  memoria.push({
    nomUsuari: nomUsuari,
    operands: `${operand1},${operand2},${operand3}`,
    resultat: resultat,
  });

  // Mostra el resultat per pantalla
  const resultatElement = document.getElementById("resultat");
  resultatElement.textContent = `Resultat: ${resultat}`;

  // En el cas que l'operació ja s'ha realitzat anteriorment, mostra l'usuari que l'ha realitzat
  if (operacioAnterior) {
    resultatElement.textContent += ` (Realitzat anteriorment per ${operacioAnterior.nomUsuari})`;
  }
}
