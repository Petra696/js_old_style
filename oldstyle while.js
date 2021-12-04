
//old style while
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
let text = "";

while (colors[i]) {
    text += colors[i] + "<br>";
    i++;
}
document.getElementById("demo").innerHTML = text;


