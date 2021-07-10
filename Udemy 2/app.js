var overlay = document.getElementById("modalOverlay");
var text = document.getElementById("text");
var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
    var loginModal = document.getElementById("loginModal");
    loginModal.style.display = "block";
    text.style.display = "none";
    overlay.style.display = "block";
});

var signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", function () {
    var signUpModal = document.getElementById("signUpModal");
    signUpModal.style.display = "block";
    text.style.display = "none";
    overlay.style.display = "block";
});
var closeBtns = document.querySelectorAll(".fa-times");
for (let i = 0; i < closeBtns.length; i++ ) {
    closeBtns[i].addEventListener("click", function () {
        closeBtns[i].parentElement.style.display = "none";
        text.style.display = "block";
        overlay.style.display = "none";
        closeBtns[i].parentElement.childNodes[7].childNodes[1].childNodes[3].value = "";
        closeBtns[i].parentElement.childNodes[7].childNodes[3].childNodes[3].value = "";
        if (closeBtns[i].parentElement.childNodes[7].childNodes[5].childNodes[3]) {
            closeBtns[i].parentElement.childNodes[7].childNodes[5].childNodes[3].value = "";
        }       
    });
}
