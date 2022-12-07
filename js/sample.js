// part 1
document.querySelector("#part1Checkbox").addEventListener("change", function() {
    if (this.checked == true) {
        document.querySelector("#part2").classList.remove("closed");
    }
    else {
        document.querySelector("#part2").classList.add("closed");
    }
});

// part 2
document.querySelector("#repeat").addEventListener("change", function() {
    let message1 = document.querySelector("#message1");
    let message2 = document.querySelector("#message2");
    if (this.checked == true) {
        message2.value = message1.value.toUpperCase();
        message2.disabled = true;
    }
    else {
        message2.value = "";
        message2.disabled = false;
    }
});

// part 3
let images = document.querySelectorAll("img");
let broken;
for (let i = 0; i < images.length; i++) {
    if (images[i].src == "") {
        broken = i;
    }
}
images[broken].addEventListener("mouseover", function() {
    images[broken].src = images[0].src;
});
images[broken].addEventListener("mouseleave", function() {
    images[broken].src = "";
});

images[broken].tabIndex = "0";
images[broken].addEventListener("keydown", function() {
    images[broken].src = images[0].src;
});
images[broken].addEventListener("keyup", function() {
    images[broken].src = "";
});

