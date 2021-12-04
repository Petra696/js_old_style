
//old style for
const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
let text = "";

for (; colors[i];) {
    text += colors[i] + "<br>";
    i++;
}
document.getElementById("demo").innerHTML = text;