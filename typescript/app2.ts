import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';

/*criar carros*/

let carroA = new Carro("Dodge Journey", 4);
let carroB = new Carro("Veloster", 3);
let carroC = new Carro("Cerato", 4);

// montar a lista de carros

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Av. Paulista", listaDeCarros);

//exibir lista de carros

// console.log(concessionaria.mostrarListaDeCarros());

// comprar o carro

let cliente = new Pessoa("João", "Veloster");

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comprar carro
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());