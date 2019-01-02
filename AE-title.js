define([
        "./definition",
        "./paint",
        "./support",
        "text!./style.css"
    ],

    function(myDefinition, myPaint, mySupport, ccsText) {
        "use strict";

        // Create style element
        var style = document.createElement("style");

        // Set the style element content
        style.innerHTML = ccsText;

        // Add the style to the header of the page
        document.querySelector("head").appendChild(style);

        return {
            definition: myDefinition,
            paint: myPaint,
            support: mySupport
        };
    });