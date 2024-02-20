PluginAPI = ModAPI;

var isToggled = false; //stores whether the plugin is on or off

const win = window.getElementByTagName("head");

const GUI = win.document.createElement('div');


window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") {
        isToggled = !isToggled;
        if (isToggled){
          GUI.innerHTML
        } else {
            
        }
    }
});
