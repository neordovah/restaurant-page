import container from ".";

function createFooter() {

    const footer = document.createElement("div");
    container.appendChild(footer);
    footer.id = "footer";
    footer.innerText = "The Odin Project - Restaurant page";
}

export default createFooter;