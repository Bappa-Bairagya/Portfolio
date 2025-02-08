var tabi=document.getElementsByClassName("tav-link")
var tabc=document.getElementsByClassName("tab-content")

function opentab(tabname){
    for(t of tabi){
        t.classList.remove("active");
    }
    for(tc of tabc){
        tc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    // console.log(tabname);
    tabname.classList.add("active-tab")
//    let d= document.getElementsById(tabname)
//    console.log(d);
   
}

var side=document.getElementById("side")

function openmenu(){
    side.style.right="0";
}
function closemenu(){
    side.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxZ6PQZu9AAyBQ-Wqld1Y_34fqW64z9EAhS_14uWo4Ig8dVkmku1ZoXSKYCXa_Mso9h/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})