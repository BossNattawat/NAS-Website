function updateMenuDisplay() {
  const menu = document.querySelector('.menu');
  if (window.innerWidth > 950) {
      menu.style.display = 'flex';
  } else {
      menu.style.display = 'none';
  }
}

updateMenuDisplay();

window.addEventListener('resize', updateMenuDisplay);

function nav() {
  var x = document.getElementById("menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}