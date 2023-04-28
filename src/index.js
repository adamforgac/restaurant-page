import initializeWeb from "./web";
import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";


initializeWeb();
// createMenu();

const home = document.querySelector(".opt1");
const menu = document.querySelector(".opt2");
const about = document.querySelector(".opt3");
const restPage = document.querySelector(".rest-page");
const content = document.querySelector("#content")


home.addEventListener("click", () => {
    restPage.innerHTML = "";
    createHome()
    console.log("works")
})

menu.addEventListener("click", () => {
    restPage.innerHTML = "";
    createMenu();
    console.log("works")
})

about.addEventListener("click", () => {
    content.innerHTML = "";
    createAbout();
    console.log("works")
})








