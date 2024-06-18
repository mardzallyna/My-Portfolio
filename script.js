function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Adjust the main content margin top when the menu is open
    const contentContainer = document.querySelector('main');
    if (menu.classList.contains("open")) {
        contentContainer.style.marginTop = '70px'; // Adjust this value to match the height of your navigation bar
    } else {
        contentContainer.style.marginTop = '0';
    }
}
