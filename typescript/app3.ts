import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Moto from './Moto';

let carro = new Carro("Veloster", 3);

let moto = new Moto();

let concessionaria = new Concessionaria("", []);

moto.acelerar();

console.log(carro, moto);

console.log(concessionaria.fornecerHorariosFuncionamento());

