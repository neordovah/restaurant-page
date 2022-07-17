function change_background() {

    const big_img = document.getElementById("big-img");

    for(let i = 0; i < 4; i++) {
        if(i == 4) {i == 0};
        big_img.classList.remove("background-0");
        big_img.classList.remove("background-1");
        big_img.classList.remove("background-2");
        big_img.classList.remove("background-3");
        big_img.classList.add(`background-${i}`)
    }
}

export default change_background;