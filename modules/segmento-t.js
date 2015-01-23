var Table = require('cli-table');

function SegmentoT(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.numRegistro = linha.substring(8, 13);
	this.codSegmento = linha.substring(13, 14);
	this.codMovimento = linha.substring(15, 17);
	this.numAgencia = linha.substring(17, 22);
	this.digAgencia = linha.substring(22, 23);
	this.numContaCorrente = linha.substring(23, 35);
	this.digContaCorrente = linha.substring(35, 36);
	this.digAgenciaConta = linha.substring(36, 37);
	this.nossoNumero = linha.substring(37, 57);
	this.codCarteira = linha.substring(57, 58);
	this.numDocumento = linha.substring(58, 73);
	this.dataVencimento = linha.substring(73, 81);
	this.vlTitulo = linha.substring(81, 96);
	this.numBancoCobrador = linha.substring(96, 99);
	this.numAgenciaCobradora = linha.substring(99, 104);
	this.digAgenciaCobradora = linha.substring(104, 105);
	this.usoEmpresa = linha.substring(105, 130);
	this.codMoeda = linha.substring(130, 132);
	this.tipoInscricaoSacado = linha.substring(132, 133);
	this.numInscricaoSacado = linha.substring(133, 148);
	this.nomeSacado = linha.substring(148, 188);
	this.numContrato = linha.substring(188, 198);
	this.vlTarifa = linha.substring(198, 213);
	this.motivoOcorrencia = linha.substring(213, 223);
	this.print();
};

SegmentoT.prototype.print = function() {
	var table = new Table({ head: ['Segmento T'] });

	table.push(	
		["Código de Compensação: ", this.codComp],
		["Lote de Serviço: ", this.loteServico],
		["Tipo de Registro: ", this.tipoRegistro],
		["Numero do Registro: ", this.numRegistro],
		["Codigo do Segmento: ", this.codSegmento],
		["Codigo de Movimento: ", this.codMovimento],
		["Numero da Agencia: ", this.numAgencia],
		["Digito da Agencia: ", this.digAgencia],
		["Numero da Conta Corrente: ", this.numContaCorrente],
		["Digito da Conta Corrente: ", this.digContaCorrente],
		["Digito da Agencia/Conta: ", this.digAgenciaConta],
		["Nosso Numero: ", this.nossoNumero],
		["Codigo da Carteira: ", this.codCarteira],
		["Numero do Documento: ", this.numDocumento],
		["Data de Vencimento: ", this.dataVencimento],
		["Valor do Titulo: ", this.vlTitulo],
		["Numero do Banco Cobrador: ", this.numBancoCobrador],
		["Numero da Agencia Cobradora: ", this.numAgenciaCobradora],
		["Digito da Agencia Cobradora: ", this.digAgenciaCobradora],
		["Uso Empresa: ", this.usoEmpresa],
		["Codigo de Moeda: ", this.codMoeda],
		["Tipo de Inscricao do Sacado: ", this.tipoInscricaoSacado],
		["Numero de Inscricao do Sacado: ", this.numInscricaoSacado],
		["Nome do Sacado: ", this.nomeSacado],
		["Numero do Contrato: ", this.numContrato],
		["Valor da Tarifa: ", this.vlTarifa],
		["Motivo de Ocorrencia: ", this.motivoOcorrencia]
	);

	console.log(table.toString());
};

module.exports = SegmentoT;