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