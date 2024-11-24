var sel1 = document.getElementById("uniT1");
var sel2 = document.getElementById("uniT2");

sel1.addEventListener("change", check);
sel2.addEventListener("change", check);

function check() {
    var selOpt1 = sel1.options[sel1.selectedIndex].value;
    var selOpt2 = sel2.options[sel2.selectedIndex].value;

    if (selOpt1 === "Binary" && selOpt2 === "decimal") {
        window.open("binary2dec.html");
    }
}


