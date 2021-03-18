let pointCount = 0;
let points = document.getElementById("points");
let updatePoints = () => {points.innerHTML = pointCount};
let pointsPerClick = document.getElementById("pointsPerClick");
let clickValue = 1;
let multiplier = 1;
let updateMulti = () => {pointsPerClick.innerHTML = clickValue * multiplier}
let clickerButton = document.getElementById("buto");
let shopButtonArray = [];
let shopButtonArrayInput = para => shopButtonArray.push(para);
let shopButton = document.getElementById("shopButtonOne");
let disappear = (para, cost) => {if (pointCount >= cost) {document.getElementById(para).style.display = "none"}};
let casino = document.getElementById("casinoButton");
casino.style.display = "none";

function shopClick(cost) {
    if (pointCount >= cost) {
        multiplier = multiplier * 2;
        pointCount -= cost;
        updatePoints();
        updateMulti();
    };
}
clickerButton.addEventListener('click', function() {
    pointCount = pointCount + (clickValue * multiplier);
    updatePoints();
})
shopButton.addEventListener("click", function() {
    if (pointCount >= 100 && shopButtonArray.includes("shopButtonNumberOne") === false) {
        multiplier = multiplier * 2;
        pointCount -= 100;
        shopButtonArrayInput("shopButtonNumberOne");
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButtonTwo").addEventListener("click", function() {
    if (pointCount >= 200) {
        multiplier = multiplier * 2;
        pointCount -= 200;
        shopButtonArrayInput("shopButtonNumberTwo");
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton3").addEventListener("click", function() {
    if (pointCount >= 400) {
        multiplier = multiplier * 2;
        pointCount -= 400;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton4").addEventListener("click", function() {
    if (pointCount >= 800) {
        multiplier = multiplier * 2;
        pointCount -= 800;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton5").addEventListener("click", function() {
    if (pointCount >= 1600) {
        multiplier = multiplier * 2;
        pointCount -= 1600;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton6").addEventListener("click", function() {
    if (pointCount >= 3200) {
        multiplier = multiplier * 2;
        pointCount -= 3200;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton7").addEventListener("click", function() {
    if (pointCount >= 6400) {
        multiplier = multiplier * 2;
        pointCount -= 6400;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton8").addEventListener("click", function() {
    if (pointCount >= 12800) {
        multiplier = multiplier * 2;
        pointCount -= 12800;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton9").addEventListener("click", function() {
    if (pointCount >= 25600) {
        multiplier = multiplier * 2;
        pointCount -= 25600;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton10").addEventListener("click", function() {
    if (pointCount >= 51200) {
        multiplier = multiplier * 2;
        pointCount -= 51200;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton11").addEventListener("click", function() {
    if (pointCount >= 102400) {
        multiplier = multiplier * 2;
        pointCount -= 102400;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButton12").addEventListener("click", function() {
    if (pointCount >= 204800) {
        multiplier = multiplier * 2;
        pointCount -= 204800;
        updatePoints();
        updateMulti();
    };
})
casino.addEventListener("click", function() {
    if (pointCount >= 500 && shopButtonArray.includes("casinoButton") === false) {
        pointCount -= 500;
        shopButtonArrayInput("casinoButton");
        updatePoints();
        casino.style.display = "none"
    }
})
function bought(requiredPoints,shopButtonName, mult) {
    if (pointCount >= requiredPoints && shopButtonArray.includes(shopButtonName) === false) {
        pointCount -= requiredPoints;
        multiplier = multiplier * mult
        updatePoints();
        updateMulti();
    }
}

