var Table = require('cli-table');

function HeaderLote(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.tipoOperacao = linha.substring(8, 9);
	this.tipoServico = linha.substring(9, 11);
	this.numVersaoLayout = linha.substring(13, 16);
	this.tipoCpfCnpj = linha.substring(17, 18);
	this.numCpfCnpj = linha.substring(18, 33);
	this.numConvenio = linha.substring(33, 53);
	this.numAgencia = linha.substring(53, 58);
	this.digAgencia = linha.substring(58, 59);
	this.numContaCorrente = linha.substring(59, 71);
	this.digContaCorrente = linha.substring(71, 72);
	this.digAgenciaConta = linha.substring(72, 73);
	this.nomeEmpresa = linha.substring(73, 103);
	this.mensagem1 = linha.substring(103, 143);
	this.mensagem2 = linha.substring(143, 183);
	this.numRemessaRetorno = linha.substring(183, 191);
	this.dataGravacao = linha.substring(191, 199);
	this.dataCredito = linha.substring(199, 207);
	this.printTable();
};

HeaderLote.prototype.printTable = function() {
	var table = new Table({ head: ['Header de Lote'] });

	table.push(	
		["Lote de Serviço: ", this.loteServico],
		["Tipo de Registro: ", this.tipoRegistro],
		["Tipo de Operação: ", this.tipoOperacao],
		["Tipo de Serviço: ", this.tipoServico],
		["Numero de Versao Layout: ", this.numVersaoLayout],
		["Tipo CPF/CNPJ: ", this.tipoCpfCnpj],
		["Numero CPF/CNPJ: ", this.numCpfCnpj],
		["Numero Convenio: ", this.numConvenio],
		["Numero Agencia: ", this.numAgencia],
		["Digito Agencia: ", this.digAgencia],
		["Numero Conta Corrente: ", this.numContaCorrente],
		["Digito Conta Corrente: ", this.digContaCorrente],
		["Digito Agencia/Conta: ", this.digAgenciaConta],
		["Nome da Empresa: ", this.nomeEmpresa],
		["Mensagem 1: ", this.mensagem1],
		["Mensagem 2: ", this.mensagem2],
		["Numero de Remessa/Retorno: ", this.numRemessaRetorno],
		["Data de Gravação: ", this.dataGravacao],
		["Data de Crédito: ", this.dataCredito]
	);

	console.log(table.toString());
};

module.exports = HeaderLote;