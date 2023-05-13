/* 
3. Dado o seguinte diagrama:
         animal
           |
cachorro-cavalo-gato    

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.
 */

export class Animal {
  constructor(
    protected nome: string,
    protected idade: number,
    protected raca: string
  ) {}

  public getIdade() {
    return this.idade;
  }

  public getRaca() {
    return this.raca;
  }

  public getNome() {
    return this.nome;
  }

  public emitirSom(): void {
    console.log(`O animal emitiu um som...`);
  }
}

export class Cachorro extends Animal {
  public latir(): void {
    console.log(`O cachorro ${this.nome} está latindo`);
  }
}
export class Cavalo extends Animal {
  public relinchar(): void {
    console.log(`O cavalo ${this.nome} está relinchando`);
  }
}
export class Gato extends Animal {
  public miar(): void {
    console.log(`O gato ${this.nome} está miando`);
  }
}
