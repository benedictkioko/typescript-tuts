"use strict";
//  use either if check button or the !!
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", () => {
        console.log("clicked!");
    });
}
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics("the data");
//# sourceMappingURL=app.js.map