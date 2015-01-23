function TraillerLote(linha) {
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
	this.print();
};

TraillerLote.prototype.print = function() {
	console.log("{------- TRAILLER LOTE -------}");
	console.log("|| Código de Compensação: " + this.codComp);
	console.log("|| Lote de Serviço: " + this.loteServico);
	console.log("|| Tipo de Registro: " + this.tipoRegistro);
	console.log("|| Quantidade de Registros: " + this.qtdRegistros);
	console.log("|| Quantidade de Titulos Cobranca Simples: " + this.qtdTitulosCobrancaSimples);
	console.log("|| Valor Titulos Cobranca Simples: " + this.vlTitulosCobrancaSimples);
	console.log("|| Quantidade Titulos Cobranca Vinculada: " + this.qtdTitulosCobrancaVinculada);
	console.log("|| Valor Titulos Cobranca Vinculada: " + this.vlTitulosCobrancaVinculada);
	console.log("|| Quantidade Titulos Cobranca Caucionada: " + this.qtdTitulosCobrancaCaucionada);
	console.log("|| Valor Titulos Cobranca Caucionada: " + this.vlTitulosCobrancaCaucionada);
	console.log("|| Quantidade Titulos Cobranca Descontada: " + this.qtdTitulosCobrancaDescontada);
	console.log("|| Quantidade Titulos Cobranca Descontada: " + this.vlTitulosCobrancaDescontada);
	console.log("|| Numero de Aviso: " + this.numAviso);
	console.log("{------- FIM TRAILLER LOTE -------}\n");
};

module.exports = TraillerLote;