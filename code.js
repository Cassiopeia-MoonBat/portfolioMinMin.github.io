

window.addEventListener("load", ready)


function ready() {
    fetch("visitcounter.txt")
        .then((res) => res.text())
        .then((text) => { 
            var currentCount = Number(text); 
            currentCount = currentCount + 1;
            text = String(currentCount);
            console.log(text);

        })
        .catch((e) => console.error(e));
}



function buttonwork() {
    window.location.href = "bj/index.html";
}

function buttonItch() {
    window.location.href = "https://minaluna.itch.io/thosewhoremained";
}

const dice = document.getElementById("d20");
const rollButton = document.getElementById("rollButton");

rollButton.addEventListener("click", () => {
    rollDice();
});

// für wert des rolls. maybe upgrade d20
const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    //dice.textContent = getDiceFace(randomNumber);
    dice.src = "d20/D20_" + randomNumber + ".png";
    //dice.style.transform = "rotate(360deg)";
    //setTimeout(() => {
    //    dice.style.transform = "rotate(0deg)";
    //}, 200);
}





// const getDiceFace = (number) => {
//     const faces = ["D20", "D201", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
//     return faces[number];

// }

