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

//Dark Mode Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.body.classList.add(currentTheme);

  if (currentTheme == 'dark-mode') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', null);
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);