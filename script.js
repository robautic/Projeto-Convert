const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasCharacteresRegex = /\D+/g
    amount.value = amount.value.replace (hasCharacteresRegex, " ")

}) 

form.onsubmit = (event) => {
    event.preventDefault()

      switch (currency.value){
          case"USD": 
            convertCurrency(amount.value, USD, "US$") 
            break
        case "EUR": 
            convertCurrency (amount.value, EUR, "€") 
            break 
        case "GBP": 
            convertCurrency (amount.value, GBP, "£") 
            break
      }       
}

function convertCurrency(amount, price, symbol){
    try{
        //exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
       
        //Calcula o resultado 
        let total = amount * price

        if (isNaN(total)){
            return alert ("Por favor, digite um número")

        }

        //formatar o valor total
        total = formatCurrencyBRL(total).replace("R$" , "")
       
        //Exibir o resultado total
        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
    }catch(error){
        
        footer.classList.remove("show-result")
        console.log(error)
        alert("NÃO FOI POSSÍVEL CONVERTER")
    }
}

//formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    //converte para número para utilizar o toLocalString para formatar no padrão BR
    return Number(value).toLocaleString("pt-BR",{
        style:"currency",
        currency: "BRL",
    })
}


   
