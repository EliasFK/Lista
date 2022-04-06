let text = document.getElementById("text")
let lista = document.getElementById("lista")


function adicionar(){

const li = document.createElement("li")

const liText = document.createElement("span")

const botao = document.createElement("button")

botao.textContent = "X"

botao.addEventListener("click", () => {
    li.remove()
})

liText.textContent = text.value

li.append(liText, botao)

text.value = null

lista.appendChild(li)


}

function salvarArq(){
    
    const itens = document.querySelectorAll("#lista > li") 
    let texto = Array.from(itens).map(li => li.textContent.trim()).join("\n")

    let titulo = document.getElementById("titulo").value;
    
    let blob = new Blob([texto], { type: "text/plain;charset=utf-8" });

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = titulo+".txt"
    link.click()
}