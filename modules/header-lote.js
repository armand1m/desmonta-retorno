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
	this.print();
};

HeaderLote.prototype.print = function() {
	console.log("{------- HEADER DE LOTE -------}"); 
	console.log("|| Código de Compensação: " + this.codComp);
	console.log("|| Lote de Serviço: " + this.loteServico);
	console.log("|| Tipo de Registro: " + this.tipoRegistro);
	console.log("|| Tipo de Operação: " + this.tipoOperacao);
	console.log("|| Tipo de Serviço: " + this.tipoServico);
	console.log("|| Numero de Versao Layout: " + this.numVersaoLayout);
	console.log("|| Tipo CPF/CNPJ: " + this.tipoCpfCnpj);
	console.log("|| Numero CPF/CNPJ: " + this.numCpfCnpj);
	console.log("|| Numero Convenio: " + this.numConvenio);
	console.log("|| Numero Agencia: " + this.numAgencia);
	console.log("|| Digito Agencia: " + this.digAgencia);
	console.log("|| Numero Conta Corrente: " + this.numContaCorrente);
	console.log("|| Digito Conta Corrente: " + this.digContaCorrente);
	console.log("|| Digito Agencia/Conta: " + this.digAgenciaConta);
	console.log("|| Nome da Empresa: " + this.nomeEmpresa);
	console.log("|| Mensagem 1: " + this.mensagem1);
	console.log("|| Mensagem 2: " + this.mensagem2);
	console.log("|| Numero de Remessa/Retorno: " + this.numRemessaRetorno);
	console.log("|| Data de Gravação: " + this.dataGravacao);
	console.log("|| Data de Crédito: " + this.dataCredito);
	console.log("{------- FIM HEADER DE LOTE -------}\n")
};

module.exports = HeaderLote;