var Table = require('cli-table');

function SegmentoU(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.numRegistro = linha.substring(8, 13);
	this.codSegmento = linha.substring(13, 14);
	this.codMovimento = linha.substring(15, 17);
	this.acrescimos = linha.substring(17, 32);
	this.vlDesconto = linha.substring(32, 47);
	this.vlAbatimento = linha.substring(47, 62);
	this.vlIOF = linha.substring(62, 77);
	this.vlPago = linha.substring(77, 92);
	this.vlLiquido = linha.substring(92, 107);
	this.vlDespesasCedente = linha.substring(107, 122);
	this.vlCreditosCedente = linha.substring(122, 137);
	this.dataOcorrenciaCedente = linha.substring(137, 145);
	this.dataEfetivacaoCreditoCedente = linha.substring(145, 153);
	this.codOcorrenciaSacado = linha.substring(153, 157);
	this.dataOcorrenciaSacado = linha.substring(157, 165);
	this.vlOcorrenciaSacado = linha.substring(165, 180);
	this.complementoOcorrenciaSacado = linha.substring(180, 210);
	this.codBancoCorrespondente = linha.substring(210, 213);
	this.nossoNumeroBancoCorrespondente = linha.substring(213, 233);
	this.printTable();
};

SegmentoU.prototype.printTable = function() {
	var table = new Table({ head: ['Segmento U'] });

	table.push(	
		["Código de Compensação: ", this.codComp],
		["Lote de Serviço: ", this.loteServico],
		["Tipo de Registro: ", this.tipoRegistro],
		["Numero de Registro: ", this.numRegistro],
		["Codigo de Segmento: ", this.codSegmento],
		["Codigo de Movimento: ", this.codMovimento],
		["Acrescimos: ", this.acrescimos],
		["Desconto: ", this.vlDesconto],
		["Abatimento: ", this.vlAbatimento],
		["Valor IOF: ", this.vlIOF],
		["Valor Pago: ", this.vlPago],
		["Valor Liquido: ", this.vlLiquido],
		["Valor Despesa Cedente: ", this.vlDespesasCedente],
		["Valor Creditos Cedente: ", this.vlCreditosCedente],
		["Data Ocorrencia Cedente: ", this.dataOcorrenciaCedente],
		["Data Efetivacao Credito Cedente: ", this.dataEfetivacaoCreditoCedente],
		["Codigo Ocorrencia do Sacado: ", this.codOcorrenciaSacado],
		["Data de Ocorrencia do Sacado: ", this.dataOcorrenciaSacado],
		["Valor de Ocorrencia do Sacado: ", this.vlOcorrenciaSacado],
		["Complemento de Ocorrencia do Sacado: ", this.complementoOcorrenciaSacado],
		["Codigo do Banco Correspondente: ", this.codBancoCorrespondente],
		["Nosso Numero do Banco Correspondente: ", this.nossoNumeroBancoCorrespondente]
	);

	console.log(table.toString());
};

module.exports = SegmentoU;