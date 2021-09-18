function apagarTexto1(){
    document.getElementById("txtCompactar").value="";
}

function apagarTexto2(){
    document.getElementById("txtExpandir").value="";
}

function limpar(){
    document.getElementById("txtCompactar").value="";
    document.getElementById("txtExpandir").value="";
    document.getElementById("resCompactar").value="";
    document.getElementById("resExpandir").value="";
}

function compactarIP() {
    var ipv6 = document.getElementById("txtCompactar").value;

    //Remove zeros a esquerda
    ipv6 = ipv6.replaceAll(/^0{1,3}/g, '');         //Explicação Regex: https://regexr.com/
    ipv6 = ipv6.replaceAll(/(:0{1,3})/g, ':');
    ipv6 = ipv6.replaceAll(/(0{4}:)/g, '0:');

    //Comprime maior sequencia de zeros
    ipv6 = ipv6.replaceAll(/((?:(?:^|:)0+\b){2,}):?(?!\S*\b\1:0+\b)(\S*)/g, '::$2');

    document.getElementById('resCompactar').value=ipv6;
}

function expandirIP() {
    var ipv6 = document.getElementById("txtExpandir").value;

    ipv6 = normalizarFullIpv6(ipv6);

    document.getElementById('resExpandir').value=ipv6;
}


function normalizarFullIpv6(ipv6) {

    var arrayIpv6 = ipv6.split(':');
    
    for (var i = 0; i < arrayIpv6.length; i ++) {        
        
        if (arrayIpv6[i] != "") {
            
            //completando com zeros à esquerda
            arrayIpv6[i] = ("0000" + arrayIpv6[i]).substr(-4);

        } else if (i === (arrayIpv6.length-1)){

            //Preenchendo com zeros se for a ultima posição do array
            arrayIpv6[i] = "0000";

        } else {
               
            //Substituindo quatro pontos ::
            hex = [];
            for (var j = arrayIpv6.length; j <= 8; j ++) {
                hex.push('0000');
            }
            arrayIpv6[i] = hex.join(':');                           
        }
    }

    return arrayIpv6.join(':');
}
