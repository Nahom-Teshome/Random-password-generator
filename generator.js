let option1 = document.querySelector(".password1")
let option2 = document.querySelector(".password2")
let passwordLength = document.getElementById("passwordNumber")
 const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = document.querySelector(".password1")
let password2 = document.querySelector(".password2")



function generatePassword()
{


  

    let size = passwordLength.value

    if(option1.textContent ==""){
   for(let i = 0; i < size; i++)
    {
        option1.textContent += characters[Math.floor(Math.random()*characters.length)]
        option2.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
    }
    else {
       console.log( option1.textContent[8])
        option1.textContent= ""
          option2.textContent= ""
        generatePassword()
        }
       

}

password1.addEventListener("click", function(){
  
  navigator.clipboard.writeText(password1.innerHTML)
  
})
password2.addEventListener("click", function(){
  let copypassword2 = password2.innerHTML
  navigator.clipboard.writeText(password1.innerHTML)
  
})

