function updateMenuDisplay() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 851) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

updateMenuDisplay();

window.addEventListener('resize', updateMenuDisplay);

function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}