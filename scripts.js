// function myFunction(){
//   const name =document.getElementById("name").value
//   const mail =document.getElementById("mail").value
//   console.log(mail)
//     alert(`Thanks for you response ${name} 
//     Your reply would be sent to ${mail}`)
// }


const menu=document.getElementById("menu")
const toggles=document.getElementById("menu-items")


function toggler(){
  toggles.classList.toggle('d-none')
}



const button=document.getElementById("donate-button")

function donateFunction(){
  const section=document.getElementById("donate")
  const bodyblur=document.getElementById("blur")
  bodyblur.classList.add("blur")
  section.classList.remove("d-none")
}


const close=document.getElementById("close_donate")
function closeToogle(){
  const section=document.getElementById("donate")
  const bodyblur=document.getElementById("blur")
  bodyblur.classList.remove("blur")
  section.classList.add("d-none")
}

close.addEventListener("click",closeToogle)
menu.addEventListener('click',toggler)
button.addEventListener('click',donateFunction)