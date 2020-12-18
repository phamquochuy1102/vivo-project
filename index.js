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
    //change technology link state
    var typeBtns=document.getElementsByClassName('type-btn');
    for(var i=0; i<typeBtns.length; i++){
        typeBtns[i].addEventListener("click",function(){
            var current=document.getElementsByClassName("techactive");
            current[0].className=current[0].className.replace(" techactive","");
            this.className+=" techactive";
        });
    }
    //change background
    var techBtn=document.getElementById("tech-btn");
    typeBtns[0].addEventListener("click",changebg);
    function changebg(){
        techBtn.style.display="block";
        document.getElementById("tech-bg").src="https://www.vivosmartphone.vn/uploads/home/CAMERA-gimbal-1440x800.jpg"
    }

    typeBtns[1].addEventListener("click",changebg1);
    function changebg1(){
       document.getElementById("tech-bg").src="https://www.vivosmartphone.vn/uploads/home/man-hinh-thac-nuoc-1400x800.jpg"
       techBtn.style.display="none";
    }

    typeBtns[2].addEventListener("click",changebg2);
    function changebg2(){
        techBtn.style.display="none";
        document.getElementById("tech-bg").src="https://www.vivosmartphone.vn/uploads/page/home/chup-dem.jpg"
    }

