var headingEl = document.getElementById("heading")
headingEl.innerHTML = "All about gooses"
var nameEls = document.getElementsByClassName("animal")
for (var i = 0; i < nameEls.length; i++) {
    nameEls[i].innerHTML = "goose"
}
var imageEls = document.getElementsByTagName("img")
for (var i = imageEls.length; i > 0; i--) {
    imageEls[i - 1].src = `goose-${i}.png`
}
var linkEls = document.querySelectorAll("a[href*=\"Dog\"]")
for (var i = 0; i < linkEls.length; i++) {
    linkEls[i].href = `https://en.wikipedia.org/wiki/Goose`
}
var bodyEl = document.querySelector("body")
bodyEl.style.color = "orange"

$("body").append("<p>That is really cool Computer Virus</p>")
$("h1").fadeOut(3000)
$("h1").fadeIn(2000)
$("h1").text("This article is about Gooses")