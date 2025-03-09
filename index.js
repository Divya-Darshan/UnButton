let body = document.getElementById('body')
body.style.display = 'none'
// URL of the Google Docs document (make sure it's publicly accessible)
const docUrl = "https://docs.google.com/document/d/1zcgFvruQb5FObdRzxVEnBmXVdJ1yKqB7xzCKqDXctRo/export?format=txt";

// Fetch the content of the document
fetch(docUrl)
    .then(response => response.text())  // Convert response to text (plain text)
    .then(text => {

        let password = text

        let pass = prompt('Password : ')

        if (pass == password){
            body.style.display = 'block'
        }
    })
    .catch(error => console.error("Error:", error));  // Log any errorssdvsdv


let btn = document.getElementById('no');
let img = document.getElementById('img')
// Ensure the button has absolute positioning
let para = document.getElementById('p')





function no() {
    btn.style.position = "absolute";
    img.src = "pinch.gif"
    para.textContent = "You are really mean.😭"
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let btnWidth = btn.offsetWidth;
    let btnHeight = btn.offsetHeight;

    let randomX = Math.random() * (screenWidth - btnWidth);
    let randomY = Math.random() * (screenHeight - btnHeight);

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

function yes(){
    para.textContent = "I knew it!!"
    img.src = "reszz.gif"

}


