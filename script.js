document.getElementById("upper-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let conv = text.toUpperCase();
    document.getElementById("textarea").value = conv
})
document.getElementById("lower-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let conv = text.toLowerCase();
    document.getElementById("textarea").value = conv
})
document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let conv = text.toLowerCase();
    let prop = conv.replace(/^(.)|\s(.)/g, function ($1) {return $1.toUpperCase()});
    document.getElementById("textarea").value = prop
})
document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let conv = text.toLowerCase();
    let prop = conv.replace(/^(.)|\.\s(.)/g, function ($1) {return $1.toUpperCase()});
    document.getElementById("textarea").value = prop
})
