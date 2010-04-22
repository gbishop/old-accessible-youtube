/*
 * This file requires load_options.js to be loaded for it to work
 */

/*
 * Writes the current option settings to the cookie.
 * Takes as argument a pointer to the form that was changed.
 */
function saveOptions(node) {
    console.log("Saving options in form:");
    console.debug(node);
    for (var i in node.elements) {
        config.settings[node.elements[i].name] = getValue(node.elements[i]);
    }
    console.log("Writing info to cookie...");
    // I'm not sure when the cookie will expire. Need to figure that out.
    // currently trying {expires:365}
    dojo.cookie(config.cookie, dojox.json.ref.toJson(config.settings), {expires:365});
}

/*
 * Extracts the value of the setting controlled by the given node.
 */
function getValue(node) {
    return node[getValueAttr(node)];
    /*
    if (node.type == "checkbox") {
        return node.checked;
    }
    else if (node.type == "text") {
        return node.value;
    }
    */
}

/*
 * Load some necessary dojo libraries.
 */
dojo.addOnLoad(function() {
    dojo.require("dojo.cookie");
    dojo.require("dojox.json.ref");
});

