const inputRange = document.querySelectorAll(".input-range input");
const inputPrice = document.querySelectorAll(".price-input input");
let progress = document.querySelector(".progress-bar")

const priceGap = 200;

inputPrice.forEach(input =>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(inputPrice[0].value);
        let maxVal = parseInt(inputPrice[1].value);
        if((maxVal-minVal >= priceGap) && maxVal<=10000 && minVal>=0){
            if(e.target.className === "min-input"){
                inputRange[0].value = minVal;
                progress.style.left = (minVal / inputRange[0].max) * 100 + "%";
            }else{
                inputRange[1].value = maxVal;
                progress.style.right = 100 - (maxVal / inputRange[1].max) * 100 + "%";
            }
        }
    })
})

inputRange.forEach(input =>{
    input.addEventListener("input",(e)=>{
        let minVal = parseInt(inputRange[0].value);
        let maxVal = parseInt(inputRange[1].value);
        if(maxVal-minVal < priceGap){
            if(e.target.className === "range-min"){ // if active slider is min slider
                inputRange[0].value = maxVal - priceGap;
            }else{
                inputRange[1].value = minVal + priceGap;
            }
        }else{
            inputPrice[0].value = minVal;
            inputPrice[1].value = maxVal;
            progress.style.left = (minVal / inputRange[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / inputRange[1].max) * 100 + "%";
        }
    })
})