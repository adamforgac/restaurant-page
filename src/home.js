function createHome() {
    const content = document.querySelector("#content");

    content.style.background = "url(images/back3.jpg)";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.backgroundPosition = "center";
    content.style["align-items"] = "normal";
    const nav = document.querySelector(".nav");
    nav.style.borderBottom = "none";

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

    
    const restPage = document.querySelector(".rest-page");

    document.querySelector(".fa-solid").style.color = "black";
    document.querySelector(".opt1 p").style.color = "black";
    document.querySelector(".opt2 p").style.color = "black";
    document.querySelector(".opt3 p").style.color = "black";

    addDiv(restPage, "main");
    addDiv(restPage, "footer");

    const main = document.querySelector(".main");
    const footer = document.querySelector(".footer");

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

export default createHome;