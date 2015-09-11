# desmonta-retorno
Programa CLI em nodejs que desmonta arquivos de remessa/retorno no modelo CNAB240 da FEBRABAN

### Usabilidade
Clone o repositorio:
```
git clone https://github.com/armand1m/desmonta-retorno.git
```

Vá para o diretório:
```
cd /caminho/onde/voce/clonou/o/repositorio/desmonta-retorno
```

Instale as dependencias do projeto:
```
npm install
```

Execute o comando:
```
node desmonta-retorno.js /caminho/para/o/IEDCBR1111_RETORNO.ret
```

Existem algumas opções para filtrar pedaços do arquivo de retorno.
* --ha, --header-arquivo
* --hl, --header-lote
* --rd, --registro-detalhe
* --tl, --trailler-lote
* --ta, --trailler-arquivo

Exemplo:
```
node desmonta-retorno.js /caminho/para/o/IEDCBR1111_RETORNO.ret --ha

/**
 *	Retorna somente o header de arquivo do arquivo de retorno.
 **/

node desmonta-retorno.js /caminho/para/o/IEDCBR1111_RETORNO.ret --ha --hl

/**
 *	Retorna o header de arquivo e o header de lote do arquivo de retorno.
 **/
```
