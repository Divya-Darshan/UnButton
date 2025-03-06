let btn = document.getElementById('no');
let img = document.getElementById('img')
// Ensure the button has absolute positioning



function no() {
    btn.style.position = "absolute";
    img.src = "pinch.gif"
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let btnWidth = btn.offsetWidth;
    let btnHeight = btn.offsetHeight;

    let randomX = Math.random() * (screenWidth - btnWidth);
    let randomY = Math.random() * (screenHeight - btnHeight);

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}
