function toggleMenu(){
    //Target menu-links and hamburger-icon.
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    //If they are clicked, toggle the open parameter.
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}