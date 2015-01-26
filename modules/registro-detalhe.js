var SegmentoT = require('./segmento-t')
,	SegmentoU = require('./segmento-u');

function RegistroDetalhe() {}

RegistroDetalhe.prototype.parseLinha = function(linha) {
	var tipoSegmento = linha.substring(13, 14)
	,	segmento;

	switch (tipoSegmento) {
		case "T": segmento = new SegmentoT(); break;
		case "U": segmento = new SegmentoU(); break;
		default: console.warn("Outro tipo de segmento encontrado. Não pode ser desmontado.");
	}

	if(segmento != null) {
		segmento.parseLinha(linha);
		segmento.print();
	}
};

module.exports = RegistroDetalhe;