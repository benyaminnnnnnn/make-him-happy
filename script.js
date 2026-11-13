let happy = document.getElementById("happy");
let sad = document.getElementById("sad");
let angry = document.getElementById("angry");
let neutral=document.getElementById("neutral");
let image = document.getElementById("man");
let title = document.getElementById("title");
let tired = document.getElementById("tired");
let hide = document.getElementById("hide");
const addFade = (src,titlee,audio=null) =>{
  setTimeout(()=>{
    image.hidden = false;
    image.src = src;
    title.textContent = titlee;
    if(audio!==null)
    {
      const sound = new Audio(audio);
      sound.play();
    }
    image.classList.remove("fade");
  },400);
}
happy.addEventListener("click",function(){
  image.classList.add("fade");
  addFade("happy.jpg","YESSSSSSSSSSSSSSS!");   
});
sad.addEventListener("click",function(){
    image.classList.add("fade");
    addFade("sad.jpg","Life's boring...:(");
      
});
angry.addEventListener("click",function(){
  image.classList.add("fade")
  addFade("angry.jpg","don't get close!! :~|","faaaa.mp3");
});
neutral.addEventListener("click",function(){
  image.classList.add("fade");
  addFade("neutral.webp","FINE.:`");
});
tired.addEventListener("click",function(){
  image.classList.add("fade");
  addFade("tired.jpg","WHERE'S MY COFFEEEEEEEEE? cry.......");
});
hide.addEventListener("click",function(){
  image.hidden = true;
})