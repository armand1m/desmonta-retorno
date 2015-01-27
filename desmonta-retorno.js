var HeaderArquivo 	= require('./modules/header-arquivo')
,	HeaderLote 		= require('./modules/header-lote')
,	RegistroDetalhe = require('./modules/registro-detalhe')
,	TraillerLote 	= require('./modules/trailler-lote')
,	TraillerArquivo = require('./modules/trailler-arquivo');

const HEADER_ARQUIVO 	= 0
,	  HEADER_LOTE 		= 1
,	  REGISTRO_DETALHE 	= 3
,	  TRAILLER_LOTE 	= 5
,	  TRAILLER_ARQUIVO 	= 9;

var app = {
	hasParams: process.argv.length > 3,
	hasMinParams: process.argv.length >= 3
};

app.execute = function() {
	this.validarParametros();
	
	this.linhas = require('fs').readFileSync(process.argv[2]).toString().split("\n");
	this.linhas.pop();

	if (this.hasParams) 
		this.processarParams(); 
	else 
		this.linhas.forEach(this.processaLinha);
}

app.validarParametros = function() {
	if(!this.hasMinParams) {
		console.log('Usage: node ' + process.argv[1] + ' FILENAME');
		process.exit(1);		
	}
};

app.processaLinha = function(linha, index, array) {
	var tipoRegistro = linha.substring(7,8)
	, 	registro;

	switch(parseInt(tipoRegistro)) {
		case HEADER_ARQUIVO: 	registro = new HeaderArquivo();  break;
		case HEADER_LOTE: 		registro = new HeaderLote(); break;
		case REGISTRO_DETALHE: 	registro = new RegistroDetalhe(); break;
		case TRAILLER_LOTE: 	registro = new TraillerLote(); break;
		case TRAILLER_ARQUIVO: 	registro = new TraillerArquivo(); break;
	}

	if(registro != null) {
		registro.parseLinha(linha);

		if(parseInt(tipoRegistro) != REGISTRO_DETALHE)
			registro.print();
	}
};

app.processarParams = function() {
	if (!this.hasParams)
		throw new Error("A função 'processaParams' precisa de paramêtros para funcionar.");

	var params = process.argv.splice(3, 2)
	,	linhas = this.linhas;

	params.forEach(function (param) {
		linhas.forEach(function (linha) {
			var tipoRegistro = linha.substring(7,8);

			switch(param) {
				case "--ha": case "--header-arquivo": 
					if (tipoRegistro == HEADER_ARQUIVO) app.processaLinha(linha);
					break;
				case "--hl": case "--header-lote": 
					if (tipoRegistro == HEADER_LOTE) app.processaLinha(linha);
					break;
				case "--rd": case "--registro-detalhe":
					if (tipoRegistro == REGISTRO_DETALHE) app.processaLinha(linha);
					break;
				case "--tl": case "--trailler-lote": 
					if (tipoRegistro == TRAILLER_LOTE) app.processaLinha(linha);
					break;
				case "--ta": case "--trailler-arquivo": 
					if (tipoRegistro == TRAILLER_ARQUIVO) app.processaLinha(linha);
					break;
				default: 
					throw new Error("illegal option: " + param);
			}
		});
	});
};

var domain 	= require('domain').create();

domain.on('error', function(error) {
	console.error('Alguma coisa deu errado..' + "\n" + error.message);
});

domain.run(function() {
	app.execute();
});