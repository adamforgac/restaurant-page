function createAbout() {
    const content = document.querySelector("#content");
    addDiv(content, "about-wrapper");

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

    const wrapperMenu = document.querySelector(".about-wrapper");
    addDiv(wrapperMenu, "nav-about");
    addDiv(wrapperMenu, "about-body");

    const navAbout = document.querySelector(".nav-about");
    const main = document.querySelector(".about-body");
    addDiv(navAbout, "options");
    addDiv(navAbout, "search");

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
