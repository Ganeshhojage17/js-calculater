let user_input = document.querySelector(".user-input");
let button = document.querySelectorAll("button");

button.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target.innerText)
        if(e.target.innerText==="AC"){
            user_input.value="";
        }
        else if(e.target.innerText==="BK"){
            user_input.value = user_input.value.slice(0,-1);
        }
        else if(e.target.innerText==="="){
            user_input.value=eval(user_input.value);
        }
        else {
            user_input.value+=e.target.innerText;
        }
    })
})
