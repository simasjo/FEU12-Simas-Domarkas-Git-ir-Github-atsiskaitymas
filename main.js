function openTab(tabName, closeButtonId) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(closeButtonId).style.display = "block";
}
var tabs = document.getElementsByClassName("tab-content");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
}
function disableTab(tabName, closeButtonId) {
    document.getElementById(tabName).style.display = "none";
    document.getElementById(closeButtonId).style.display = "none";
}

