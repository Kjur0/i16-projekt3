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