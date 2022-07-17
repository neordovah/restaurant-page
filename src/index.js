import createHeader from "./header.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
//import createContact from "./contact.js";
import createAbout from "./about.js";
import createFooter from "./footer.js";
import showMain from "./main.js";
import "./styles.css";

const container = document.createElement("div");
document.body.appendChild(container);
container.id = "container";
export default container;

createHeader();
showMain();
createHome();
createFooter();

home.addEventListener("click", () => {
    main.remove();
    showMain();
    createHome();
})
menu.addEventListener("click", () => {
    main.remove();
    showMain();
    createMenu();
})
/*contact.addEventListener("click", () => {
    main.remove();
    showMain();
    createContact();
})*/
about.addEventListener("click", () => {
    main.remove();
    showMain();
    createAbout();
})

