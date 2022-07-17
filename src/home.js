//import change_background from "./change_big-img_background";

function createHome() {

    const main = document.getElementById("main");

    const description = document.createElement("div");
    main.appendChild(description);
    description.id = "description";

        const h2 = document.createElement("h2");
        description.appendChild(h2);
        h2.innerText = "How it was created:";

        const first_p = document.createElement("p");
        description.appendChild(first_p);
        first_p.id = "first-p";
        first_p.innerText = "When Alexander Rustic was walking through the desert, he stumbled across an indian tribe. Scared, he began begging for his life, until the leader of the tribe spoke:";

        const second_p = document.createElement("p");
        description.appendChild(second_p);
        second_p.id = "second-p";
        second_p.innerText = '"Do not be afraid my child, for the prophecy will soon be fulfilled. You were destined to meet us here, where we will pass you The Greatest Pizza Dough Recipe. You will go back to your country and open what is yet to become the greatest pizzeria in the world, thus fulfilling the prophecy. The recipe shall not be shared with anybody!"';

        const h1 = document.createElement("h1");
        description.appendChild(h1);
        h1.innerText = "Welcome to Alexander Rustic's pizzeria!";

    const big_img = document.createElement("div");
    main.appendChild(big_img);
    big_img.id = "big-img";
    //change_main_bg();
    /*function change_main_bg() {
        change_background();
        setTimeout(change_background, 3000);
    }*/
    big_img.classList.add("background-0");
    
}

export default createHome;