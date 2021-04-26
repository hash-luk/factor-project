function factor() {
    number = document.getElementById('facnumber').value
    var result = 0;
    
    if(number < 0) {
        var mensagem = "Não existe fatorial de número não natural!"
        return showResult(mensagem);
    }else if(number == 0 || number == 1) {
        result = 1;
        return showResult(result);
    }

    var firstmultiplicator = number - 1;
    result = number;
    
    for(let i = firstmultiplicator; i > 1; i--) {
        result *=i
    }
    return  showResult(result);
}

function showResult(e) {
    document.getElementById('result').innerHTML = e;
}

function clearResult() {
    document.getElementById('result').innerHTML = "";
}
