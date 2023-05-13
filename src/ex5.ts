/* 
5. Baseando-se na Atividade 1, crie uma classe Departamento, que
possui o atributo nome. A classe deve possuir um construtor e
métodos de encapsulamento. A Universidade deve estar composta
por vários departamentos. Adapte também a classe Pessoa para
que ela tenha uma referência ao Departamento onde trabalha, ou
seja, deve possuir uma associação com a classe Departamento.
 */

export class Departamento {
  constructor(public _nome: string) {}

  public get getNome() {
    return this._nome;
  }
}

export class UniversidadeDep {
  constructor(private nome: string, private departamentos: Departamento[] = []) {}

  public adicionarDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }

  public listarDepartamentos() {
    console.log(`Departamentos da ${this.nome}`);
    this.departamentos.forEach((item) => {
      console.log(item.getNome);
    });
  }
}

export class PessoaDep {
  constructor(
    private _nome: string,
    private _dataNasc: string,
    private _departamento?: Departamento
  ) {}

  public get getNomePessoa() {
    return this._nome;
  }

  public get dataNascPessoa() {
    return this._dataNasc;
  }

  public set departamento(novoDepartamento: Departamento) {
    this._departamento = novoDepartamento;
  }

  public informacoesDep(): void {
    console.log(`Nome: ${this._nome}`);
    console.log(`Data de Nascimento: ${this._dataNasc}`);

    if (this._departamento) {
      console.log(`Nome do departamento: ${this._departamento.getNome}`);
    } else {
      console.log(`Não esta trabalhando em nenhum departamneto`);
    }
  }
}
