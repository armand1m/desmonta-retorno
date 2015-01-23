var Table = require('cli-table');

function TraillerArquivo(linha) {
	this.codComp = linha.substring(0, 3);
	this.loteServico = linha.substring(3, 7);
	this.tipoRegistro = linha.substring(7, 8);
	this.qtdLotes = linha.substring(17, 23);
	this.qtdRegistros = linha.substring(23, 29);
	this.qtdContas = linha.substring(29, 35);
	this.print();
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