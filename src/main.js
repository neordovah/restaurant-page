function showMain() {

    const container = document.getElementById("container");
    const footer = document.getElementById("footer");

    const main = document.createElement("div");
    container.insertBefore(main, footer);
    main.id = "main";
}

export default showMain;