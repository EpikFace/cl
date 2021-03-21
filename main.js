let pointCount = 0;
let points = document.getElementById("points");
let updatePoints = () => {points.innerHTML = pointCount};
let pointsPerClick = document.getElementById("pointsPerClick");
let clickValue = 1;
let prestigeMulti = 1;
let multiplier = 1 * prestigeMulti;
let updateMulti = () => {multiplier = multiplier * prestigeMulti; pointsPerClick.innerHTML = clickValue * multiplier;}
let PP = document.getElementById('PP');
let PPCount = document.getElementById("PPCount");
let updatePP = () => {PP.innerHTML = prestigePointCount}
let prestigePointCount = 0;
let clickerButton = document.getElementById("buto");
let shopButtonArray = [];
let shopButtonArrayInput = para => shopButtonArray.push(para);
let shopButton = document.getElementById("shopButtonOne");
let disappear = (para, cost) => {if (pointCount >= cost) {document.getElementById(para).style.display = "none"}};
let pDisappear = (para, cost) => {if (prestigePointCount >= cost) {document.getElementById(para).style.display = "none"}}
let casino = document.getElementById("casinoButton");
let rebirthButton = document.getElementById("rebirthButton")
let rebirthDiv = document.getElementById("rebirthDiv")
let shopDiv = document.getElementById("shopDiv")

function thingsThatShouldRunWhenGameStarts() {
    rebirthDiv.style.display = "none";
    casino.style.display = "none";
    PPCount.style.display = "none";
    shopDiv.style.display = "grid"
    
}
thingsThatShouldRunWhenGameStarts();
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
    if (pointCount >= 100) {
        multiplier = multiplier * 2;
        pointCount -= 100;
        updatePoints();
        updateMulti();
    };
})
document.getElementById("shopButtonTwo").addEventListener("click", function() {
    if (pointCount >= 200) {
        multiplier = multiplier * 2;
        pointCount -= 200;
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
        rebirthDiv.style.display = "grid"
        PPCount.style.display = "grid"
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
rebirthButton.addEventListener("click", function() {
    if (pointCount >= 1024000) {
        pointCount = 0;
        multiplier = 1;
        multiplier = multiplier * prestigeMulti;
        updatePoints();
        updateMulti();
        prestigePointCount = 1 * prestigeMulti;
        updatePP();
    };
})
document.getElementById("rebirthMulti1").addEventListener("click", function() {
    if (prestigePointCount >= 1) {
        prestigePointCount -= 1;
        prestigeMulti = prestigeMulti * 2;
        updatePP();
        updateMulti();
        rebirthDiv.style.display = "none"
        document.getElementById("mainDiv").style = "display:grid"; 
    }
})
