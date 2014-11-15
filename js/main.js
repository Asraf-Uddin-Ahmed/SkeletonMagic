
var totalCard = 10;
var flag = [];

var INIT = 0;
var PROCESSING = 1;
var RESULT = 2;
var status = INIT;


function showNewCards() {
    for (var I = 0; I < totalCard;) {
        var no = Math.floor(Math.random() * 52);
        if (flag[no] == false) {
            flag[no] = true;
            var objImg = $("#card" + I);
            var path = "image\\cards\\" + no + ".png";
            objImg.attr("src", path);
            I++;
        }
    }
}


function showMessage(instructionMessage, progressMessage) {
    $('#instructionDiv').typeText("write", {
        message: instructionMessage,
        newLine: true,
        afterTextType: function () {
            $('#progressSpan').typeText("toggle", {
                toggleMessageArray: [progressMessage],
                typeSpeed: 300,
                backspaceSpeed: 300,
                toggleLoop: true
            });
        }
    });
}

function initialization() {
    for (var I = 0; I < 52; I++)
        flag[I] = false;
    showNewCards();
    showMessage("ChOoSE a CarD\npResS aNY KeY", "...");
}

function showResult() {
    showNewCards();
    showMessage("sEE, I pUt OuT tHE cARd\npResS aNY KeY", "...");
    status = RESULT;
}

function showPreResult() {
    var path = "image\\DancingSkeleton.gif";
    for (var I = 0; I < totalCard; I++) {
        var objImg = $("#card" + I);
        objImg.attr("src", path);
    }
    showMessage("Wait", "...");
    setTimeout(showResult, 5000);
}



$(function () {

    initialization();

    $(document).keypress(function () {
        if (status == INIT) {
            status = PROCESSING;
            showPreResult();
        } else if (status == RESULT) {
            status = INIT;
            initialization();
        }
    });

});