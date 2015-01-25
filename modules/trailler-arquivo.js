var Table = require('cli-table');

function TraillerArquivo() {
	this.codComp = null;
	this.loteServico = null;
	this.tipoRegistro = null;
	this.qtdLotes = null;
	this.qtdRegistros = null;
	this.qtdContas = null;
};

TraillerArquivo.prototype.parseLinha = function(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.qtdLotes = linha.substring(17, 23);
	this.qtdRegistros = linha.substring(23, 29);
	this.qtdContas = linha.substring(29, 35);
};

TraillerArquivo.prototype.print = function() {
	var table = new Table({ head: ['Trailler de Arquivo'] });

	table.push(	
		["Codigo de Compensação: ", this.codComp],
		["Lote de Serviço: ", this.loteServico],
		["Tipo de Registro: ", this.tipoRegistro],
		["Quantidade de Lotes: ", this.qtdLotes],
		["Quantidade de Registros: ", this.qtdRegistros],
		["Quantidade de Contas: ", this.qtdContas]
	);

	console.log(table.toString());
};

module.exports = TraillerArquivo;