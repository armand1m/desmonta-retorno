if (process.argv.length < 3) {
	console.log('Usage: node ' + process.argv[1] + ' FILENAME');
	process.exit(1);
}

var fs = require('fs'),
	arquivo = process.argv[2];

var linhas = fs.readFileSync(arquivo).toString().split('\n');

var HeaderArquivo 	= require('./modules/header-arquivo'),
	HeaderLote 		= require('./modules/header-lote'),
	SegmentoT 		= require('./modules/segmento-t'),
	SegmentoU 		= require('./modules/segmento-u'),
	TraillerLote 	= require('./modules/trailler-lote'),
	TraillerArquivo = require('./modules/trailler-arquivo');

linhas.forEach(function(linha) {
	var tipoRegistro = linha.substring(7, 8);

	switch(tipoRegistro) {
		case "0": new HeaderArquivo(linha); break;
		case "1": new HeaderLote(linha); break;
		case "3":
			var tipoSegmento = linha.substring(13, 14);
			switch (tipoSegmento) {
				case "T": new SegmentoT(linha);break;
				case "U": new SegmentoU(linha); break;
				default: console.warn("Outro tipo de segmento encontrado. Não pode ser desmontado.");
			}
			break;
		case "5": new TraillerLote(linha); break;
		case "9": new TraillerArquivo(linha); break;
	}
});