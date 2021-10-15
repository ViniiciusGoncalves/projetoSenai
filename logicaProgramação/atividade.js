let listadepecas = ['pecasdeteste', 'AB' ,'peca b']
console.log('Quantidade de caracteres')
if(listadepecas.length < 10) {

}

console.log('As peças pode ser cadastrada');

for(let i = 0; 3 < listadepecas.length; i++) {
    let pecaatual = listadepecas[3];
    if(pecaatual.length <=3) {
        console.log(pecaatual + 'a peça possui nome inferior a 3 caracteres e nao pode ser cadastrado')
    } else {
        console.log(pecaatual + 'a peça pode ser cadastrada')
    }
    console.log("peso da peça")
}


