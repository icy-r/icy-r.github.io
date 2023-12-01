var toggleBtn = document.getElementById("toggle-btn");
var root = document.documentElement;
var body = document.body;
// var form1 = document.getElementById("docform");
// var form = document.getElementById("docForm");

if (getCookie("theme") == null) {
    setCookie("theme", "dark", 30);
}

toggleBtn.addEventListener("click", ()=>{
    if (getCookie("theme") == "light") {
        setCookie("theme", "dark", 30);
    } else {
        setCookie("theme", "light", 30);
    }
    setTheme();
});
setTheme();

function setTheme() {
    if (getCookie("theme") == "light") {
        toggleBtn.name = "sunny";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.querySelector("#logo").style.mixBlendMode = "unset";

        root.style.setProperty('--container-bg-color','#ebebeb');
        root.style.setProperty('--text-color-w3','#2e2e2e');
        root.style.setProperty('--text-color-w2','#616161');
        root.style.setProperty('--tag-bg-color','#cbcbcb');
        root.style.setProperty('--header-black','#ffffff');
        root.style.setProperty('--background-color','#ffffff');
        root.style.backgroundColor = "#ffffff";
        // form1.style.setProperty('--background-color','#ffffff');
        // form1.style.setProperty('--background-color','#ffffff');
    } else {
        toggleBtn.name = "moon";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector("#logo").style.mixBlendMode = "difference";

        root.style.setProperty('--container-bg-color','#2f2f2f');
        root.style.setProperty('--text-color-w2','#d5d5d5');
        root.style.setProperty('--text-color-w3','#c0c0c0');
        root.style.setProperty('--tag-bg-color','#3a3a3a');
        root.style.setProperty('--header-black','#1f1f1f');
        root.style.setProperty('--background-color','#1f1f1f');
        root.style.backgroundColor = "#1f1f1f";
        // form1.style.setProperty('--background-color','#1f1f1f');
        // form1.style.setProperty('--background-color','#1f1f1f');
    }
}
