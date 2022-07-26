var remember = document.getElementById("checkbox");
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
let timeOut;

function validateAnimation() {

  if (remember.checked) {
    title.classList.add('title-animation');
    subtitle.classList.add('subtitle-animation');
    timeOut = setTimeout(() => {
      title.classList.add('title-transition');
      subtitle.classList.add('subtitle-transition');
    }, 5300)


  } else {
    title.classList.remove('title-transition');
    subtitle.classList.remove('subtitle-transition');
    title.classList.remove('title-animation');
    subtitle.classList.remove('subtitle-animation');
    clearTimeout(timeOut);


  }
}
// function clickMenu(){
//   this.openMenu = this.openMenu ? false : true
// }

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
function closeMenu(){
  menuBtn.classList.remove('open');
  menuOpen = false;
  menu.classList.toggle('active');
}
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  menu.classList.toggle('active');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    643: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1263: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

function sendEmail() {
  let name = document.querySelector("#name");
  let _subject = document.querySelector("#subject");
  let phonenumber = document.querySelector("#phoneNumber");
  let emailAddress = document.querySelector("#emailAddress");
  let message = document.querySelector("#message");
  let messageBody = {
    name: name.value,
    _subject: _subject.value,
    phonenumber: phonenumber.value,
    emailAddress: emailAddress.value,
    message: message.value,
    _template: 'table'
  }

  fetch("https://formsubmit.co/ajax/elmatzar123@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(messageBody)
  })
    .then(response => response.json())
    .then(data => {
      name.value = '';
      _subject.value = '';
      phonenumber.value = '';
      emailAddress.value = '';
      message.value = '';
      alert(data.message);
    })
    .catch(error => console.log(error));
}