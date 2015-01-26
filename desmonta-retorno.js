if (process.argv.length < 3) {
	console.log('Usage: node ' + process.argv[1] + ' FILENAME' + "\n");
	process.exit(1);
}

var arquivo = process.argv[2];

var domain 			= require('domain').create()
,	HeaderArquivo 	= require('./modules/header-arquivo')
,	HeaderLote 		= require('./modules/header-lote')
,	RegistroDetalhe = require('./modules/registro-detalhe')
,	TraillerLote 	= require('./modules/trailler-lote')
,	TraillerArquivo = require('./modules/trailler-arquivo');

const 	HEADER_ARQUIVO 	 = 0
,		HEADER_LOTE 	 = 1
,		REGISTRO_DETALHE = 3
,		TRAILLER_LOTE 	 = 5
,		TRAILLER_ARQUIVO = 9;

function processaLinha(linha, index, array) {
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

domain.on('error', function(error) {
	console.error(':/ Alguma coisa deu errado..' + "\n" + error.message);
});

domain.run(function() {
	var linhas = require('fs').readFileSync(arquivo).toString().split("\n");
	
	if (process.argv.length > 3) {
		var opts = process.argv.splice(3, 2);
		
		opts.forEach(function(param) {
			switch(param) {
				case "--ha": case "--header-arquivo": processaLinha(linhas[0]); break;
				case "--hl": case "--header-lote": processaLinha(linhas[1]); break;
				case "--rd": case "--registro-detalhe": break;
				case "--tl": case "--trailler-lote": break;
				case "--ta": case "--trailler-arquivo": break;
				default: console.error("illegal option: " + param);
			}
		});

		process.exit(1);
	}

	linhas.forEach(processaLinha);
});

