let nota1, nota2, nota3, promedio;

nota1 = parseInt(prompt("Dime una nota (0-10):"));
nota2 = parseInt(prompt("Dime una nota (0-10):"));
nota3 = parseInt(prompt("Dime una nota (0-10):"));

  promedio = (nota1 + nota2 + nota3) / 3;

  switch (true) {
    case (promedio < 3):
      alert("Muy Malito");
      break;
    case (promedio >= 3 && promedio < 5):
      alert("Regular");
      break;
    case (promedio >= 5 && promedio < 7):
      alert("Bien");
      break;
    case (promedio >= 7 && promedio < 9):
      alert("Muy Bien");
      break;
    case (promedio >= 9 && promedio <= 10):
      alert("Excelente");
      break;
    default:
      alert("Nota fuera de rango");
      break;
  }
