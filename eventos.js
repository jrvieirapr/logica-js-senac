console.log("Eventos");
// selecionar os elementos
const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const adcionarButton = document.getElementById("adcionar");
const tabelaBody = document.getElementById("tabela-contatos");
// Variaveis da Tabela
const linhas = []

function mostrarMensagem(mensagem) {
  console.log(mensagem);
}
//Ouvir o input
nomeInput.addEventListener("input", () => {
  mostrarMensagem(nomeInput.value);
});
nomeInput.addEventListener("focus", () => {
  mostrarMensagem("Cliquei no campo");
});
nomeInput.addEventListener("blur", () => {
  mostrarMensagem("Sai do campo");
});
nomeInput.addEventListener("change", () => {
  mostrarMensagem("Quando eu mudo o valor do campo");
});
nomeInput.addEventListener("keyup", (e) => {
  mostrarMensagem(`Apertei a tecla: ${e.key}`);
});

//Eventos de mouse
nomeInput.addEventListener("mouseenter", () => {
    mostrarMensagem('O mouse esta em cima do campo');
});
nomeInput.addEventListener("mouseleave", () => {
    mostrarMensagem('O mouse saiu do campo');
});
nomeInput.addEventListener("mousedown", () => {
    mostrarMensagem('Cliquei com o mouse');
});
nomeInput.addEventListener("mouseup", () => {
    mostrarMensagem('Soltou o botão do mouse');
});
nomeInput.addEventListener("click", () => {
    mostrarMensagem('clicou no campo');
});

function montarLinhas(){
    for(let linha of linhas){
        console.log(linha)
    }
}
// Botao Adcionar
adcionarButton.addEventListener("click", () => {
    mostrarMensagem("Cliquei");
    const nome = nomeInput.value.trim()
    const telefone = telefoneInput.value.trim()
    if(!nome | !telefone){
        alert("Preencha os campos!")
        return
    }
    console.log(`Dados: \nNome: ${nome}. \nTelefone: ${telefone}`)
    // "nome" : "Juliano"
    linhas.push({nome,telefone})
    console.log(linhas)
    // limpar formulario
    nomeInput.value = ""
    telefoneInput.value = ""
    nomeInput.focus()    
});

function renderizarTabela(){
  
}