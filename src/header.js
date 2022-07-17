import container from ".";

function createHeader() {

    const header = document.createElement("div");
    const header_img = document.createElement("div");

    container.appendChild(header);
    header.appendChild(header_img);
    header_img.id = "header-img";
    header.id = "header";

    const menu_bar = document.createElement("div");
    const home = document.createElement("button");
    const menu = document.createElement("button");
    //const contact = document.createElement("button");
    const about = document.createElement("button");

    header.appendChild(menu_bar);
    menu_bar.id = "menu-bar";

    menu_bar.appendChild(home);
    menu_bar.appendChild(menu);
    //menu_bar.appendChild(contact);
    menu_bar.appendChild(about);

    home.id = "home";
    menu.id = "menu";
    //contact.id = "contact";
    about.id = "about";

    home.innerText = "Home";
    menu.innerText = "Menu";
    //contact.innerText = "Contact";
    about.innerText = "About";
}

export default createHeader;