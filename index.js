let count = 0;

const btns = document.querySelectorAll(".btn");
const number = document.querySelector("#number");


btns.forEach((btn) => {
    btn.addEventListener("click",function(e){
       const value = e.currentTarget.classList;
       if (value.contains("dec")) {
           count--;
       } else if(value.contains("inc")){
           count++;
       } else {
           count = 0;
       }
       //change span color  
       if(count > 0){
        number.style.color = "#19f105"
       }
       if(count < 0){
        number.style.color = "#d6250e"
       }
       if(count === 0){
        number.style.color = "black"
       }
       number.textContent = count;
    });
});
