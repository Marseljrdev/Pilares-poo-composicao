/* 
2. Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.
 */

export class Imovel {
  constructor(protected _endereco: string, public preco: number) {}

  public getPreco() {
    return this.preco;
  }

  //getter
  public get endereco() {
    return this._endereco;
  }

  //setter
  public set endereco(novoEndereco: string) {
    this._endereco = novoEndereco;
  }

  public getEndereco() {
    return this._endereco;
  }

  public imprimirValor(desconto?: number) {
    console.log(
      `O valor do imovel é: R$ ${(this.preco - (desconto ?? 0)).toFixed(2)}`
    );
  }
}

export class Novo extends Imovel {
  constructor(endereco: string, preco: number, public precoAdicional: number) {
    super(endereco, preco);
  }

  public imprimirValor(): void {
    super.imprimirValor(-this.precoAdicional);
  }
}

export class Velho extends Imovel {
  constructor(endereco: string, preco: number, public precoDesconto: number) {
    super(endereco, preco);
  }

  public imprimirValor(): void {
    super.imprimirValor(this.precoDesconto);
  }
}
