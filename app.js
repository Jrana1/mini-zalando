document.getElementById("input-width").addEventListener("click", e => {
    document.getElementById("input-width").style.width = "700px";
    document.getElementById("li11").style.display = "none";
    document.getElementById("li10").style.display = "none";
    document.getElementById("li9").style.display = "none";
    document.getElementById("li8").style.display = "none";
    document.getElementById("li7").style.display = "none";
});
document.getElementById("input-width").addEventListener("mouseout", e => {
    document.getElementById("input-width").style.width = "300px";
    document.getElementById("li11").style.display = "flex";
    document.getElementById("li10").style.display = "flex";
    document.getElementById("li9").style.display = "flex";
    document.getElementById("li8").style.display = "flex";
    document.getElementById("li7").style.display = "flex";
});
document.getElementById("pic1").addEventListener("click", e => {
    document.getElementById("big-image").src = "images/pic1.jpg";
    document.getElementById("brand-name").innerText = "s.Oliver";
    document.getElementById("product-name").innerText = "T-Shirt";
    document.getElementById("discount").innerText = "10% sparen";
    document.getElementById("price").innerText = "15$";
    document.getElementById("previous-price").innerText = "30$";
});
document.getElementById("pic2").addEventListener("click", e => {
    document.getElementById("big-image").src = "images/pic2.jpg"
    document.getElementById("brand-name").innerText = "Zara";
    document.getElementById("product-name").innerText = "Hose";
    document.getElementById("discount").innerText = "20% sparen";
    document.getElementById("price").innerText = "20$";
    document.getElementById("previous-price").innerText = "30$";

});
document.getElementById("pic3").addEventListener("click", e => {
    document.getElementById("big-image").src = "images/pic3.jpg";
    document.getElementById("brand-name").innerText = "Jack & jone";
    document.getElementById("product-name").innerText = "Jacke";
    document.getElementById("discount").innerText = "30% sparen";
    document.getElementById("price").innerText = "50$";
    document.getElementById("previous-price").innerText = "80$";

});
let number = document.getElementById("number");
document.getElementById("plus").addEventListener("click", e => {
    number.value = parseInt(number.value) + 1;
});
document.getElementById("minus").addEventListener("click", e => {

    if (number.value > 1) {
        number.value = parseInt(number.value) - 1;
    }
});
