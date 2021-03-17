let pointCount = 0;
let points = document.getElementById("points");
let updatePoints = () => {points.innerHTML = pointCount};
let clickValue = 1;
let multiplier = 1;
let clickerButton = document.getElementById("buto");
let shopButtonArray = [];
let shopButtonArrayInput = para => shopButtonArray.push(para);
let shopButton = document.getElementById("shopButtonOne");

clickerButton.addEventListener('click', function() {
    pointCount = pointCount + (clickValue * multiplier);
    updatePoints();
})
shopButton.addEventListener("click", function() {
    if (pointCount >= 100) {
        multiplier = multiplier * 2;
        pointCount -= 100;
        document.getElementById("shopButtonOneText").innerHTML = `(2X) Purchased!`
        updatePoints();
    };
})
document.getElementById("shopButtonTwo").addEventListener("click", function() {
    if (pointCount >= 200 && shopButtonArray.includes("shopButtonNumberTwo") === false) {
        multiplier = multiplier * 2;
        pointCount -= 200;
        document.getElementById("shopButtonTwoText").innerHTML = `(2X) Purchased!`
        shopButtonArrayInput("shopButtonNumberTwo");
        updatePoints();
    };
})