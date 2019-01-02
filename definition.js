define([], function() {
    'use strict';

    // Arrays of available fonts
    var fonts = [
        "Georgia, serif",
        "Courier New, Courier, monospace",
        "Comic Sans MS, cursive, sans-serif",
        "Impact, Charcoal, sans-serif",
        "Times New Roman, Times, serif",
        "Arial, Helvetica, sans-serif",
        "Arial Black, Gadget, sans-serif",
        "Lucida Console, Monaco, monospace"
    ];

    var x = [];

    for (var i in fonts) {
        var i = {
            value: fonts[i],
            label: fonts[i].split(",")[0]
        };
        x.push(i);
    }

    // Title field
    var myTextBox = {
        type: "string",
        ref: "text",
        label: "Text ",
        expression: "optional"
    };

    var myTextColor = {
        type: "object",
        ref: "textColor",
        label: "Text Color",
        component: "color-picker",
        dualOutput: true,
        defaultValue: {
            index: -1,
            color: "#000000"
        }
    };

    var myBackgroundColor = {
        type: "object",
        ref: "backgroundColor",
        label: "Background color",
        component: "color-picker",
        dualOutput: true,
        defaultValue: {
            index: -1,
            color: "#ffffff"
        }
    };

    var myTextSize = {
        type: "number",
        component: "slider",
        ref: "textSize",
        label: "Text size",
        defaultValue: 10,
        min: 10,
        max: 40,
        step: 2
    };

    var myTextItalic = {
        type: "boolean",
        label: "Italic",
        ref: "isItalic",
        defaultValue: false
    };

    var myTextBold = {
        type: "boolean",
        label: "Bold",
        ref: "isBold",
        defaultValue: false
    };

    var myFont = {
        type: "string",
        component: "dropdown",
        label: "Font",
        ref: "textFont",
        options: x
    };

    var myHorizontalAlign = {
        type: "string",
        component: "buttongroup",
        label: "Horizontal Align",
        ref: "textHorizontalAlign",
        defaultValue: "center",
        options: [{
            value: "flex-start",
            label: "Left",
            tooltip: "Select for left"
        }, {
            value: "center",
            label: "Center",
            tooltip: "Center"
        }, {
            value: "flex-end",
            label: "Right",
            tooltip: "Select for right"
        }]
    };

    var myVerticalAlign = {
        type: "string",
        component: "buttongroup",
        label: "Vertical Align",
        ref: "textVerticalAlign",
        defaultValue: "center",
        options: [{
            value: "flex-start",
            label: "Top",
            tooltip: "Select for left"
        }, {
            value: "center",
            label: "Center",
            tooltip: "Center"
        }, {
            value: "flex-end",
            label: "Bottom",
            tooltip: "Select for right"
        }]
    };

    var mySettings = {
        uses: "settings",
        items: {
            titleHeader: {
                type: "items",
                label: "Title",

                items: {
                    textBox: myTextBox
                }
            },

            textSettings: {
                type: "items",
                label: "Text settings",

                items: {
                    textColor: myTextColor,
                    backgroundColor: myBackgroundColor,
                    textSize: myTextSize,
                    isItalic: myTextItalic,
                    isBold: myTextBold,
                    textFont: myFont,
                    horizontalAlign: myHorizontalAlign,
                    verticalAlign: myVerticalAlign
                }
            },

            about: {
                type: "items",
                label: "About",

                items: {
                    author: {
                        label: "Author: Abisai Espinosa",
                        component: "text"
                    },

                    email: {
                        label: "Email: abisai.es@outlook.com",
                        component: "text"
                    }
                }
            }
        }
    };

    return {
        type: "items",
        component: "accordion",
        items: {
            settings: mySettings
        }
    };
});