let comida;
let precocomida;
let bebida;
let precobebida;
let sobremesa;
let precosobremesa;
let total;
let nome;
let endereco;



//Quando clica na box daquela determinada comida, que esta com o elemento (this), ele ativa a funcao para aquela box
function selecionaComida(elemento){

//a variavel 'botaoClicado' recebe o box que tem a opcao (classe) '.borda' (nao necessariamente a box que foi clicada)
    const botaoclicado = document.querySelector(".borda");
// Se nao tem nenhuma box com a classe borda, ele n entra no 'if', se tiver (borda diferende de NULL), ele entra no if E remove a borda   
    if(botaoclicado !== null){
        botaoclicado.classList.remove("borda");
    }
    //adiciona a borda no botao clicado
     elemento.classList.add("borda");
     comida = document.querySelector('.borda h1');
     precocomida = document.querySelector('.borda .preco');
          
     liberaBotao();

 }

 function selecionaBebida(elemento){

    const botaoclicado = document.querySelector(".bebidas .borda");
   
    if(botaoclicado !== null){
       botaoclicado.classList.remove("borda");
   }
    elemento.classList.add("borda");
    bebida = document.querySelector('.bebidas .borda h1');
    precobebida = document.querySelector('.bebidas .borda .preco');

    liberaBotao();

}

function selecionaSobremesa(elemento){
    
    const botaoclicado = document.querySelector(".sobremesas .borda");
   
    if(botaoclicado !== null){
       botaoclicado.classList.remove("borda");
   }
    elemento.classList.add("borda");
    sobremesa = document.querySelector('.sobremesas .borda h1');
    precosobremesa = document.querySelector('.sobremesas .borda .preco');

    liberaBotao();

}


function liberaBotao(){

    if(comida && bebida && sobremesa){
       let botao = document.querySelector('.botaoCinza'); 
       botao.classList.add('fecharpedido');
       botao.innerHTML = "Fechar pedido";
    }

}

function mostraResumo(){
    let botao = document.querySelector('.resumopedido');
     nome = prompt("Digite seu nome:");
     endereco = prompt("Digite seu endereço:");
   
    let linha1 = document.querySelector('.linhacomida .comida_linha_comida');
    linha1.innerHTML = `<p>${comida.innerHTML}</p>`;

    let linha11 = document.querySelector('.linhacomida .preco_linha_comida');
    linha11.innerHTML = `<p>${precocomida.innerHTML.replace("R$ ","")}</p>`;

    let linha2 = document.querySelector('.linhabebida .bebida_linha_bebida');
    linha2.innerHTML = `<p>${bebida.innerHTML}</p>`;

    let linha22 = document.querySelector('.linhabebida .preco_linha_bebida');
    linha22.innerHTML = `<p>${precobebida.innerHTML.replace("R$ ","")}</p>`;

    let linha3 = document.querySelector('.linhasobremesa .sobremesa_linha_sobremesa');
    linha3.innerHTML = `<p>${sobremesa.innerHTML}</p>`;

    let linha33 = document.querySelector('.linhasobremesa .preco_linha_sobremesa');
    linha33.innerHTML = `<p>${precosobremesa.innerHTML.replace("R$ ","")}</p>`;

    let preco1 = precocomida.innerHTML.replace("R$ ","");
    preco1 = parseFloat(preco1);
    preco1 = Number(preco1);
    
    let preco2 = precobebida.innerHTML.replace("R$ ","");
    preco2 = parseFloat(preco2);
    preco2 = Number(preco2);

    let preco3 = precosobremesa.innerHTML.replace("R$ ","");
    preco3 = parseFloat(preco3);
    preco3 = Number(preco3);

    total  = (preco1+preco2+preco3);

    total  = total.toFixed(2);

    let precototal = document.querySelector('.Total .precototal');
    precototal.innerHTML = `R$ ${total}`;

    botao.classList.toggle('escondido');
}


function enviar(){

let resumofinal = 
    `Olá, gostaria de fazer o pedido: \n\
    - Prato: ${comida.innerHTML} \n\
    - Bebida: ${bebida.innerHTML} \n\
    - Sobremesa: ${sobremesa.innerHTML} \n\
    Total: R$ ${total}\n\
    \n\
    Nome: ${nome}
    Endereço: ${endereco} `;

    link = "https://wa.me/5519997013938?text=" + encodeURIComponent(resumofinal);
    window.open(link);

}