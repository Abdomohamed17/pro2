

// When you click on any profile div, show an img with it in the div


let img_profile1=document.getElementsByClassName("img_profile1")[0];
let img_profile2=document.getElementsByClassName("img_profile2")[0];
let img_profile3=document.getElementsByClassName("img_profile3")[0];
let img_profile=document.getElementsByClassName("img_profile")[0];


img_profile2.addEventListener("click" , function(){
img_profile1.src=img_profile2.src
})

img_profile3.addEventListener("click" , function(){
    img_profile1.src=img_profile3.src
    })

    img_profile.addEventListener("click" , function(){
       img_profile1.src = img_profile.src
        
        })

// ______________________________________________

// When you click on this button, we will go to the first page:-

let btn1 = document.getElementsByClassName("btn1")[0]


btn1.onclick=function (){
         scrollTo(0,0)

}

// _______________________________________________

// Hide and show button :-

window.onscroll = function(){
    if(scrollY >= 400){btn1.style.display="block"}
  else  if(scrollY < 400){btn1.style.display="none"}
}

