function createAbout() {
    const content = document.querySelector("#content");
    content.style.background = "#181719";
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.backgroundPosition = "center";
    content.style["align-items"] = "center";

    const nav = document.querySelector(".nav");
    nav.style.borderBottom = "1px solid white";

    function addDiv(newParent, newClass) {
        const div = document.createElement("div");
        newParent.appendChild(div).classList.add(newClass);
    }

    function addText(element, content, parent) {
        const newElement = document.createElement(element);
        newElement.textContent = content;
        parent.appendChild(newElement);
    }

    function createImage(src, parent) {
        const newElement = document.createElement("img");
        newElement.src = src;
        parent.appendChild(newElement);
    }

    const restPage = document.querySelector(".rest-page");

    document.querySelector(".fa-solid").style.color = "white";
    document.querySelector(".opt1 p").style.color = "white";
    document.querySelector(".opt2 p").style.color = "white";
    document.querySelector(".opt3 p").style.color = "white";

    addDiv(restPage, "about-body");
    const main = document.querySelector(".about-body");

    addDiv(main, "about-content");
    addDiv(main, "about-photo");
    
    const aboutContent = document.querySelector(".about-content");
    const aboutPhoto = document.querySelector(".about-photo");

    addDiv(aboutContent, "about-heading");
    addDiv(aboutContent, "about-text");

    createImage("images/about-back2.jpg", aboutPhoto);

    const aboutHeading = document.querySelector(".about-heading");
    const aboutText = document.querySelector(".about-text");

    addDiv(aboutHeading, "section-heading");
    addDiv(aboutHeading, "heading-name");

    const sectionHeading = document.querySelector(".section-heading");
    const headingName = document.querySelector(".heading-name");

    addText("h2", "ABOUT US", sectionHeading);
    headingName.appendChild(document.createElement("h1"));
    document.querySelector(".heading-name h1").innerHTML = "Totally Random<br>Restaurant";

    addDiv(aboutText, "about-par");
    addDiv(aboutText, "about-button")
    
    const aboutPar = document.querySelector(".about-par");
    const aboutButton = document.querySelector(".about-button");

    addText("p", "The dailies? You know -- milk, bread, eggs -- the dailies. These are the things you eat that you find yourself running out each week (or each day) to purchase.", aboutPar);

    addText("button", "READ MORE", aboutButton);
}



export default createAbout
