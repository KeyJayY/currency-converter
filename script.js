// fuction getting data from API
async function getData(url){
    const response = await fetch(url);
    return await response.json();
}
// getting rate
async function rate(code1, code2){
    data = await getData('https://api.exchangerate-api.com/v4/latest/'+code1);
    return data["rates"][code2];
}

// Event listiners for input events
document.querySelector("#num1").addEventListener("input", async function(){
    const code1 = document.querySelector("#cur1").value;
    const code2 = document.querySelector("#cur2").value;
    document.querySelector("#num2").value = (this.value * await rate(code1, code2)).toFixed(2);
})
document.querySelector("#num2").addEventListener("input", async function(){
    const code1 = document.querySelector("#cur2").value;
    const code2 = document.querySelector("#cur1").value;
    document.querySelector("#num1").value = (this.value * await rate(code1, code2)).toFixed(2);
})
document.querySelector("#cur1").addEventListener("input", async function(){
    const code1 = document.querySelector("#cur2").value;
    const code2 = document.querySelector("#cur1").value;
    document.querySelector("#num1").value = (document.querySelector("#num2").value * await rate(code1, code2)).toFixed(2);
})
document.querySelector("#cur2").addEventListener("input", async function(){
    const code1 = document.querySelector("#cur1").value;
    const code2 = document.querySelector("#cur2").value;
    document.querySelector("#num2").value = (document.querySelector("#num1").value * await rate(code1, code2)).toFixed(2);
})