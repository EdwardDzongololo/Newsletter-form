const emailBtn=document.getElementById('email-btn')
const successMessage=document.getElementById('main2')
const dashBoard= document.getElementById('main')
const paragraph= document.getElementById('paragraph')

emailBtn.addEventListener("click", function(e){
    e.preventDefault()
    // let emailFormat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 const emailadress=document.getElementById('email').value
dashBoard.style.display='none'
successMessage.style.display='block'
    let successMessageParagraph=document.getElementById("paragraph");
    successMessageParagraph.innerHTML=`
    <p id="paragraph">A confirmation email has been sent to ${emailadress}. 
      Please open it and click the button inside to confirm your subscription.</p>
      
 `


})

