
class Atleta {
  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }

  obterNumeroTotalDeNotas() {
    return this.notas.length;
  }

  ordenarNotas() {
    return [...this.notas].sort((a, b) => a - b);
  }

  notasValidas() {
    let ordenadas = this.ordenarNotas();
    return ordenadas.slice(1, ordenadas.length - 1);
  }

  mediaValida() {
    let validas = this.notasValidas();
    let soma = validas.reduce((acc, n) => acc + n, 0);
    return soma / validas.length;
  }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

// instanciar Atleta para cada item
const atletasInstancia = atletas.map(a => new Atleta(a.nome, a.notas));

// usar forEach em vez de for
atletasInstancia.forEach((atleta) => {
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
  console.log(`Notas Ordenadas: ${atleta.ordenarNotas().join(", ")}`);
  console.log(`Notas Válidas: ${atleta.notasValidas().join(", ")}`);
  console.log(`Média Válida: ${atleta.mediaValida().toFixed(2)}`);
  console.log("");
});