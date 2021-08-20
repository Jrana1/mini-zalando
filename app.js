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
    document.getElementById("price").innerText = "15  ";
    document.getElementById("number").value = 1;
    document.getElementById("subtotal").innerText = "0$";
    document.getElementById("tax").innerText = "0$";
    document.getElementById("total").innerText = "0$";
    document.getElementById("lieferung-premium").removeAttribute("disabled", true);
    document.getElementById("lieferung-kostenlos").removeAttribute("disabled", true);
});
document.getElementById("pic2").addEventListener("click", e => {
    document.getElementById("big-image").src = "images/pic2.jpg"
    document.getElementById("brand-name").innerText = "Zara";
    document.getElementById("product-name").innerText = "Hose";
    document.getElementById("discount").innerText = "20% sparen";
    document.getElementById("price").innerText = "20  ";
    document.getElementById("number").value = 1;
    document.getElementById("subtotal").innerText = 0;
    document.getElementById("tax").innerText = 0;
    document.getElementById("total").innerText = 0;
    document.getElementById("lieferung-premium").removeAttribute("disabled", true);
    document.getElementById("lieferung-kostenlos").removeAttribute("disabled", true);
});
document.getElementById("pic3").addEventListener("click", e => {
    document.getElementById("big-image").src = "images/pic3.jpg";
    document.getElementById("brand-name").innerText = "Jack & jone";
    document.getElementById("product-name").innerText = "Jacke";
    document.getElementById("discount").innerText = "30% sparen";
    document.getElementById("price").innerText = "50  ";
    document.getElementById("subtotal").innerText = "0$";
    document.getElementById("tax").innerText = "0$";
    document.getElementById("total").innerText = "0$";
    document.getElementById("number").value = 1;
    document.getElementById("lieferung-premium").removeAttribute("disabled", true);
    document.getElementById("lieferung-kostenlos").removeAttribute("disabled", true);

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
document.getElementById("lieferung-kostenlos").addEventListener("click", e => {
    document.getElementById("lieferung-premium").setAttribute("disabled", true);
});
document.getElementById("lieferung-premium").addEventListener("click", e => {
    document.getElementById("lieferung-kostenlos").setAttribute("disabled", true);

});
let momentPrice = 0;
document.getElementById("lieferung-premium").addEventListener("click", e => {
    momentPrice = document.getElementById("price").innerText;
    momentPrice = parseInt(momentPrice) + 20;

});

let subTotal = document.getElementById("subtotal");
let tax = document.getElementById("tax");
let total = document.getElementById("total");
document.getElementById("submit").addEventListener("click", e => {
    let pricePerProduct = document.getElementById("price").innerText;
    let ans = parseInt((number.value)) * parseInt(pricePerProduct);
    subTotal.innerText = ans + "$";
    let taxAns = ans / 10;
    tax.innerText = taxAns + "$";
    let prTotal = ans + taxAns;
    if (momentPrice == 0) {
        total.innerText = prTotal + "$";
    }
    else {
        total.innerText = (prTotal + 20) + "$ -incl liferung kosten";
    }
});