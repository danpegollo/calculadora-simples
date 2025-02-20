function somar() {
    let n1 = parseFloat(document.querySelector(`#n1`).value) || 0;
    let n2 = parseFloat(document.querySelector(`#n2`).value) || 0;
    let soma = n1 + n2;
    document.querySelector("#resultado_soma").textContent = `Números somados: ${soma}`;
}
function subtrair () {
    let n1 = parseFloat(document.querySelector(`#n1`).value) || 0;
    let n2 = parseFloat(document.querySelector(`#n2`).value) || 0;
    let subtrair = n1 - n2;
    document.querySelector("#resultado_subtração").textContent = `Números subtraidos: ${subtrair}`;
}
function multiplicar (){
    let n1 = parseFloat(document.querySelector(`#n1`).value) || 0;
    let n2 = parseFloat(document.querySelector(`#n2`).value) || 0;
    let multiplicar = n1 * n2;
    document.querySelector("#resultado_multiplicação").textContent = `Números multiplicados: ${multiplicar}`
}
function dividir (){
    let n1 = parseFloat(document.querySelector(`#n1`).value) || 0;
    let n2 = parseFloat(document.querySelector(`#n2`).value) || 0;
    let dividir = n1 / n2;
    document.querySelector("#resultado_divisão").textContent = `Números divididos: ${dividir}`
}
function reiniciar (){
        document.querySelector("#n1").value = '';
        document.querySelector("#n2").value = '';
        document.querySelector('#resultado_soma').innerHTML = `<p id="resultado_soma">Números somados: Nenhum até agora</p>`
        document.querySelector('#resultado_subtração').innerHTML = `<p id="resultado_soma">Números subtraidos: Nenhum até agora</p>`
        document.querySelector('#resultado_multiplicação').innerHTML = `<p id="resultado_multiplicação">Números multiplicados: Nenhum até agora</p>`
        document.querySelector('#resultado_divisão').innerHTML = `<p id="resultado_divisão">Números divididos: Nenhum até agora</p>`
}
document.querySelector("#botao_soma").addEventListener("click", somar);
document.querySelector("#botao_subtração").addEventListener("click",subtrair);
document.querySelector("#botao_multiplicação").addEventListener("click",multiplicar);
document.querySelector("#botao_divisão").addEventListener("click",dividir);
document.querySelector("#btnreiniciar").addEventListener("click",reiniciar);