const menuItems = document.querySelectorAll('#menu a[href^="#"]');
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
  let w = window.outerWidth;
  if (w <= 768) {
    document.getElementById('btn_menu').click();
  }

}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 1000;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};

window.onload = () => {
  Age();
  let w = window.outerWidth;
  const nav = document.querySelector('#menu');
  if (w > 780) {
    if (this.scrollY <= 10) nav.className = '';
    else nav.className = 'scroll';
  } else {
    nav.className = 'mobile';
  }
}

window.onresize = () => {
  let w = window.outerWidth;
  const nav = document.querySelector('#menu');
  if (w > 768) {
    document.getElementById('menu_itens').style.display = "flex";
    if (this.scrollY <= 10) nav.className = '';
    else nav.className = 'scroll';
  } else {
    document.getElementById('btn_menu').classList.remove("open");
    document.getElementById('menu_itens').style.display = "none";
    nav.className = 'mobile';
  }
}

window.onscroll = () => {
  let w = window.outerWidth;
  const nav = document.querySelector('#menu');
  if (w > 768) {
    if (this.scrollY <= 10) nav.className = '';
    else nav.className = 'scroll';
  } else {
    nav.className = 'mobile';
  }
};

document.getElementById('btn_menu').addEventListener("click", function () {
  const menuItens = document.getElementById('menu_itens');
  if (menuItens.style.display == "flex") {
    menuItens.style.display = "none";
    document.getElementById('btn_menu').classList.remove("open");
  } else {
    menuItens.style.display = "flex";
    document.getElementById('btn_menu').classList.add("open");
  }
});


function opengalery(e) {
  let body = document.getElementsByTagName('body')[0];
  let gallery = document.getElementsByClassName('gallery')[0];
  let header = document.getElementsByTagName('header')[0];
  let footer = document.getElementsByTagName('footer')[0];
  let sections = document.getElementsByTagName('section');
  let close = document.getElementById('closegallery');
  let prev = document.getElementById('previmage');
  let next = document.getElementById('nextimage');
  let image = document.getElementsByClassName('g-img')[0];
  let work = e.getAttribute('data-img');
  let amount = e.getAttribute('data-amount');
  let index = 1;
  gallery.style.visibility = "visible";
  body.style.overflowY = "hidden";
  image.src = `assets/images/${work}-${index}.png`;
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("bg-gallery");
  }
  header.classList.add("bg-gallery");
  footer.classList.add("bg-gallery");
  close.addEventListener("click", function () {
    gallery.style.visibility = "hidden";
    body.style.overflowY = "visible";
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove("bg-gallery");
    }
    header.classList.remove("bg-gallery");
    footer.classList.remove("bg-gallery");
  });
  next.addEventListener("click", function () {
    if (index == amount) {
      index = 0;
    }
    image.src = '';
    index++;
    image.src = `assets/images/${work}-${index}.png`;
  });
  prev.addEventListener("click", function () {
    if (index == 1) {
      index = amount;
      index++;
    }
    image.src = '';
    index--;
    image.src = `assets/images/${work}-${index}.png`;
  });
}

function Age(){
  today = new Date;
  birth = new Date("1997, 08, 18");
  var age = today.getFullYear() - birth.getFullYear();
  if (new Date(today.getFullYear(), today.getMonth(), today.getDate()) < new Date(today.getFullYear(), birth.getMonth(), birth.getDate()))
    age--;

  const ageEl = document.querySelector('.j_age');
  ageEl.innerHTML = age;
}
setInterval(() => {
  Age();
}, 1000);