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
	console.log("{------- TRAILLER ARQUIVO -------}");
	console.log("|| Codigo de Compensação: " + this.codComp);
	console.log("|| Lote de Serviço: " + this.loteServico);
	console.log("|| Tipo de Registro: " + this.tipoRegistro);
	console.log("|| Quantidade de Lotes: " + this.qtdLotes);
	console.log("|| Quantidade de Registros: " + this.qtdRegistros);
	console.log("|| Quantidade de Contas: " + this.qtdContas);
	console.log("{------- FIM TRAILLER ARQUIVO -------}");
};

module.exports = TraillerArquivo;