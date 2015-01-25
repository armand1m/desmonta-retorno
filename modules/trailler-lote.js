var Table = require('cli-table');

function TraillerLote() {
	this.codComp = null;
	this.loteServico = null;
	this.tipoRegistro = null;
	this.qtdRegistros = null;
	this.qtdTitulosCobrancaSimples = null;
	this.vlTitulosCobrancaSimples = null;
	this.qtdTitulosCobrancaVinculada = null;
	this.vlTitulosCobrancaVinculada = null;
	this.qtdTitulosCobrancaCaucionada = null;
	this.vlTitulosCobrancaCaucionada = null;
	this.qtdTitulosCobrancaDescontada = null;
	this.vlTitulosCobrancaDescontada = null;
	this.numAviso = null;
};

TraillerLote.prototype.parseLinha = function(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.qtdRegistros = linha.substring(17, 23);
	this.qtdTitulosCobrancaSimples = linha.substring(23, 29);
	this.vlTitulosCobrancaSimples = linha.substring(29, 46);
	this.qtdTitulosCobrancaVinculada = linha.substring(46, 52);
	this.vlTitulosCobrancaVinculada = linha.substring(52, 69);
	this.qtdTitulosCobrancaCaucionada = linha.substring(69, 75);
	this.vlTitulosCobrancaCaucionada = linha.substring(75, 92);
	this.qtdTitulosCobrancaDescontada = linha.substring(92, 98);
	this.vlTitulosCobrancaDescontada = linha.substring(98, 115);
	this.numAviso = linha.substring(115, 123);
};

TraillerLote.prototype.print = function() {
	var table = new Table({ head: ['Trailler de Lote'] });

	table.push(
		["Código de Compensação: ", this.codComp],
		["Lote de Serviço: ", this.loteServico],
		["Tipo de Registro: ", this.tipoRegistro],
		["Quantidade de Registros: ", this.qtdRegistros],
		["Quantidade de Titulos Cobranca Simples: ", this.qtdTitulosCobrancaSimples],
		["Valor Titulos Cobranca Simples: ", this.vlTitulosCobrancaSimples],
		["Quantidade Titulos Cobranca Vinculada: ", this.qtdTitulosCobrancaVinculada],
		["Valor Titulos Cobranca Vinculada: ", this.vlTitulosCobrancaVinculada],
		["Quantidade Titulos Cobranca Caucionada: ", this.qtdTitulosCobrancaCaucionada],
		["Valor Titulos Cobranca Caucionada: ", this.vlTitulosCobrancaCaucionada],
		["Quantidade Titulos Cobranca Descontada: ", this.qtdTitulosCobrancaDescontada],
		["Quantidade Titulos Cobranca Descontada: ", this.vlTitulosCobrancaDescontada],
		["Numero de Aviso: ", this.numAviso]
	);

	console.log(table.toString());
};

module.exports = TraillerLote;