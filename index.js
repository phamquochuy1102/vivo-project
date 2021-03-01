//menu-navbar
let menuIcon = document.querySelector(".list-icon");
let menuModal = document.querySelector(".menu-modal");
let closeIcon = document.querySelector(".close-icon");

const modalCall = () => {
  if (menuModal.style.display === "none") {
    menuModal.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    menuModal.style.display = "none";
  }
};

const modalClose = () => {
  if (menuModal.style.display === "block") {
    menuModal.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuModal.style.display = "block";
  }
};

menuIcon.addEventListener("click", modalCall);
closeIcon.addEventListener("click", modalClose);

//change technology section background
//change technology link state
let typeBtns = document.getElementsByClassName("type-btn");
for (let i = 0; i < typeBtns.length; i++) {
  typeBtns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("techactive");
    current[0].className = current[0].className.replace(" techactive", "");
    this.className += " techactive";
  });
}
//change onclick background (technology section)
let techBtn = document.getElementById("tech-btn");
let techTypeBackground = document.getElementById("tech-bg");

const changeTechTypeBackGround = () => {
  for (let i = 0; i < typeBtns.length; i++) {
    typeBtns[i].addEventListener("click", function () {
      if (i === 0) {
        techTypeBackground.src =
          "https://www.vivosmartphone.vn/uploads/home/CAMERA-gimbal-1440x800.jpg";
        techBtn.style.display = "block";
      } else if (i === 1) {
        techTypeBackground.src =
          "https://www.vivosmartphone.vn/uploads/home/man-hinh-thac-nuoc-1400x800.jpg";
        techBtn.style.display = "none";
      } else {
        techTypeBackground.src =
          "https://www.vivosmartphone.vn/uploads/page/home/chup-dem.jpg";
        techBtn.style.display = "none";
      }
    });
  }
};

changeTechTypeBackGround();

//back-to-top btn
const backToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
document.querySelector(".back-to-top").addEventListener("click", backToTop);

//Maintaining function...
function Maintaining() {
  alert(
    "Xin lỗi, chức năng này đang bảo trì! Vui lòng quay lại sau, from Huy with love <3"
  );
}

function SendSuccess() {
  alert("Ý kiến của bạn đã được gửi đi, xin cám ơn quý khách!");
}

//slide show
let slideIndex;
function slidesShow() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " dot-active";
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  setTimeout(slidesShow, 3000);
}

slidesShow((slideIndex = 0));

function currentSlide(n) {
  slidesShow((slideIndex = n));
}
