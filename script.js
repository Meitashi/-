const result = document.querySelector(".result");
const coin = document.querySelector(".coin");
const button = document.querySelector("button");

button.addEventListener("click", toss);

function toss(){
    let random = Math.floor(Math.random() * 2);
    result.innerHTML = "";  
    coin.style.backgroundImage =`url(coin-flip-30.gif)`
    setTimeout(() => {
        coin.style.backgroundImage =`url(coin-flip-30.png)`
        if(random == 0){
            result.innerHTML = "Решка";
        }else{
            result.innerHTML = "Орёл";
        }
    }, 1000);
}
