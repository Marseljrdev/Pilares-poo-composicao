/* 
1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()
a. crie uma classe Normal, que herda Ingresso..
b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.
c. crie uma classe Camarote, que herda ingresso e possui um
valor adicional. Altere o método imprimeValor para mostrar o
valor do ingresso somado com o adicional.
 */

export abstract class Ingresso {
  constructor(protected valor: number) {}

  imprimirValor() {
    console.log(`O valor do ingresso normal é: R$ ${this.valor.toFixed(2)}`);
  }
}

export class Normal extends Ingresso {}

export class Vip extends Ingresso {
  constructor(valor: number, private valorAdicional: number) {
    super(valor);
  }

  imprimirValor(): void {
    console.log(
      `O valor somado do vip com o normal é: R$ ${(
        this.valor + this.valorAdicional
      ).toFixed(2)}`
    );
  }
}

export class Camarote extends Ingresso {
  constructor(valor: number, private valorAdicional: number) {
    super(valor);
  }

  imprimirValor(): void {
    console.log(
      `O valor somado do camarote com o normal é: R$ ${(
        this.valor + this.valorAdicional
      ).toFixed(2)}`
    );
  }
}
