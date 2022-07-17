function createContact() {

    const main = document.getElementById("main");

    const container = document.createElement("div");
    main.appendChild(container);

    const first_p = document.createElement("h1");
    first_p.innerText = "Write us something!";
    container.appendChild(first_p);

    const form = document.createElement("form");
    form.id = "form";
    container.appendChild(form);

    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = `<label for="password">Password <span class="required">*</span></label>
    <input type="password" id="password" autocomplete="off" required placeholder=" " oninvalid="this.setCustomValidity('Please enter a password')" oninput="setCustomValidity('')" class="auto-border" name="password" value="">`
    form.appendChild(cell);

    const submit = document.createElement("div");
    //.........
    
}

export default createContact;