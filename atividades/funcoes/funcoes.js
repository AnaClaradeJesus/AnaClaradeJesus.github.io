function multiplicar(a,b){
    multiplicar= a * b;
    return multiplicar
}
a = parseInt(prompt("digite o primeiro número"))
b = parseInt(prompt("digite o segundo número"))

alert(`multiplicação dos seus números é ${multiplicar(a, b)}.`)

function potencia(x,y){
    Math.pow(x, y);
    return Math.pow
}
x = parseInt(prompt("digite a base da potência"))
y = parseInt(prompt("digite o expoente"))

alert(`o resultado da sua potência é ${Math.pow(x,y)} `)