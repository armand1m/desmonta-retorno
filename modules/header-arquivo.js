function HeaderArquivo(linha) {
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
	this.print();
};

HeaderArquivo.prototype.print = function() {
	console.log("{------- HEADER DE ARQUIVO -------}"); 
	console.log("|| Codigo de Compensação: " + this.codComp);
	console.log("|| Lote de Serviço: " + this.loteServico);
	console.log("|| Tipo de Registro: " + this.tipoRegistro);
	console.log("|| Tipo CPF/CNPJ: " + this.tipoCpfCnpj);
	console.log("|| Numero CPF/CNPJ: " + this.numCpfCnpj);
	console.log("|| Numero Convenio: " + this.numConvenio);
	console.log("|| Numero Agencia: " + this.numAgencia);
	console.log("|| Digito Agencia: " + this.digAgencia);
	console.log("|| Numero Conta Corrente: " + this.numContaCorrente);
	console.log("|| Digito Conta Corrente: " + this.digContaCorrente);
	console.log("|| Digito Agencia/Conta: " + this.digAgenciaConta);
	console.log("|| Nome da Empresa: " + this.nomeEmpresa);
	console.log("|| Nome do Banco: " + this.nomeBanco);
	console.log("|| Codigo de Remessa/Retorno: " + this.codRemessaRetorno);
	console.log("|| Data de Geração: " + this.dataGeracao);
	console.log("|| Hora da Geração: " + this.horaGeracao);
	console.log("|| Numero Sequencial: " + this.numSequencial);
	console.log("|| Numero Versao do Layout: " + this.numVersaoLayout);
	console.log("|| Densidade de Arquivo: " + this.densidadeArquivo);
	console.log("{------- FIM HEADER DE ARQUIVO -------}\n");
};

module.exports = HeaderArquivo;