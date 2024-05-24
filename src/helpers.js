function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, i) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras duplicadas no parágrafo  ${i + 1}: ${duplicadas} \n`
    })
    return textoFinal;
}

export { montaSaidaArquivo }