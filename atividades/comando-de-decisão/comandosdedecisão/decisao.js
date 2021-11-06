let valorinicial= prompt('Digite seu saldo:')
let valorcompra= prompt('Digite o valor da sua compra:')
let mensagemboa='boa compra'
let mensagemruim='seu saldo é insuficiente'

let conta= valorinicial-valorcompra
let mensagemconta=`seu saldo ficará ${conta} reais`
alert(mensagemconta)

if(valorinicial >= valorcompra){
    valorinicial=valorinicial-valorcompra
    alert(mensagemboa)
}
else if(valorinicial<valorcompra){
    valorinicial = valorinicial-valorcompra
    alert(mensagemruim)

}