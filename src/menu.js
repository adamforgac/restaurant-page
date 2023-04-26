function createMenu() {
    const content = document.querySelector("#content");
    addDiv(content, "menu-wrapper");

    function addDiv(newParent, newClass) {
        const div = document.createElement("div");
        newParent.appendChild(div).classList.add(newClass);
    }

    function addText(element, content, parent) {
        const newElement = document.createElement(element);
        newElement.textContent = content;
        parent.appendChild(newElement);
    }

    const wrapperMenu = document.querySelector(".menu-wrapper");
    addDiv(wrapperMenu, "nav-menu");
    addDiv(wrapperMenu, "menu-list");

    const navMenu = document.querySelector(".nav-menu");
    const main = document.querySelector(".menu-list");
    console.log(main);
    addDiv(navMenu, "options");
    addDiv(navMenu, "search");

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

    addDiv(main, "offer1");
    addDiv(main, "offer2");
    addDiv(main, "offer3");
    
    const offer1 = document.querySelector(".offer1");
    const offer2 = document.querySelector(".offer2");
    const offer3 = document.querySelector(".offer3");

    addDiv(offer1, "offer1-heading");
    addDiv(offer1, "offer1-text");
    addDiv(offer1, "offer1-text-mobile");

    addDiv(offer2, "offer2-heading");
    addDiv(offer2, "offer2-text");
    addDiv(offer2, "offer2-text-mobile");

    addDiv(offer3, "offer3-heading");
    addDiv(offer3, "offer3-text");
    addDiv(offer3, "offer3-text-mobile");

    const offerOneHeading = document.querySelector(".offer1-heading");
    const offerTwoHeading = document.querySelector(".offer2-heading");
    const offerThreeHeading = document.querySelector(".offer3-heading");

    const offerOneText = document.querySelector(".offer1-text"); 
    const offerTwoText = document.querySelector(".offer2-text"); 
    const offerThreeText = document.querySelector(".offer3-text"); 

    const offerOneTextMob = document.querySelector(".offer1-text-mobile"); 
    const offerTwoTextMob = document.querySelector(".offer2-text-mobile"); 
    const offerThreeTextMob = document.querySelector(".offer3-text-mobile"); 

    addText("h2", "Green Bean Salad", offerOneHeading);
    addText("h2", "Crunchy Ribbon Salad", offerTwoHeading);
    addText("h2", "Quinoa Lentil Salad", offerThreeHeading);

    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing<br>elit. Phasellus et lorem id felis nonummy placerat.", offerOneText);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing<br>elit. Phasellus et lorem id felis nonummy placerat.", offerTwoText);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing<br>elit. Phasellus et lorem id felis nonummy placerat.", offerThreeText);

    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing<br>elit. Phasellus et lorem id felis nonummy placerat.", offerOneTextMob);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing<br>elit. Phasellus et lorem id felis nonummy placerat.", offerTwoTextMob);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing<br>elit. Phasellus et lorem id felis nonummy placerat.", offerThreeTextMob);
}

export default createMenu;
