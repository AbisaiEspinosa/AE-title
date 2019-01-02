define([], function() {
    return function($element, layout) {
        // texto
        var span = document.createElement("span");

        span.className = "container";

        $element.html("");

        span.innerHTML = layout.text;
        span.style.backgroundColor = layout.backgroundColor.color;
        span.style.color = layout.textColor.color;

        var textSize = layout.textSize;
        var italic = layout.isItalic ? "italic " : "";
        var bold = layout.isBold ? "bold " : "";
        var font = layout.textFont;

        span.style.font = italic.concat(bold, textSize, "px ", font);

        span.style.height = "100%";
        span.style.width = "100%";

        span.style.justifyContent = layout.textHorizontalAlign;
        span.style.alignItems = layout.textVerticalAlign;

        $element.append(span);
        /*
                // Tell qlik that rendering has finished
                // Needed for exporting data
                if (qlik.Promise) {
                    return qlik.Promise.resolve();
                } else {
                    return;
                }
        */

    };
});