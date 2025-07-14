let allbox=document.querySelector(".all-box")
let div=document.createElement("div")
div.classList.add("box")
let h2=document.createElement("h2")
let image=document.createElement("img")
let a=document.createElement("a")
a.textContent="view"
a.setAttribute("target","_blank")
div.prepend(a)
div.prepend(h2)
div.prepend(image)


console.log("hi");


function addbox(title,img,link){
    h2.textContent=title;
    image.setAttribute("src",img);
    a.setAttribute("href",link)
    allbox.prepend(div)
}
//addbox("alo","image/spotify.jpg","https://spotify-pearl-rho.vercel.app/")