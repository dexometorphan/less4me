var menu = document.getElementById('menu-list');
function openmenu() {
    menu.style.display = 'block';
}
function hidemenu() {
    menu.style.display = 'none';
}
menu.onclick = openmenu();
alert(menu.onmouseout);