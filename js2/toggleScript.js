var shown = "oldPortfolioImage";
var n = "";

function toggleImagesLarge() {        
    if (document.getElementById('largeSwitch').checked) {
        showImage("newPortfolioImage");
    } else {
        showImage("oldPortfolioImage");
    }
}

function toggleImagesSmall() {   
    if (document.getElementById('smallSwitch').checked) {
        showImage("newPortfolioImage");
    } else {
        showImage("oldPortfolioImage");
    }
}

function showImage(n) {
    var x = document.getElementsByClassName(shown);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    var y = document.getElementsByClassName(n);
    var j;
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "block";
    }

    shown = n;
}