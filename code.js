function buttonwork() {
    window.location.href = "bj/index.html";
}


const dice = document.getElementById("dice");
const rollButton = document.getElementById("rollButton");

rollButton.addEventListener("click", () => {
    rollDice();
});

// für wert des rolls. maybe upgrade d20
const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    dice.textContent = getDiceFace(randomNumber);
    
    //dice.style.transform = "rotate(360deg)";
    //setTimeout(() => {
    //    dice.style.transform = "rotate(0deg)";
    //}, 200);
}





const getDiceFace = (number) => {
    const faces = ["D20", "D201", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
    return faces[number];

}
