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
    if (pointCount >= 200 && shopButtonArray.includes("shopButtonNumberTwo") === false) {
        multiplier = multiplier * 2;
        pointCount -= 200;
        shopButtonArrayInput("shopButtonNumberTwo");
        updatePoints();
        updateMulti();
    };
})
