let password = document.getElementById("password")
let passwordPopup = document.getElementsByClassName("password_popup")[0]

let minimumChar = document.getElementById("minimum_char")
let lowerCase = document.getElementById("lower_letter")
let upperCase = document.getElementById("capital_letter")
let number = document.getElementById("number")
let specialChar = document.getElementById("special_char")






document.addEventListener('click', (event) => {
    const box = document.getElementsByClassName("password_popup")[0]
  
    if (!box.contains(event.target)) {
      box.style.display = 'none';
      console.log(event)
    }
  });

  let flag1 = false
  let flag2 = false
  let flag3 = false
  let flag4 = false
  let flag5 = false
password.addEventListener("input", (event) => {
   console.log(event.target.value)
   passwordPopup.style.display = "block"
    flag1 = false
   {if(event.target.value.length >= 8){
         minimumChar.style.background = "#00ab72"
         flag1 = true
   }else{
    minimumChar.style.background = "#fff"
   }
   }
    flag2 = false
   {
    if(event.target.value.match(/[a-z]/)){
        lowerCase.style.background = "#00ab72"
        flag2 = true
    }else{
        lowerCase.style.background = "#fff"
    }
   }
    flag3 = false
   {
    if(event.target.value.match(/[A-Z]/)){
        upperCase.style.background = "#00ab72"
        flag3 = true
    }else{
        upperCase.style.background = "#fff"
    }
   }
    flag4 = false
   {
    if(event.target.value.match(/[0-9]/)){
        number.style.background = "#00ab72"
        flag4 = true
    }else{
        number.style.background = "#fff"
    }
   }
    flag5 = false
   {
    if(event.target.value.match(/[!%&@#$^*?_~]/)){
        specialChar.style.background = "#00ab72"
        flag5 = true
    }else{
        specialChar.style.background = "#fff"
    }
   }

   if(flag1 == true && flag2 == true && flag3 == true && flag4== true && flag5 == true){
    passwordPopup.style.display = "none"
   }

   
})





password.addEventListener("click", (e)=> {
    console.log(flag1)
    if(flag1 == true && flag2 == true && flag3 == true && flag4== true && flag5 == true){
        passwordPopup.style.display = "none"
       }else{
        passwordPopup.style.display = "block"
       }
    
    e.stopPropagation();
})