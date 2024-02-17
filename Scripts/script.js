// Variables
const counter = document.getElementById("counter");
const target = document.getElementById("target");
const open_menu_button = document.getElementById("open-menu-button");
const close_menu_button = document.getElementById("close-menu-button");
const menu = document.getElementById("menu");
let data;

// Load / Create Data
if (localStorage.getItem("Data")) {
    data = JSON.parse(localStorage.getItem("Data"));
} else {
    localStorage.setItem("Data", JSON.stringify({
        "clicks": 0,
        "perclick": 1,
        "persecond": 0,
        "skin": "default"
    }));
    data = JSON.parse(localStorage.getItem("Data"));
};

// Load & Save
setInterval(() => {
    if (localStorage.getItem("Data") && data) {
        localStorage.setItem("Data", JSON.stringify(data));
        counter.innerHTML = `<i class="fa-solid fa-arrow-pointer"></i> ` + data.clicks;
        target.classList.add(data.skin);
    };
}, 1);

// Autoclicker Persecond
setInterval(() => {
    data.clicks += data.persecond;
}, 1000);

// Target Clicked
target.onclick = () => {
    data.clicks += data.perclick
    target.classList.add("click");
    setTimeout(() => {
        target.classList.remove("click");
    }, 200);
};

open_menu_button.onclick = () => {
    if (menu.classList.value != "menu slideright-menu") {
        open_menu_button.classList.add("slideright-open-menu-button");
        menu.style = "display: inline-block;";
        menu.classList.add("slideleft-menu");
        setTimeout(() => {
            open_menu_button.classList.remove("slideright-open-menu-button");
            open_menu_button.style = "display: none; right: -100px;";
        }, 1000);
        setTimeout(() => {
            menu.classList.remove("slideleft-menu");
            menu.style.right = "0";
        }, 2000);
    };
};

close_menu_button.onclick = () => {
    if (menu.classList.value != "menu slideleft-menu") {
        menu.classList.add("slideright-menu");
        open_menu_button.style.display = "inline-block";
        open_menu_button.classList.add("slideleft-open-menu-button");
        setTimeout(() => {
            menu.classList.remove("slideright-menu");
            menu.style = "right: -450px; display: none;"
        }, 2000);
        setTimeout(() => {
            open_menu_button.classList.remove("slideleft-open-menu-button");
            open_menu_button.style.right = "0";
        }, 1000);
    };
};