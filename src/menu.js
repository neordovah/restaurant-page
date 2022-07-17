function createMenu() {

    const main = document.getElementById("main");

    const itemContainer = document.createElement("div");
    itemContainer.id = "itemContainer";
    main.appendChild(itemContainer);

    for(let i = 0; i < 6; i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.id = `id${i}`;
        itemContainer.appendChild(item);
            let titleDiv = document.createElement("div");
            titleDiv.classList.add("titleDiv");
            item.appendChild(titleDiv);
            let title = document.createElement("p");
            title.classList.add("title");
            titleDiv.appendChild(title);
            let priceDiv = document.createElement("div");
            priceDiv.classList.add("priceDiv");
            item.appendChild(priceDiv);
            let price = document.createElement("p");
            price.classList.add("price");
            price.innerText = "5$";
            priceDiv.appendChild(price);
    }
    const items = document.querySelectorAll(".item");
    const titles = document.querySelectorAll(".title");

    items.forEach( item => {
        if(item.id == "id0") {
            titles[0].innerText = "Suprema";
        }
        if(item.id == "id1") {
            titles[1].innerText = "Chicken";
        }
        if(item.id == "id2") {
            titles[2].innerText = "European";
        }
        if(item.id == "id3") {
            titles[3].innerText = "Tuna";
        }
        if(item.id == "id4") {
            titles[4].innerText = "Pepperoni";
        }
        if(item.id == "id5") {
            titles[5].innerText = "Margherita";
        }
    })


}
    

export default createMenu;