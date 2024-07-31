let temperature = prompt("What is the Temperature ?");
 let img = document.getElementById("fan")

if (temperature <= 0) {
    img.src = 'cold.png';
    
} else if (temperature < 40) {
    img.src = 'nice.png';

} else {
    img.src = 'sunny.png';
}