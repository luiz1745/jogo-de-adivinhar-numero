alert("boas-vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() *100 +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;



while( chute!=numeroSecreto ){
    chute=prompt("escolha um número entre 1 e 100 ");
    // se o chute for igual ao numero secreto 
if (chute == numeroSecreto){
    break;
    } else{
    if(numeroSecreto > chute){
        alert(`o numero secreto e maior que o ${chute}`);
    } else
        alert(`o numero secreto e menor que o ${chute}`);
}   tentativas++;

}

if(tentativas > 1)
{
    alert (`Você descobriu o número ${numeroSecreto} com ${tentativas} tentativas.`);
}
else 
{
    alert (`Você descobriu o número ${numeroSecreto} com ${tentativas} tentativa.`);
}

