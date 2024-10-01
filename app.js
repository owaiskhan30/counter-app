var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var count = document.querySelector(".count");

function plus_counter() {
     count.innerHTML++;
}

function minus_counter() {
    if (count.innerHTML != 0) {
        count.innerHTML--;
    }
}
     