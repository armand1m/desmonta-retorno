if (process.argv.length < 3) {
	console.log('Usage: node ' + process.argv[1] + ' FILENAME' + "\n");
	process.exit(1);
}

var domain, fs, arquivo;

domain = require('domain').create();
fs = require('fs');
arquivo = process.argv[2];

var HeaderArquivo 	= require('./modules/header-arquivo')
,	HeaderLote 		= require('./modules/header-lote')
,	SegmentoT 		= require('./modules/segmento-t')
,	SegmentoU 		= require('./modules/segmento-u')
,	TraillerLote 	= require('./modules/trailler-lote')
,	TraillerArquivo = require('./modules/trailler-arquivo');

domain.on('error', function(error) {
	console.error(':/ Alguma coisa deu errado..' + "\n" + error.message);
});

domain.run(function() {
	var file, linhas;
	
	file = fs.readFileSync(arquivo);
	linhas = file.toString().split("\n");


	linhas.forEach(function(linha) {
		var tipoRegistro, registro;
		tipoRegistro = linha.substring(7, 8);

		switch(parseInt(tipoRegistro)) {
			case 0:
				registro = new HeaderArquivo(); 
				registro.parseLinha(linha)
				registro.print(); 
				break;
			case 1: 
				registro = new HeaderLote(); 
				registro.parseLinha(linha);
				registro.print();
				break;
			case 3:
				var tipoSegmento, segmento;
				tipoSegmento = linha.substring(13, 14);

				switch (tipoSegmento) {
					case "T": 
						segmento = new SegmentoT();
						segmento.parseLinha(linha);
						segmento.print();
						break;
					
					case "U": 
						segmento = new SegmentoU(); 
						segmento.parseLinha(linha);
						segmento.print();
						break;
					
					default: console.warn("Outro tipo de segmento encontrado. Não pode ser desmontado.");
				}
				break;
			case 5: 
				registro = new TraillerLote();
				registro.parseLinha(linha);
				registro.print(); 
				break;
			case 9: 
				registro = new TraillerArquivo();
				registro.parseLinha(linha);
				registro.print();
				break;
		}
	});
});