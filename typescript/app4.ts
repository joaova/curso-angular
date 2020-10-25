import { DAO } from './DAO';
// import { PessoaDAO } from './PessoaDAO';
import Concessionaria from './Concessionaria';
// import { ConcessionariaDAO } from './ConcessionariaDAO';
import Pessoa from './Pessoa';


// let dao: ConcessionariaDAO = new ConcessionariaDAO();
let concessionaria = new Concessionaria("", []);

// dao.inserir(concessionaria);

// let dao2: PessoaDAO = new PessoaDAO();
let pessoa: Pessoa = new Pessoa("","");

// dao2.atualizar(pessoa);

let dao3: DAO<Concessionaria> = new DAO<Concessionaria>();
let dao4: DAO<Pessoa> = new DAO<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(5);