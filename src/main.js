const memoria = [];

function Operar() {
  const nomUsuari = document.getElementById("nomUsuari").value;
  const operand1 = document.getElementById("operand1").value;
  const operand2 = document.getElementById("operand2").value;
  const operand3 = document.getElementById("operand3").value;

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
    // Si algun operand és alfanumèric, concatena
    resultat = operand1.toString() + operand2.toString() + operand3.toString();
  }

  // Comprova si aquesta operació ja s'ha realitzat anteriorment
  const operacioAnterior = memoria.find(
    (entry) => entry.operands === `${operand1},${operand2},${operand3}`
  );

  // Emmagatzema l'operació i l'usuari en l'historial
  memoria.push({
    nomUsuari: nomUsuari,
    operands: `${operand1},${operand2},${operand3}`,
    resultat: resultat,
  });

  // Mostra el resultat
  const resultatElement = document.getElementById("resultat");
  resultatElement.textContent = `Resultat: ${resultat}`;

  // Si l'operació ja s'ha realitzat abans, mostra l'usuari anterior
  if (operacioAnterior) {
    resultatElement.textContent += ` (Realitzat anteriorment per ${operacioAnterior.nomUsuari})`;
  }
}
