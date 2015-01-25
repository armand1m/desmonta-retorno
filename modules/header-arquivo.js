var Table = require('cli-table');

function HeaderArquivo() {
	this.codComp = null;
	this.loteServico = null;
	this.tipoRegistro = null;
	this.tipoCpfCnpj = null;
	this.numCpfCnpj = null;
	this.numConvenio = null;
	this.numAgencia = null;
	this.digAgencia = null;
	this.numContaCorrente = null;
	this.digContaCorrente = null;
	this.digAgenciaConta = null;
	this.nomeEmpresa = null;
	this.nomeBanco = null;
	this.codRemessaRetorno = null;
	this.dataGeracao = null;
	this.horaGeracao = null;
	this.numSequencial = null;
	this.numVersaoLayout = null;
	this.densidadeArquivo = null;
};

HeaderArquivo.prototype.parseLinha = function(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.tipoCpfCnpj = linha.substring(17, 18);
	this.numCpfCnpj = linha.substring(18, 32);
	this.numConvenio = linha.substring(32, 52);
	this.numAgencia = linha.substring(52, 57);
	this.digAgencia = linha.substring(57, 58);
	this.numContaCorrente = linha.substring(58, 70);
	this.digContaCorrente = linha.substring(70, 71);
	this.digAgenciaConta = linha.substring(71, 72);
	this.nomeEmpresa = linha.substring(72, 102);
	this.nomeBanco = linha.substring(102, 123);
	this.codRemessaRetorno = linha.substring(142, 143);
	this.dataGeracao = linha.substring(143, 151);
	this.horaGeracao = linha.substring(151, 157);
	this.numSequencial = linha.substring(157, 163);
	this.numVersaoLayout = linha.substring(163, 166);
	this.densidadeArquivo = linha.substring(166, 171);
};

HeaderArquivo.prototype.print = function() {
	var table = new Table({ head: ['Header de Arquivo'] });

	table.push(	
		["Codigo de Compensação: ", this.codComp],
		["Lote de Serviço: ", this.loteServico],
		["Tipo de Registro: ", this.tipoRegistro],
		["Tipo CPF/CNPJ: ", this.tipoCpfCnpj],
		["Numero CPF/CNPJ: ", this.numCpfCnpj],
		["Numero Convenio: ", this.numConvenio],
		["Numero Agencia: ", this.numAgencia],
		["Digito Agencia: ", this.digAgencia],
		["Numero Conta Corrente: ", this.numContaCorrente],
		["Digito Conta Corrente: ", this.digContaCorrente],
		["Digito Agencia/Conta: ", this.digAgenciaConta],
		["Nome da Empresa: ", this.nomeEmpresa],
		["Nome do Banco: ", this.nomeBanco],
		["Codigo de Remessa/Retorno: ", this.codRemessaRetorno],
		["Data de Geração: ", this.dataGeracao],
		["Hora da Geração: ", this.horaGeracao],
		["Numero Sequencial: ", this.numSequencial],
		["Numero Versao do Layout: ", this.numVersaoLayout],
		["Densidade de Arquivo: ", this.densidadeArquivo]
	);

	console.log(table.toString());
};

module.exports = HeaderArquivo;