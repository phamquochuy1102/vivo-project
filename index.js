//menu-navbar
var menuIcon=document.querySelector(".list-icon");
menuIcon.addEventListener("click",modalCall);
var menuModal=document.querySelector(".menu-modal");
var closeIcon=document.querySelector(".close-icon");
closeIcon.addEventListener("click",modalClose);
function modalCall(){
    if(menuModal.style.display==='none'){
        menuModal.style.display='block';
        menuIcon.style.display='none'
    }
    else{
        menuModal.style.display='none';
    }
}

function modalClose(){
    if(menuModal.style.display==='block'){
        menuModal.style.display='none';
        menuIcon.style.display='block'
    }
    else{
        menuModal.style.display='block';
    }
}



//change technology section background
     var bg1=document.getElementById("bg-1");
     var bg2=document.getElementById("bg-2");
     var bg3=document.getElementById("bg-3");
     var btn=document.getElementById("tech-btn");
     bg1.addEventListener("click", changeBG1);
     function changeBG1(){
         var getBGElement=document.getElementById("bg-technology");
         btn.style.display="block";
         if(getBGElement.classList.contains("background-image-change2")){
            getBGElement.classList.remove("background-image-change2");
            getBGElement.classList.add('background-image-change1');
        }  
         else if(getBGElement.classList.contains("background-image-change3")){
            getBGElement.classList.remove("background-image-change3");
            getBGElement.classList.add('background-image-change1');
        }   
    }
    bg2.addEventListener("click", changeBG2);
     function changeBG2(){
         var getBGElement=document.getElementById("bg-technology");
         btn.style.display="none";
         if(getBGElement.classList.contains("background-image-change1")){
            getBGElement.classList.remove("background-image-change1");
            getBGElement.classList.add('background-image-change2');
        }  
         else if(getBGElement.classList.contains("background-image-change3")){
            getBGElement.classList.remove("background-image-change3");
            getBGElement.classList.add('background-image-change2');
        }   
    }    
    bg3.addEventListener("click", changeBG3);
     function changeBG3(){
         var getBGElement=document.getElementById("bg-technology");
         btn.style.display="none";
         if(getBGElement.classList.contains("background-image-change1")){
            getBGElement.classList.remove("background-image-change1");
            getBGElement.classList.add('background-image-change3');
        }  
         else if(getBGElement.classList.contains("background-image-change2")){
            getBGElement.classList.remove("background-image-change2");
            getBGElement.classList.add('background-image-change3');
        }   
    }
    //change technology link state
    var getCover=document.getElementById('bg-technology');
    var typeBtns=document.getElementsByClassName('type-btn');
    for(var i=0; i<typeBtns.length; i++){
        typeBtns[i].addEventListener("click",function(){
            var current=document.getElementsByClassName("techactive");
            current[0].className=current[0].className.replace(" techactive","");
            this.className+=" techactive";
        });
    }


