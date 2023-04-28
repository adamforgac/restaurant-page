function initializeWeb() {
    const content = document.querySelector("#content");

    content.style.background = "url(images/back3.jpg)";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.backgroundPosition = "center";
    content.style["align-items"] = "normal";

    function addDiv(newParent, newClass) {
        const div = document.createElement("div");
        newParent.appendChild(div).classList.add(newClass);
    }

    function addText(element, content, parent) {
        const newElement = document.createElement(element);
        newElement.textContent = content;
        parent.appendChild(newElement);
    }

    function createImage(src, className, parent) {
        const newElement = document.createElement("img");
        newElement.src = src;
        newElement.classList.add(className);
        parent.appendChild(newElement);
    }

    addDiv(content, "nav");
    addDiv(content, "rest-page");

    const nav = document.querySelector(".nav");
    const restPage = document.querySelector(".rest-page");
    addDiv(nav, "options");
    addDiv(nav, "search");

    addDiv(restPage, "main");
    addDiv(restPage, "footer");

    const main = document.querySelector(".main");
    const footer = document.querySelector(".footer");
    const options = document.querySelector(".options");
    const search = document.querySelector(".search");

    addDiv(options, "logo");
    addDiv(options, "opt1");
    addDiv(options, "opt2");
    addDiv(options, "opt3");

    const logo = document.querySelector(".logo");
    const opt1 = document.querySelector(".opt1");
    const opt2 = document.querySelector(".opt2");
    const opt3 = document.querySelector(".opt3");

    logo.appendChild(document.createElement("i"));
    logo.querySelector("i").classList.add("fa-solid");
    logo.querySelector("i").classList.add("fa-bowl-food");
    opt1.appendChild(document.createElement("p"));
    opt2.appendChild(document.createElement("p"));
    opt3.appendChild(document.createElement("p"));

    opt1.querySelector("p").textContent = "Home";
    opt2.querySelector("p").textContent = "Menu";
    opt3.querySelector("p").textContent = "About";

    addDiv(search, "search-icon");

    const searchIcon = document.querySelector(".search-icon");
    searchIcon.appendChild(document.createElement("i"));
    searchIcon.querySelector("i").classList.add("fa-solid");
    searchIcon.querySelector("i").classList.add("fa-magnifying-glass");


    addDiv(main, "main-text");
    addDiv(main, "main-food");

    const mainText = document.querySelector(".main-text")

    addDiv(mainText, "status");
    const status = document.querySelector(".status");
    addDiv(mainText, "heading");
    const heading = document.querySelector(".heading");
    addDiv(mainText, "description");
    const description = document.querySelector(".description");
    addDiv(mainText, "description2");
    const description2 = document.querySelector(".description2");
    addDiv(mainText, "order-button");
    const orderButton = document.querySelector(".order-button");

    addText("p", "CHEF'S SPECIAL", status);
    heading.appendChild(document.createElement("h2")).innerHTML = "Freshness<br>in every bite";
    description.appendChild(document.createElement("p")).innerHTML = "Healthy Sashimi Tuna Bites With Sashimi Grade<br>Tuna, 110 calories and 13g protein";
    description2.appendChild(document.createElement("p")).innerHTML = "Healthy Sashimi Tuna Bites<br>With Sashimi Grade Tuna,<br>110 calories and 13g protein";
    addText("button", "Download recipe", orderButton);

    const mainFood = document.querySelector(".main-food")

    createImage("images/salad.png", "salad", mainFood);
    createImage("images/tomato1.png", "tomato", mainFood);
    createImage("images/salad-leaf1.png", "leafe", mainFood);
    createImage("images/salad-leaf2.png", "leafe2", mainFood);
    createImage("images/sushi3.png", "sushi-main", mainFood);
    createImage("images/more nuts1.png", "nuts-main", mainFood);

    addDiv(footer, "sushi-image");
    addDiv(footer, "leafes-image");

    const sushiImage = document.querySelector(".sushi-image");
    createImage("images/sushi3.png", "sushi", sushiImage);
    createImage("images/more nuts1.png", "nuts", sushiImage);
} 

export default initializeWeb;