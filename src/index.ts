import { Normal, Camarote, Vip } from "./ex1";
import { Imovel, Novo, Velho } from "./ex2";
import { Cachorro, Gato, Cavalo } from "./ex3";
import { Pessoa, Universidade } from "./ex4";
import { Departamento, PessoaDep, UniversidadeDep } from "./ex5";

function atividade1() {
  const ingressoNormal = new Normal(50);
  ingressoNormal.imprimirValor();

  const ingressoVip = new Vip(50, 250);
  ingressoVip.imprimirValor();

  const ingressoCamarote = new Camarote(50, 180);
  ingressoCamarote.imprimirValor();
}

// atividade1();

function atividade2() {
  const imovelNovo = new Novo("Rua 12 de outubro", 50000, 15000);
  imovelNovo.imprimirValor();
  console.log(`O endereco do imovel novo é: ${imovelNovo.getEndereco()}`);
  console.log("usando o getter", imovelNovo.endereco);
  //usando setter
  imovelNovo.endereco = "Novo dos novos";
  console.log("usando o setter ", imovelNovo.endereco);
  console.log(
    `O preço orignal do imovel novo sem adicional é de: R$ ${imovelNovo.getPreco()}\n\n`
  );

  const imovelVelho = new Velho("Avenida brasil", 260000, 80000);
  imovelVelho.imprimirValor();
  console.log(`O endereco do imovel velho é: ${imovelVelho.getEndereco()}`);
  console.log(
    `O preço orignal do imovel velho sem desconto é de: R$ ${imovelVelho.getPreco()}`
  );
}

// atividade2();

function atividade3() {
  const cachorro = new Cachorro("Margot", 8, "Bulldog");
  cachorro.emitirSom();
  cachorro.latir();
  console.log(
    `A raça de ${cachorro.getNome()} é ${cachorro.getRaca()} e tem ${cachorro.getIdade()} anos\n\n`
  );

  const cavalo = new Cavalo("Canada", 13, "Mangalarga-marchador");
  cavalo.emitirSom();
  cavalo.relinchar();
  console.log(
    `A raça de ${cavalo.getNome()} é ${cavalo.getRaca()} e tem ${cavalo.getIdade()} anos\n\n`
  );

  const gato = new Gato("Lucido", 7, "Vira-lata");
  gato.emitirSom();
  gato.miar();
  console.log(
    `A raça de ${gato.getNome()} é ${gato.getRaca()} e tem ${gato.getIdade()} anos`
  );
}

// atividade3();

function atividade4() {
  const universidade = new Universidade("Estacio", "Salvador");

  const pessoa = new Pessoa("Marsel", "25/081997");
  pessoa.setUniversidade(universidade);
  pessoa.informacoes();

  const pessoa2 = new Pessoa("Caique", "15/10/200");
  pessoa2.informacoes();
}

// atividade4();

function atividade5() {
  const departamento1 = new Departamento("Departamento juridico");
  const departamento2 = new Departamento("Departamento esportivo");

  const universidade = new UniversidadeDep("Estacio");
  universidade.adicionarDepartamento(departamento1);
  universidade.adicionarDepartamento(departamento2);
  universidade.listarDepartamentos();

  const pessoa1 = new PessoaDep("Marsel", "25/08/1997");
  const departamentoAtual = new Departamento("Departamento atual");
  pessoa1.departamento = departamentoAtual;
  pessoa1.informacoesDep();
}
atividade5();
