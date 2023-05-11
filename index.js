function InserirAluno() {
  var tabela = document.getElementById("Tabela");
  var Matrícula = prompt('Digite sua matrícula (somente números)');
  while (!/^\d+$/.test(Matrícula)) {
    Matrícula = prompt('Digite sua matrícula (somente números)');
  }
  var Nome = prompt('Digite o nome (somente letras)');
  while (!/^[A-Za-z]+$/.test(Nome)) {
    Nome = prompt('Digite o nome (somente letras)');
  }

  var Faltas = parseInt(prompt('Digite o número de faltas'));
  var NotaB1 = parseFloat(prompt('Digite a Nota do B1'));
  var NotaB2 = parseFloat(prompt('Digite a Nota do B2'));
  var Média = (NotaB1 + NotaB2) / 2;
  var NotaPR = parseFloat(prompt('Digite sua nota final'));
  var MédiaFinal = (Média + NotaPR) / 2;
  var Situação;

  if (Faltas > 20) {
    Situação = 'Reprovado'; 
    alert('Você foi reprovado');
  } else {
    if (Média >= 7) {
      Situação = 'Aprovado';
      alert('Você foi aprovado');
    } else {
      MédiaFinal = (NotaPR + Média) / 2;
      if (MédiaFinal > 5) {
        Situação = 'Aprovado';
        alert('Você foi aprovado');
      } else {
        Situação = 'Reprovado'; 
        alert('Você foi reprovado');
      }
    }
  }

  var novaLinha = tabela.insertRow(-1);
  novaLinha.insertCell(0).innerText = Matrícula;
  novaLinha.insertCell(1).innerText = Nome;
  novaLinha.insertCell(2).innerText = Faltas;
  novaLinha.insertCell(3).innerText = NotaB1;
  novaLinha.insertCell(4).innerText = NotaB2;
  novaLinha.insertCell(5).innerText = Média.toFixed(2);
  novaLinha.insertCell(6).innerText = NotaPR.toFixed(2);
  novaLinha.insertCell(7).innerText = MédiaFinal.toFixed(2);
  novaLinha.insertCell(8).innerText = Situação;
}