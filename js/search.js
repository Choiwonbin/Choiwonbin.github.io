const search = document.querySelector(".menubar__search");
const searchbox = document.querySelector(".menubar__searchbox");
const searchboxInput = document.querySelector(".menubar__searchbox input");
const faSearch = document.querySelector(".fa-search");

function imgHover() {
    searchbox.style.display = "block";
    faSearch.style.opacity = "1";
}

function imgLeave() {
    searchbox.style.display = "none";
    faSearch.style.opacity = "0.7";
}

function google(event) {
    event.preventDefault();
    window.open(`https://www.google.com/search?q=${searchboxInput.value}`);
    searchboxInput.value = "";
}

search.addEventListener("mouseenter", imgHover);
search.addEventListener("mouseleave", imgLeave);
searchbox.addEventListener("submit", google);

