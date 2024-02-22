// Pradžioje apibrėžiame pagrindines funkcijas
function openTab(tabName, closeButtonId) {
    // Uždarome visus tab'us
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Atvaizduojame pasirinktą tab'ą
    document.getElementById(tabName).style.display = "block";

    // Rodykime mygtuką tab'o uždarymui
    document.getElementById(closeButtonId).style.display = "block";
}

// Pridedame šį kodą, kad iš pradžių visi tab'ai būtų paslėpti
var tabs = document.getElementsByClassName("tab-content");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
}

// Pridėta nauja funkcija, kuri išjungia tab'ą
function disableTab(tabName, closeButtonId) {
    // Išjungiame pasirinktą tab'ą
    document.getElementById(tabName).style.display = "none";

    // Slėpiame mygtuką tab'o uždarymui
    document.getElementById(closeButtonId).style.display = "none";
}