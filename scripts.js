const button=document.getElementById("submit_button")

function myFunction(){
  const message=document.getElementById("message").value
  const subject =document.getElementById("subject").value
  const name =document.getElementById("name").value
  const mail =document.getElementById("mail").value
  
  alert(`Thanks for you response ${name} 
  Your reply would be sent to ${mail}`)
}

button.addEventListener("click", myFunction)