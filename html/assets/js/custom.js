// right-sidebar
function open_aside() {
    "use strict";
    const sidepanel = document.getElementById("mySidenav");
    if (sidepanel) {
        sidepanel.style.left = "0";
    } else {
        console.error("Error: Side panel element not found!");
    }
}
function close_aside() {
    "use strict";
    const sidepanel = document.getElementById("mySidenav");
    if (sidepanel) {
        sidepanel.style.left = "-355px";
    } else {
        console.error("Error: Side panel element not found!");
    }
}

let slid = document.getElementById("slid-btn");
if (slid) {
    slid.onclick = () => {
        let dropdwon = document.getElementById("slid-drop");
        dropdwon.classList.toggle("aside-dropdwon");
    };
} else {
    console.error("Error: Slide button element not found!");
}
// End of right-sidebar

