"use strict"
// Variables for containers
const container = document.getElementById("section-container-title");
const container1 = document.getElementById("section-container-title-1");
const container2 = document.getElementById("section-container-title-2");
const container3 = document.getElementById("section-container-title-3");
const container4 = document.getElementById("section-container-title-4");
const navBar = document.getElementById("nav-bar");
const navUnderlineBar = document.getElementById("bar")
const link1 = document.getElementById("nav-link1");
const link2 = document.getElementById("nav-link2");
const link3 = document.getElementById("nav-link3");
const link4 = document.getElementById("nav-link4");
const link5 = document.getElementById("nav-link5")

window.onscroll = function navColour() {
    // variables containing the positions of the section-containers
    const container1Position = container1.offsetTop;
    const container2Position = container2.offsetTop;
    const container3Position = container3.offsetTop;
    const container4Position = container4.offsetTop;
    // Variable containing the scroll position of the page
    let scrollPosition = document.documentElement.scrollTop;

    // if else statement that will change the styling of the nav based on which container is in view
    // If the scroll position is greater than the container position then the styles are changed.
    if (scrollPosition < container1Position) {
        navBar.style.backgroundColor = "rgb(19, 19, 20)";
        navBar.style.transition = "all 0.2s ease-in";
    }
    // Using && ensures that styling is only executed if scroll position is within container 1, but is not executed after moving into container 2 (Both must be true)
    else if (scrollPosition > container1Position && scrollPosition < container2Position) {
        navBar.style.backgroundColor = "rgb(236, 29, 83)";
        navBar.style.transition = "all 0.2s ease-in";
        link1.style.color = "rgb(252, 249, 250)";
        link2.style.color = "rgb(252, 249, 250)";
        link3.style.color = "rgb(252, 249, 250)";
        link4.style.color = "rgb(252, 249, 250)";
        link5.style.color = "rgb(252, 249, 250)";
        navUnderlineBar.style.backgroundColor = "rgb(252, 249, 250)";
    }
    else if (scrollPosition > container2Position && scrollPosition < container3Position) {
        navBar.style.backgroundColor = "rgb(252, 249, 251)";
        navBar.style.transition = "all 0.2s ease-in";
        link1.style.color = "rgb(19, 19, 20)";
        link2.style.color = "rgb(19, 19, 20)";
        link3.style.color = "rgb(19, 19, 20)";
        link4.style.color = "rgb(19, 19, 20)";
        link5.style.color = "rgb(19, 19, 20)";
        navUnderlineBar.style.backgroundColor = "rgb(19, 19, 20)";
    }
    else if (scrollPosition > container3Position && scrollPosition < container4Position) {
        navBar.style.backgroundColor = "rgb(222, 117, 0)";
        navBar.style.transition = "all 0.2s ease-in";
        link1.style.color = "rgb(252, 249, 251)";
        link2.style.color = "rgb(252, 249, 251)";
        link3.style.color = "rgb(252, 249, 251)";
        link4.style.color = "rgb(252, 249, 251)";
        link5.style.color = "rgb(252, 249, 251)";
        navUnderlineBar.style.backgroundColor = "rgb(252, 249, 251)";
    }
    else if (scrollPosition > container4Position) {
        navBar.style.backgroundColor = "rgb(238, 1, 1)";
        navBar.style.transition = "all 0.2s ease-in";
        link1.style.color = "rgb(252, 249, 251)";
        link2.style.color = "rgb(252, 249, 251)";
        link3.style.color = "rgb(252, 249, 251)";
        link4.style.color = "rgb(252, 249, 251)";
        link5.style.color = "rgb(252, 249, 251)";
        navUnderlineBar.style.backgroundColor = "rgb(252, 249, 251)";
    }
}
