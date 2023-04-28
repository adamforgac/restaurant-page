function createMenu() {
    const content = document.querySelector("#content");
    content.style.background = "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(images/salad-in-dark.jpg)"
    content.style.backgroundRepeat = "no-repeat";
    content.style.backgroundSize = "cover";
    content.style.backgroundPosition = "center";
    content.style["align-items"] = "center";


    function addDiv(newParent, newClass) {
        const div = document.createElement("div");
        newParent.appendChild(div).classList.add(newClass);
    }

    function addText(element, content, parent) {
        const newElement = document.createElement(element);
        newElement.textContent = content;
        parent.appendChild(newElement);
    }

    const restPage = document.querySelector(".rest-page");

    document.querySelector(".fa-solid").style.color = "white";
    document.querySelector(".opt1 p").style.color = "white";
    document.querySelector(".opt2 p").style.color = "white";
    document.querySelector(".opt3 p").style.color = "white";

    addDiv(restPage, "menu-list");
    const main = document.querySelector(".menu-list");

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

    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus et lorem id felis nonummy placerat.", offerOneText);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus et lorem id felis nonummy placerat.", offerTwoText);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus et lorem id felis nonummy placerat.", offerThreeText);

    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus et lorem id felis nonummy placerat.", offerOneTextMob);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus et lorem id felis nonummy placerat.", offerTwoTextMob);
    addText("p", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus et lorem id felis nonummy placerat.", offerThreeTextMob);
}


export default createMenu;
