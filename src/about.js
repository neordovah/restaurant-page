function createAbout() {

    const main = document.getElementById("main");

    const container = document.createElement("div");
    container.id = "ab_container";
    main.appendChild(container);

    const first_question = document.createElement("h1");
    first_question.classList.add("about_q");
    first_question.innerText = "Who are we?";
    //container.appendChild(first_question);

    const first_p = document.createElement("p");
    first_p.classList.add("about_p");
    first_p.innerText = "We are a team of friends that had a dream: to make the best pizzeria in town. We managed to succeed so here we are, welcome to Alexander's pizzeria, the only pizza chain restaurant that has a Michelin Star";
    //container.appendChild(first_p)
    
    const div1 = document.createElement("div");
    container.appendChild(div1);
    div1.appendChild(first_question);
    div1.appendChild(first_p);


    const second_question = document.createElement("h1");
    second_question.classList.add("about_q");
    second_question.innerText = "We are we located?";
    //container.appendChild(second_question);

    const second_p = document.createElement("p");
    second_p.classList.add("about_p");
    second_p.innerText = "We are located all across the world, so we probably have a restaurant open near you!";
    //container.appendChild(second_p)

    const div2 = document.createElement("div");
    container.appendChild(div2);
    div2.appendChild(second_question);
    div2.appendChild(second_p);

    const third_question = document.createElement("h1");
    third_question.classList.add("about_q");
    third_question.innerText = "Is it true that we have the best pizza and pizza dough ever to be tasted by humankind?";
    //container.appendChild(third_question);

    const third_p = document.createElement("p");
    third_p.classList.add("about_p");
    third_p.innerText = "Of course! Come and see for yourself! Bon appetit!";
    //container.appendChild(third_p)

    const div3 = document.createElement("div");
    container.appendChild(div3);
    div3.appendChild(third_question);
    div3.appendChild(third_p);
}

export default createAbout;