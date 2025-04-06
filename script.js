function toggleMenu(){
    //Target menu-links and hamburger-icon.
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    //If they are clicked, toggle the open parameter.
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu.classList.contains("open") && !menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});