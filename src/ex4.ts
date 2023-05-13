/* 
4. Crie as seguintes classes:
a. Crie uma classe chamada Universidade, que terá como
atributos: nome e local. Além disso, deve possuir um método
construtor e métodos para encapsulamento dos seus
atributos.
b. Uma classe chamada Pessoa, com os atributos: nome e data
de nascimento (que pode ser String). Assim como na outra
classe, crie um método construtor e métodos para
encapsulamento de seus atributos.
c. Cada pessoa poderá estar associada a uma universidade.
d. A classe pessoa deve possuir um método que informe seus
atributos e a universidade em que trabalha.
 */

export class Universidade {
  constructor(protected nomeUniversidade: string, protected local: string) {}

  public getNomeUniversidade() {
    return this.nomeUniversidade;
  }

  public getLocal() {
    return this.local;
  }
}

export class Pessoa {
  constructor(
    protected nomePessoa: string,
    protected dataNasc: string,
    protected universidade?: Universidade
  ) {}

  public getNomePessoa() {
    return this.nomePessoa;
  }

  public getDataNasc() {
    return this.dataNasc;
  }

  public setUniversidade(universidade: Universidade) {
    this.universidade = universidade;
  }

  public informacoes(): void {
    console.log(`Nome: ${this.nomePessoa}`);
    console.log(`Data nascimento: ${this.dataNasc}`);

    if (this.universidade) {
      console.log(`Universidade: ${this.universidade.getNomeUniversidade()}`);
      console.log(`Local: ${this.universidade.getLocal()}\n\n`);
    } else {
      console.log(`${this.nomePessoa} ainda nao esta na faculdade\n\n`);
    }
  }
}
