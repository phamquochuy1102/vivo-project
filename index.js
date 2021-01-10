
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
       document.getElementById("tech-bg").src="https://thietbiketnoi.com/wp-content/uploads/2019/11/danh-gia-vivo-nex3-voi-man-hinh-thac-nuoc-3.jpg"
       techBtn.style.display="none";
    }

    typeBtns[2].addEventListener("click",changebg2);
    function changebg2(){
        techBtn.style.display="none";
        document.getElementById("tech-bg").src="https://i.ytimg.com/vi/GprtoIJ3J50/maxresdefault.jpg"
    }

   //back-to-top btn
   function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    //Maintaining function...
    function Maintaining(){
        alert("Xin lỗi, chức năng này đang bảo trì! Vui lòng quay lại sau, from Huy with love <3");
    }

    function SendSuccess(){
        alert("Ý kiến của bạn đã được gửi đi, xin cám ơn quý khách!");
    }

    //slideshow
    var slideIndex;
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" dot-active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " dot-active";
      slideIndex++;
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      setTimeout(showSlides, 5000);
  }
  showSlides(slideIndex = 0);
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }


// var video1=document.querySelectorAll(".product-video")[0];
// function playVideo(){
//     video1.play();
// }

  

