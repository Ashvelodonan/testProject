let timerInterval;
let timerRunning = false;
let totalSeconds = 0;
let paused = false;
var resetBtnConfirm;
var startActivate = 0;
var defaultScoreOne = 0;
var defaultScoreTwo = 0;
var tablePartial = document.getElementById("tablePartial");
var minutes_input = document.getElementById("minutes_input");
var seconds_input = document.getElementById("seconds_input");
var minutesInput = parseInt(minutes_input.value);
var secondsInput = parseInt(seconds_input.value);
var form_customTime = document.getElementById("form_customTime");
var inputMinutes_custom = document.getElementById("inputMinutes_custom");
var inputSeconds_custom = document.getElementById("inputSeconds_custom");
var minutesCustom = parseInt(inputMinutes_custom.value);
var secondsCustom = parseInt(inputSeconds_custom.value);
var submitbtn_customTime = document.getElementById("submitbtn_customTime");
var maxMinutes = 2;
var maxSeconds = 60;
var minsInputDef = 0;
var secsInputDef = 0;
var overallWinner = document.getElementById("overallWinner");
var displayTime = document.getElementById("timer_outside").contentWindow.document.getElementById("timer_actual");
const scoreOne = document.getElementById("score1");
var inputScore1 = document.getElementById("inputscore1");
const scoreTwo = document.getElementById("score2");
var inputScore2 = document.getElementById("inputscore2");
var testButton = document.getElementById("test_button");
const startbtn = document.getElementById("start_btn");
const playbtn = document.getElementById("play_btn");
const stopbtn = document.getElementById("stop_btn");
const resetbtn = document.getElementById("reset_btn");
const nextbtn = document.getElementById("next_btn");
const savebtn = document.getElementById("save_btn");
const gameResetbtn = document.getElementById("gameReset_btn");
const submitCurrent = document.getElementById("submit_current_form");
const firstRound = document.getElementById("round1");
const secondRound = document.getElementById("round2");
const thirdRound = document.getElementById("round3");
const redAdd = document.getElementById("red_add");
const redMinus = document.getElementById("red_minus");
const blueAdd = document.getElementById("blue_add");
const blueMinus = document.getElementById("blue_minus");
var table_contents = document.getElementById("table_contents");
var scoreboard_table = document.getElementById("scoreboard_table");
var disarmA = document.getElementById("disarmA");
var disarmB = document.getElementById("disarmB");
var disarmC = document.getElementById("disarmC");
var disarmD = document.getElementById("disarmD");
var foulA = document.getElementById("foulA");
var foulB = document.getElementById("foulB");
var foulC = document.getElementById("foulC");
var foulD = document.getElementById("foulD");
var foulE = document.getElementById("foulE");
var foulF = document.getElementById("foulF");
var advPtA = document.getElementById("advPointA");
var advPtB = document.getElementById("advPointB");
var advPtC = document.getElementById("advPointC");
var advPtD = document.getElementById("advPointD");
var advPtE = document.getElementById("advPointE");
var advPtF = document.getElementById("advPointF");
//
var score1_R1 = document.getElementById("score1_R1");
var foul1_R1 = document.getElementById("foul1_R1");
var disarm1_R1 = document.getElementById("disarm1_R1");
var advPoint1_R1 = document.getElementById("advPoint1_R1");
var winner1_R1 = document.getElementById("winner1_R1");
var score2_R1 = document.getElementById("score2_R1");
var foul2_R1 = document.getElementById("foul2_R1");
var disarm2_R1 = document.getElementById("disarm2_R1");
var advPoint2_R1 = document.getElementById("advPoint2_R1");
var winner2_R1 = document.getElementById("winner2_R1");
//
var score1_R2 = document.getElementById("score1_R2");
var foul1_R2 = document.getElementById("foul1_R2");
var disarm1_R2 = document.getElementById("disarm1_R2");
var advPoint1_R2 = document.getElementById("advPoint1_R2");
var winner1_R2 = document.getElementById("winner1_R2");
var score2_R2 = document.getElementById("score2_R2");
var foul2_R2 = document.getElementById("foul2_R2");
var disarm2_R2 = document.getElementById("disarm2_R2");
var advPoint2_R2 = document.getElementById("advPoint2_R2");
var winner2_R2 = document.getElementById("winner2_R2");
//
var score1_R3 = document.getElementById("score1_R3");
var foul1_R3 = document.getElementById("foul1_R3");
var disarm1_R3 = document.getElementById("disarm1_R3");
var advPoint1_R3 = document.getElementById("advPoint1_R3");
var winner1_R3 = document.getElementById("winner1_R3");
var score2_R3 = document.getElementById("score2_R3");
var foul2_R3 = document.getElementById("foul2_R3");
var disarm2_R3 = document.getElementById("disarm2_R3");
var advPoint2_R3 = document.getElementById("advPoint2_R3");
var winner2_R3 = document.getElementById("winner2_R3");
//
var divisionCurrent = document.getElementById("division_current");
var categoryCurrent = document.getElementById("category_current");
var courtNoCurrent = document.getElementById("court_current");
var matchNoCurrent = document.getElementById("match_current");
var redFullCurrent = document.getElementById("fullname_red_current");
var blueFullCurrent = document.getElementById("fullname_blue_current");
var redGenderCurrent = document.getElementById("gender_red_current");
var redWeightCurrent = document.getElementById("weight_red_current");
var blueGenderCurrent = document.getElementById("gender_blue_current");
var blueWeightCurrent = document.getElementById("weight_blue_current");
var teamRedCurrent = document.getElementById("team_red_current");
var teamBlueCurrent = document.getElementById("team_blue_current");
var displayVS = document.getElementById("displayVS");
var fnamered = document.getElementById("first_name_red");
var mnamered = document.getElementById("middle_name_red");
var lnamered = document.getElementById("last_name_red");
var fnameblue = document.getElementById("first_name_blue");
var mnameblue = document.getElementById("middle_name_blue");
var lnameblue = document.getElementById("last_name_blue");
fnamered.value = "rfn";
mnamered.value = "rmn";
lnamered.value = "rln";
fnameblue.value = "bfn";
mnameblue.value = "bmn";
lnameblue.value = "bln";
var divisionInput = document.getElementById("division_input");
var categoryInput = document.getElementById("category_input");
var courtInput = document.getElementById("court_input");
var matchInput = document.getElementById("match_input");
var redGenderInput = document.getElementById("gender_red");
var redWeightInput = document.getElementById("weight_red");
var blueGenderInput = document.getElementById("gender_blue");
var blueWeightInput = document.getElementById("weight_blue");
var teamRedInput = document.getElementById("team_red");
var teamBlueInput = document.getElementById("team_blue");
var redNameDisplay = document.getElementById("red_name");
var blueNameDisplay = document.getElementById("blue_name");
var properFirstRed = fnamered.value[0].toUpperCase() + fnamered.value.slice(1).toLowerCase();
var properFirstBlue = fnameblue.value[0].toUpperCase() + fnameblue.value.slice(1).toLowerCase();
var properMiddleRed = mnamered.value[0].toUpperCase() + mnamered.value.slice(1).toLowerCase();
var properMiddleBlue = mnameblue.value[0].toUpperCase() + mnameblue.value.slice(1).toLowerCase();
var properLastRed = lnamered.value[0].toUpperCase() + lnamered.value.slice(1).toLowerCase();
var properLastBlue = lnameblue.value[0].toUpperCase() + lnameblue.value.slice(1).toLowerCase();
var playerNameRed = `${properFirstRed} ${properLastRed}`;
var playerNameBlue = `${properFirstBlue} ${properLastBlue}`;
var nameRedValue = playerNameRed;
var nameBlueValue = playerNameBlue;
//
var winnerName;
var winnerScore;
var winRed = 0;
var winBlue = 0;
var winRed1 = 0;
var winRed2 = 0;
var winRed3 = 0;
var winBlue1 = 0;
var winBlue2 = 0;
var winBlue3 = 0;
var subTotalFoul1 = 0;
var subTotalFoul2 = 0;
var advPoint1 = 0;
var advPoint2 = 0;
var disarm1 = 0;
var disarm2 = 0;
var subFinalScore1 = 0;
var subFinalScore2 = 0;
var finalScore = 0;
var currentRound = 1;
var valueFoulA = 0;
var valueFoulB = 0;
var valueFoulC = 0;
var valueFoulD = 0;
var valueFoulE = 0;
var valueFoulF = 0;
var disarmA_value = 0;
var disarmB_value = 0;
var disarmC_value = 0;
var disarmD_value = 0;
var advPtA_value = 0;
var advPtD_value = 0;
var advPtB_value = 0;
var advPtE_value = 0;
var advPtC_value = 0;
var advPtF_value = 0;
var advPoint1_R1_value = 0;
var advPoint2_R1_value = 0;
var advPoint1_R2_value = 0;
var advPoint2_R2_value = 0;
var advPoint1_R3_value = 0;
var advPoint2_R3_value = 0;
var disarmA_value = 0;
var disarmB_value = 0;
var disarmC_value = 0;
var disarmD_value = 0;
startbtn.disabled = true;
playbtn.disabled = true;
resetbtn.disabled = true;
stopbtn.disabled = true;
nextbtn.disabled = true;
savebtn.disabled = true;

function printPDF2() {
    var printTable = document.getElementById("tablePartial").innerHTML;

    var disp_setting="toolbar=yes,location=no,";
    disp_setting+="directories=yes,menubar=yes,";
    disp_setting+="scrollbars=yes,width=screen.availWidth, height=screen.availHeight, left=100, top=25";
    var docprint = window.open("","",disp_setting);
    docprint.document.open();
    docprint.document.write('<!DOCTYPE html>');
    docprint.document.write('<html lang="en">');
    docprint.document.write('<style type="text/css">');

    docprint.document.write('body{ margin:0px;display: grid;');
    docprint.document.write('justify-content: center;padding: 10px;');
    docprint.document.write('font-family:verdana,Arial;color:#000;box-sizing: border-box !important;text-align: center !important;');
    docprint.document.write('font-family:Verdana, Geneva, sans-serif; font-size:15px;}');
    docprint.document.write('a{color:#000;text-decoration:none;}');
    docprint.document.write('.centerText {text-align: center !important;}');
    docprint.document.write('th, td {border: 1px solid black;margin: auto;padding: 5px;text-align: center;}');
    docprint.document.write('table {justify-content: center !important; border-collapse: collapse; margin-bottom: 5px;}');
    docprint.document.write('#overallWinner {width: 195px;margin-inline: auto;padding: 10px;border-radius: 40px; border: 2px solid;}');
    docprint.document.write('#printHeader {width: 125px;}');
    docprint.document.write('.logoh3{width: 50px;}');
    docprint.document.write('img, svg {vertical-align: middle;}');

    docprint.document.write('</style>');
    docprint.document.write('</head><body onLoad="self.print()"><center>');

    // Write the HTML content including the image
    docprint.document.write(printTable);

    // Close the document
    docprint.document.close();
}

function selectedWeights() {
    var weightCategorySelected = document.getElementById("weight_category_selected");
    var weightCategory = document.getElementById("select_weight_category");
    var divWeight = document.getElementById("divWeight");
    var selectedWeight = weightCategory.options[weightCategory.selectedIndex].value;
    console.log(`${selectedWeight}`);
    weightCategorySelected.innerHTML = `${selectedWeight.toUpperCase()} ${`Weight`}`;
}
function showHide() {
    var x = document.getElementById("showHide");
    var currentMatchData = document.getElementById("currentMatchData");
    var winnersData = document.getElementById("winnersData");
    var gameMatchForm = document.getElementById("gameMatchForm");
    var tablePartial = document.getElementById("tablePartial");
    x.addEventListener("click", () => {
        if (currentMatchData.style.display === "none") {
            currentMatchData.style.display = "inline-block";
            winnersData.style.display = "inline-block";
            gameMatchForm.style.display = "grid";
            tablePartial.style.display = "grid";
            x.innerHTML = `${"hide"}`;
          } else {
            currentMatchData.style.display = "none";
            winnersData.style.display = "none";
            gameMatchForm.style.display = "none";
            tablePartial.style.display = "none";
            x.innerHTML = `${"show"}`;
          }
    });
}
showHide();

gameResetbtn.addEventListener("click", () => {
    gameResetbtnConfirm = confirm(`${`Are you sure you want to reset?`}\n${`Current Round:`} ${currentRound}`);
    if (gameResetbtnConfirm == false) {
        console.log(`${`gameResetbtnConfirm`}`);
        return false;
    } else {
    currentRound = 3;
    gameReset();
    }
});

function gameReset() {
    //Reset all data except player information
    if (currentRound == 1) {
        firstRound.style.backgroundColor = "white";
        firstRound.style.color = "black";
        firstRound.style.border = "5px solid green";
        secondRound.style.border = "5px solid green";
        thirdRound.style.border = "5px solid green";
        resetForRound();
        resetPrintSummary();
        advantagePoint();
        table_contents.style.display = "grid";
        //allReset
        resetDefaultSD();
        resetDefaultCT();
        resetColorToss();
        showSDCTval = 0;
        showSDCT();
        showFormCTval = 0;
        showFormCT();
        showCTBoardval = 0;
        showCTBoard();
        showSDBoardval = 0;
        showSDBoard();
        winRed = 0;
        winBlue = 0;
        winRed1 = 0;
        winRed2 = 0;
        winRed3 = 0;
        winBlue1 = 0;
        winBlue2 = 0;
        winBlue3 = 0;
        subFinalScore1 = 0;
        subFinalScore2 = 0;
        subTotalFoul1 = 0;
        subTotalFoul2 = 0;
        advPoint1 = 0;
        advPoint2 = 0;
        disarm1 = 0;
        disarm2 = 0;
        advPoint1_R1_value = 0;
        advPoint2_R1_value = 0;
        advPtA_value = 0;
        advPtA.style.display = "";
        advPtA.style.border = "5px solid green";
        advPtA.style.backgroundColor = "";
        advPtA.style.color = '';
        advPtD_value = 0;
        advPtD.style.display = "";
        advPtD.style.border = "5px solid green";
        advPtD.style.backgroundColor = "";
        advPtD.style.color = '';
        advPoint1_R2_value = 0;
        advPoint2_R2_value = 0;
        advPtB_value = 0;
        advPtB.style.display = "";
        advPtB.style.border = "5px solid green";
        advPtB.style.backgroundColor = "";
        advPtB.style.color = '';
        advPtE_value = 0;
        advPtE.style.display = "";
        advPtE.style.border = "5px solid green";
        advPtE.style.backgroundColor = "";
        advPtE.style.color = '';
        advPoint1_R3_value = 0;
        advPoint2_R3_value = 0;
        advPtC.style.display = "";
        advPtC.style.border = "5px solid green";
        advPtC_value = 0;
        advPtC.style.backgroundColor = "";
        advPtC.style.color = '';
        advPtF_value = 0;
        advPtF.style.display = "";
        advPtF.style.border = "5px solid green";
        advPtF.style.backgroundColor = "";
        advPtF.style.color = '';
        disarmA_value = 0;
        disarmB_value = 0;
        disarmC_value = 0;
        disarmD_value = 0;
        form_customTime.style.display = "";
        console.clear();
        startbtn.disabled = true;
        startbtn_SD.disabled = true;
        submitbtn_customTime.disabled = false;
        overallWinner.textContent = "";
        overallWinner.style.border = "";
        startActivate = 0;
        coin.style.animation = "none";
        coin.style.transform = "";
        i=1;
    }
    if (currentRound == 2) {
        secondRound.style.backgroundColor = "white";
        secondRound.style.color = "black";
        secondRound.style.border = "5px solid gray";
        resetForRound();
        resetPrintSummary();
        advantagePoint();
        currentRound = 1;
        gameReset();
    }
    if (currentRound == 3) {
        if (winRed == 2) {
            tablePartial.style.background = "white";
            tablePartial.classList.remove("winnerRedOverall");
        }
        if (winBlue == 2) {
            tablePartial.style.background = "white";
            tablePartial.classList.remove("winnerBlueOverall");
        }
        thirdRound.style.backgroundColor = "white";
        thirdRound.style.color = "black";
        thirdRound.style.border = "5px solid gray";
        resetForRound();
        resetPrintSummary();
        currentRound = 2;
        gameReset();
    }

}
function overallWin() {
    if (currentRound == 2){
        if (winRed == 2) {
            overallWinner.textContent = `${"OVERALL WINNER"} ${playerNameRed}`;
            overallWinner.style.border = "2px solid";
            tablePartial.style.background = null;
            tablePartial.classList.add("winnerRedOverall");
            savebtn.disabled = false;
            startbtn.disabled = true;
            resetbtn.disabled = true;
            nextbtn.disabled = true;
            tablePartial.focus();
        }
        if (winBlue == 2) {
            overallWinner.textContent = `${"OVERALL WINNER"} ${playerNameBlue}`;
            overallWinner.style.border = "2px solid";
            tablePartial.style.background = null;
            tablePartial.classList.add("winnerBlueOverall");
            savebtn.disabled = false;
            startbtn.disabled = true;
            resetbtn.disabled = true;
            nextbtn.disabled = true;
            tablePartial.focus();
        }
    }
    if (currentRound == 3){
        if (winRed == 2) {
            overallWinner.textContent = `${"OVERALL WINNER"} ${playerNameRed}`;
            overallWinner.style.border = "2px solid";
            tablePartial.style.background = null;
            tablePartial.classList.add("winnerRedOverall");
            tablePartial.focus();
        }
        if (winBlue == 2) {
            overallWinner.textContent = `${"OVERALL WINNER"} ${playerNameBlue}`;
            overallWinner.style.border = "2px solid";
            tablePartial.style.background = null;
            tablePartial.classList.add("winnerBlueOverall");
            tablePartial.focus();
        }
    }
}
submitbtn_customTime.addEventListener("click", () => {
    minutesInput = parseInt(inputMinutes_custom.value);
    secondsInput = parseInt(inputSeconds_custom.value);
    if (isNaN(minutesInput) || isNaN(secondsInput) || minutesInput < 0 || secondsInput < 0 || minutesInput > maxMinutes || secondsInput >= maxSeconds) {
        alert("Please enter valid minutes and seconds.");
        return;
    }
    else if (minutesInput == maxMinutes && secondsInput > 0) {
        alert("Max minutes is 2:00");
        return;
    } else {
    scoreboard_table.focus();
    console.log(`${`minutesCustom`} ${minutesCustom}`);
    console.log(`${`secondsCustom`} ${secondsCustom}`);
    console.log(`${`minutesInput`} ${minutesInput}`);
    console.log(`${`secondsInput`} ${secondsInput}`);
    minsInputDef = minutesInput;
    secsInputDef = secondsInput;
    totalSeconds = minutesInput * 60 + secondsInput;
    updateTimer(minutesInput, secondsInput);
    startbtn.disabled = false;
    playbtn.disabled = true;
    resetbtn.disabled = true;
    stopbtn.disabled = true;
    }
});
submitCurrent.addEventListener("click", () => {
    minutesInput = parseInt(minutes_input.value);
    secondsInput = parseInt(seconds_input.value);
    if (isNaN(minutesInput) || isNaN(secondsInput) || minutesInput < 0 || secondsInput < 0 || minutesInput > maxMinutes || secondsInput >= maxSeconds) {
        alert("Please enter valid minutes and seconds.");
        return;
    }
    else if (minutesInput == maxMinutes && secondsInput > 0) {
        alert("Max minutes is 2:00");
        return;
    }
    else {
        scoreboard_table.focus();
        inputGameForm();
        selectedWeights();
        minsInputDef = minutesInput;
        secsInputDef = secondsInput;
        totalSeconds = minutesInput * 60 + secondsInput;
        console.log(`${`minutesInput`} ${minutesInput}`);
        console.log(`${`secondsInput`} ${secondsInput}`);
        console.log(`${`totalSeconds`} ${totalSeconds}`);
        updateTimer(minutesInput, secondsInput);
        submitCurrent.disabled = true;
        startbtn.disabled = false;
        playbtn.disabled = true;
        resetbtn.disabled = true;
        stopbtn.disabled = true;
    }
});//submitCurrent
startbtn.addEventListener("click", () => {
    startActivate = 1;
    advantagePoint();
    console.log(`${`Current Round:`} ${currentRound}`);
    submitbtn_customTime.disabled = true;
    form_customTime.style.display = "none";
    if (currentRound == 1) {
        savebtn.disabled = true;
        currentRound = currentRound;
        firstRound.style.backgroundColor = "green";
        firstRound.style.color = "yellow";
        firstRound.style.border = "5px solid green";
        secondRound.style.border = "5px solid gray";
        thirdRound.style.border = "5px solid gray";
    }
    if (currentRound == 2) {
        currentRound = currentRound;
        secondRound.style.backgroundColor = "green";
        secondRound.style.color = "yellow";
        secondRound.style.border = "5px solid green";
        firstRound.style.backgroundColor = "white";
        firstRound.style.color = "black";
        firstRound.style.border = "5px solid gray";
        thirdRound.style.border = "5px solid gray";
    }
    if (currentRound == 3) {
        savebtn.disabled = false;
        currentRound = currentRound;
        thirdRound.style.backgroundColor = "green";
        thirdRound.style.color = "yellow";
        thirdRound.style.border = "5px solid green";
        firstRound.style.backgroundColor = "white";
        firstRound.style.border = "5px solid gray";
        firstRound.style.color = "black";
        secondRound.style.backgroundColor = "white";
        secondRound.style.color = "black";
        secondRound.style.border = "5px solid gray";
    }
    submitCurrent.disabled = true;
    startbtn.disabled = true;
    playbtn.disabled = true;
    resetbtn.disabled = false;
    stopbtn.disabled = false;
    nextbtn.disabled = true;

    console.log(`${minutesInput} ${secondsInput}`);
    timerRunning = false;
    runtime();
}); //startBtn
nextbtn.addEventListener("click", () => {
    var nextBtnConfirm = confirm(`${`Are you sure you want to proceed to the next round?`}\n${`Current Round:`} ${currentRound}`);
    if (nextBtnConfirm == false) {
        console.log("nextBTNFalse");
        return false;
    } else {
        nextRound();
        submitCurrent.disabled = true;
        nextbtn.disabled = true;
        startActivate = 0;
        resetBtnConfirm = true;
        submitbtn_customTime.disabled = false;
        form_customTime.style.display = "";
        resetForRound();
        advantagePoint();
        console.log(`${`resetForRound()`}`);
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        console.log(`${defaultScoreOne}`);
        console.log(`${defaultScoreTwo}`);
    }
});
function inputGameForm() {
    properFirstRed = fnamered.value[0].toUpperCase() + fnamered.value.slice(1).toLowerCase();
    properFirstBlue = fnameblue.value[0].toUpperCase() + fnameblue.value.slice(1).toLowerCase();
    properMiddleRed = mnamered.value[0].toUpperCase() + mnamered.value.slice(1).toLowerCase();
    properMiddleBlue = mnameblue.value[0].toUpperCase() + mnameblue.value.slice(1).toLowerCase();
    properLastRed = lnamered.value[0].toUpperCase() + lnamered.value.slice(1).toLowerCase();
    properLastBlue = lnameblue.value[0].toUpperCase() + lnameblue.value.slice(1).toLowerCase();
    teamRedCurrent.innerHTML = teamRedInput.value || "schoolRed";
    teamBlueCurrent.innerHTML = teamBlueInput.value || "schoolBlue";
    displayVS.innerHTML = `${teamRedInput.value || "schoolRed"} VS ${teamBlueInput.value || "schoolBlue"}`;
    redNameDisplay.innerHTML = playerNameRed;
    blueNameDisplay.innerHTML = playerNameBlue;
    divisionCurrent.innerHTML = `${divisionInput.value || "N/A"}`;
    categoryCurrent.innerHTML = `${categoryInput.value || "N/A"}`;
    courtNoCurrent.innerHTML = `${courtInput.value || "N/A"}`;
    matchNoCurrent.innerHTML = `${matchInput.value || "N/A"}`;
    redGenderCurrent.innerHTML = `${redGenderInput.value || "N/A"}`;
    redWeightCurrent.innerHTML = `${redWeightInput.value || "N/A"} `;
    blueGenderCurrent.innerHTML = `${blueGenderInput.value || "N/A"}`;
    blueWeightCurrent.innerHTML = `${blueWeightInput.value || "N/A"}`;
    redFullCurrent.innerHTML = `${properFirstRed} ${properMiddleRed} ${properLastRed} `;
    blueFullCurrent.innerHTML = `${properFirstBlue} ${properMiddleBlue} ${properLastBlue} `;
}
function nextRound() {
    nextbtn.disabled = true;
    playbtn.disabled = true;
    stopbtn.disabled = true;
    startbtn.disabled = true;
    startActivate = 0;
    if (totalSeconds > 0) {
        determineWinner();
    }
    if ((inputscore1.value > inputscore2.value || subTotalFoul2 == 3 || disarm2 == 2) ||

        (inputscore1.value == inputscore2.value &&
        (suddenDeathScoreA > suddenDeathScoreB || subTotalFoul1 < subTotalFoul2
        || disarm1 < disarm2 || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0))
        ) || (
        inputscore1.value < inputscore2.value &&
        (subTotalFoul2 == 3 || disarm2 == 2)
        ) || (
        inputscore1.value > inputscore2.value &&
        (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2) && (subTotalFoul1 != 3 || disarm1 != 2)
        )

    || (inputscore1.value == inputscore2.value && ((advPoint1_R1_value == 1 && currentRound == 1)
    || (advPoint1_R2_value == 1 && currentRound == 2)
    || (advPoint1_R3_value == 1 && currentRound == 3)
    || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1)))) {
        winRed += 1;
    }
    if (
        (inputscore1.value < inputscore2.value || subTotalFoul1 == 3 || disarm1 == 2) ||

        (inputscore1.value == inputscore2.value &&
        (suddenDeathScoreA < suddenDeathScoreB || subTotalFoul1 > subTotalFoul2
        || disarm1 > disarm2 || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0))
        ) || (
        inputscore1.value > inputscore2.value &&
        (subTotalFoul1 == 3 || disarm1 == 2)
        ) || (
        inputscore1.value < inputscore2.value &&
        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2) && (subTotalFoul2 != 3 || disarm2 != 2)
        )

    || (inputscore1.value == inputscore2.value && ((advPoint2_R1_value == 1 && currentRound == 1)
    || (advPoint2_R2_value == 1 && currentRound == 2)
    || (advPoint2_R3_value == 1 && currentRound == 3)
    || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1)))) {
        winBlue += 1;
    }
    console.log(`${`winRed:`} ${winRed}`);
    console.log(`${`winBlue:`} ${winBlue}`);
    if (currentRound == 1) { //must put if winner or loser
        currentWinnerR1 = winnerName;
        currentScoreR1 = winnerScore;
        currentLoserR1 = loserName;
        currentloserScoreR1 = loserScore;
        console.log(`${`winRed:`} ${winRed}`);
        console.log(`${`winBlue:`} ${winBlue}`);
        if ((winRed > 0 && winRed > winBlue) ||
            (inputscore1.value > inputscore2.value || subTotalFoul2 == 3 || disarm2 == 2) ||

            (inputscore1.value == inputscore2.value &&
            (suddenDeathScoreA > suddenDeathScoreB || subTotalFoul1 < subTotalFoul2
            || disarm1 < disarm2 || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0))
            ) || (
            inputscore1.value < inputscore2.value &&
            (subTotalFoul2 == 3 || disarm2 == 2)
            ) || (
            inputscore1.value > inputscore2.value &&
            (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2) && (subTotalFoul1 != 3 || disarm1 != 2)
            )

        || (inputscore1.value == inputscore2.value && ((advPoint1_R1_value == 1 && currentRound == 1)
        || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1)))) {

            if (suddenDeathScoreA > suddenDeathScoreB || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0)) {
                if (suddenDeathScoreA > suddenDeathScoreB) {
                    winner2_R1.innerHTML = "(tieBr)";
                }
                if (redCoins == heads && redCoins != 0) {
                    winner2_R1.innerHTML = "(heads)";
                }
                if (redCoins == tails && redCoins != 0) {
                    winner2_R1.innerHTML = "(tails)";
                }
            }
            if ((inputscore1.value < inputscore2.value
                || inputscore1.value > inputscore2.value
                || inputscore1.value == inputscore2.value)
                && (subTotalFoul2 == 3 || disarm2 == 2 || subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                ) {
                if (subTotalFoul2 == 3 && subTotalFoul1 < subTotalFoul2) {
                    winner2_R1.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && subTotalFoul1 < subTotalFoul2 && disarm2 == 0) {
                    winner2_R1.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && disarm1 < disarm2) {
                    winner2_R1.innerHTML = "(disarm)";
                }
                if (disarm2 == 2 && disarm1 < disarm2) {
                    winner2_R1.innerHTML = "(disarm)";
                }
            }
            if (inputscore1.value > inputscore2.value
                && (subTotalFoul2 != 3 && disarm2 != 2)
                && (subTotalFoul2 == 0 && disarm2 == 0
                || (subTotalFoul2 == subTotalFoul1 && disarm2 == disarm1)
                || (subTotalFoul2 > subTotalFoul1 || disarm2 > disarm1))
                ) {
                winner2_R1.innerHTML = "(score)";
                console.log("scorePrint");
            }
            
            if (inputscore1.value == inputscore2.value
                && (subTotalFoul2 == 0 && disarm2 == 0)
                && (subTotalFoul1 == 0 && disarm1 == 0)
                && (advPoint1_R1_value == 1 && currentRound == 1)
                && (suddenDeathScoreA == 0 && suddenDeathScoreB == 0)
                && (redCoins == 0 && blueCoins == 0)
                ) {
                winner2_R1.innerHTML = "(advPoint)";
            }            
            winner1_R1.innerHTML = currentWinnerR1;
            score1_R1.innerHTML = currentScoreR1;
            score2_R1.innerHTML = currentloserScoreR1;
            printSummary();
            winRed1 += winRed;
            subFinalScore1 += parseInt(currentScoreR1);
            subFinalScore2 += parseInt(currentloserScoreR1);
            console.log(`${`winRed:`} ${winRed}`);
            console.log(`${`winBlue:`} ${winBlue}`);
            console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
            console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
            console.log(`${`advPoint1:`} ${advPoint1}`);
            console.log(`${`advPoint2:`} ${advPoint2}`);
        } else if ((winBlue > 0 && winBlue > winRed) ||
        (inputscore1.value < inputscore2.value || subTotalFoul1 == 3 || disarm1 == 2) ||

            (inputscore1.value == inputscore2.value &&
            (suddenDeathScoreA < suddenDeathScoreB || subTotalFoul1 > subTotalFoul2
            || disarm1 > disarm2 || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0))
            ) || (
            inputscore1.value > inputscore2.value &&
            (subTotalFoul1 == 3 || disarm1 == 2)
            ) || (
            inputscore1.value < inputscore2.value &&
            (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2) && (subTotalFoul2 != 3 || disarm2 != 2)
            )

        || (inputscore1.value == inputscore2.value && ((advPoint2_R1_value == 1 && currentRound == 1)
        || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1)))) {

            if (suddenDeathScoreA < suddenDeathScoreB || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0)) {
                if (suddenDeathScoreA < suddenDeathScoreB) {
                    winner1_R1.innerHTML = "(tieBr)";
                }
                if (blueCoins == heads && blueCoins != 0) {
                    winner1_R1.innerHTML = "(heads)";
                }
                if (blueCoins == tails && blueCoins != 0) {
                    winner1_R1.innerHTML = "(tails)";
                }
            }
            if ((inputscore1.value > inputscore2.value
                || inputscore1.value < inputscore2.value
                || inputscore1.value == inputscore2.value)
                && (subTotalFoul1 == 3 || disarm1 == 2 || subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                ) {
                if (subTotalFoul1 == 3 || subTotalFoul1 > subTotalFoul2) {
                    winner1_R1.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && subTotalFoul1 > subTotalFoul2 && disarm1 == 0) {
                    winner1_R1.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && disarm1 > disarm2) {
                    winner1_R1.innerHTML = "(disarm)";
                }
                if (disarm1 == 2 || disarm1 > disarm2) {
                    winner1_R1.innerHTML = "(disarm)";
                }
            }
            if (inputscore1.value < inputscore2.value
                && (subTotalFoul1 != 3 && disarm1 != 2)
                && (subTotalFoul1 == 0 && disarm1 == 0
                || (subTotalFoul2 == subTotalFoul1 && disarm2 == disarm1)
                || (subTotalFoul2 < subTotalFoul1 || disarm2 < disarm1))
                ) {
                winner1_R1.innerHTML = "(score)";
                console.log("scorePrint");
            }
            if (inputscore1.value == inputscore2.value
                && (subTotalFoul2 == 0 && disarm2 == 0)
                && (subTotalFoul1 == 0 && disarm1 == 0)
                && (suddenDeathScoreA == 0 && suddenDeathScoreB == 0)
                && (redCoins == 0 && blueCoins == 0)
                ) {
                winner1_R1.innerHTML = "(advPoint)";
            }
            winner2_R1.innerHTML = currentWinnerR1;
            score1_R1.innerHTML = currentloserScoreR1;
            score2_R1.innerHTML = currentScoreR1;
            printSummary();
            winBlue1 += winBlue;
            subFinalScore1 += parseInt(currentloserScoreR1);
            subFinalScore2 += parseInt(currentScoreR1);
            console.log(`${`winRed:`} ${winRed}`);
            console.log(`${`winBlue:`} ${winBlue}`);
            console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
            console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
            console.log(`${`advPoint1:`} ${advPoint1}`);
            console.log(`${`advPoint2:`} ${advPoint2}`);
        } else {
            console.log(`${`WinPerRound: Tie`}`);
        }
    }
    if (currentRound == 2) {
        currentWinnerR2 = winnerName;
        currentScoreR2 = winnerScore;
        currentLoserR2 = loserName;
        currentloserScoreR2 = loserScore;
        if ((winRed > 0 && winRed > winBlue) ||
        (inputscore1.value > inputscore2.value || subTotalFoul2 == 3 || disarm2 == 2) ||

            (inputscore1.value == inputscore2.value &&
            (suddenDeathScoreA > suddenDeathScoreB || subTotalFoul1 < subTotalFoul2
            || disarm1 < disarm2 || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0))
            ) || (
            inputscore1.value < inputscore2.value &&
            (subTotalFoul2 == 3 || disarm2 == 2)
            ) || (
            inputscore1.value > inputscore2.value &&
            (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2) && (subTotalFoul1 != 3 || disarm1 != 2)
            )

        || (inputscore1.value == inputscore2.value && ((advPoint1_R2_value == 1 && currentRound == 2)
        || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1)))) {

            if (suddenDeathScoreA > suddenDeathScoreB || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0)) {
                if (suddenDeathScoreA > suddenDeathScoreB) {
                    winner2_R2.innerHTML = "(tieBr)";
                }
                if (redCoins == heads && redCoins != 0) {
                    winner2_R2.innerHTML = "(heads)";
                }
                if (redCoins == tails && redCoins != 0) {
                    winner2_R2.innerHTML = "(tails)";
                }
            }
            if ((inputscore1.value < inputscore2.value
                || inputscore1.value > inputscore2.value
                || inputscore1.value == inputscore2.value)
                && (subTotalFoul2 == 3 || disarm2 == 2 || subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                ) {
                if (subTotalFoul2 == 3 || subTotalFoul1 < subTotalFoul2) {
                    winner2_R2.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && subTotalFoul1 < subTotalFoul2 && disarm2 == 0) {
                    winner2_R2.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && disarm1 < disarm2) {
                    winner2_R2.innerHTML = "(disarm)";
                }
                if (disarm2 == 2 || disarm1 < disarm2) {
                    winner2_R2.innerHTML = "(disarm)";
                }
            }
            if (inputscore1.value > inputscore2.value
                && (subTotalFoul2 != 3 && disarm2 != 2)
                && (subTotalFoul2 == 0 && disarm2 == 0
                || (subTotalFoul2 == subTotalFoul1 && disarm2 == disarm1)
                || (subTotalFoul2 > subTotalFoul1 || disarm2 > disarm1))
            ) {
                winner2_R2.innerHTML = "(score)";
                console.log("scorePrint");
            }
            if (inputscore1.value == inputscore2.value
                && (subTotalFoul2 == 0 && disarm2 == 0)
                && (subTotalFoul1 == 0 && disarm1 == 0)
                && (suddenDeathScoreA == 0 && suddenDeathScoreB == 0)
                && (redCoins == 0 && blueCoins == 0)
                ) {
                winner2_R2.innerHTML = "(advPoint)";
            }
            winner1_R2.innerHTML = currentWinnerR2;
            score1_R2.innerHTML = currentScoreR2;
            score2_R2.innerHTML = currentloserScoreR2;
            printSummary();
            winRed2 += winRed;
            subFinalScore1 += parseInt(currentScoreR2);
            subFinalScore2 += parseInt(currentloserScoreR2);
            console.log(`${`winRed:`} ${winRed}`);
            console.log(`${`winBlue:`} ${winBlue}`);
            console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
            console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
            console.log(`${`advPoint1:`} ${advPoint1}`);
            console.log(`${`advPoint2:`} ${advPoint2}`);
            overallWin();
        } else if ((winBlue > 0 && winBlue > winRed) ||
        (inputscore1.value < inputscore2.value || subTotalFoul1 == 3 || disarm1 == 2) ||

        (inputscore1.value == inputscore2.value &&
        (suddenDeathScoreA < suddenDeathScoreB || subTotalFoul1 > subTotalFoul2
        || disarm1 > disarm2 || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0))
        ) || (
        inputscore1.value > inputscore2.value &&
        (subTotalFoul1 == 3 || disarm1 == 2)
        ) || (
        inputscore1.value < inputscore2.value &&
        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2) && (subTotalFoul2 =! 3 || disarm2 != 2)
        )

        || (inputscore1.value == inputscore2.value && ((advPoint2_R2_value == 1 && currentRound == 2)
        || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1)))) {

            if (suddenDeathScoreA < suddenDeathScoreB || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0)) {
                if (suddenDeathScoreA < suddenDeathScoreB) {
                    winner1_R2.innerHTML = "(tieBr)";
                }
                if (blueCoins == heads && blueCoins != 0) {
                    winner1_R2.innerHTML = "(heads)";
                }
                if (blueCoins == tails && blueCoins != 0) {
                    winner1_R2.innerHTML = "(tails)";
                }
            }
            if ((inputscore1.value > inputscore2.value
                || inputscore1.value < inputscore2.value
                || inputscore1.value == inputscore2.value)
                && (subTotalFoul1 == 3 || disarm1 == 2 || subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                ) {
                if (subTotalFoul1 == 3 || subTotalFoul1 > subTotalFoul2) {
                    winner1_R2.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && subTotalFoul1 > subTotalFoul2 && disarm1 == 0) {
                    winner1_R2.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && disarm1 > disarm2) {
                    winner1_R2.innerHTML = "(disarm)";
                }
                if (disarm1 == 2 || disarm1 > disarm2) {
                    winner1_R2.innerHTML = "(disarm)";
                }
            }
            if (inputscore1.value < inputscore2.value
                && (subTotalFoul1 != 3 && disarm1 != 2)
                && (subTotalFoul1 == 0 && disarm1 == 0
                || (subTotalFoul2 == subTotalFoul1 && disarm2 == disarm1)
                || (subTotalFoul2 < subTotalFoul1 || disarm2 < disarm1))
                ) {
                winner1_R2.innerHTML = "(score)";
                console.log("scorePrint");
            }
            if (inputscore1.value == inputscore2.value
                && (subTotalFoul2 == 0 && disarm2 == 0)
                && (subTotalFoul1 == 0 && disarm1 == 0)
                && (suddenDeathScoreA == 0 && suddenDeathScoreB == 0)
                && (redCoins == 0 && blueCoins == 0)
                ) {
                winner1_R2.innerHTML = "(advPoint)";
            }
            winner2_R2.innerHTML = currentWinnerR2;
            score1_R2.innerHTML = currentloserScoreR2;
            score2_R2.innerHTML = currentScoreR2;
            printSummary();
            winBlue2 += winBlue;
            subFinalScore1 += parseInt(currentloserScoreR2);
            subFinalScore2 += parseInt(currentScoreR2);
            console.log(`${`winRed:`} ${winRed}`);
            console.log(`${`winBlue:`} ${winBlue}`);
            console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
            console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
            console.log(`${`advPoint1:`} ${advPoint1}`);
            console.log(`${`advPoint2:`} ${advPoint2}`);
            overallWin();
        } else {
            console.log(`${`WinPerRound: Tie`}`);
        }
    }
    if (currentRound == 3) {
        currentWinnerR3 = winnerName;
        currentScoreR3 = winnerScore;
        currentLoserR3 = loserName;
        currentloserScoreR3 = loserScore;
        if ((winRed > 0 && winRed > winBlue) ||
        (inputscore1.value > inputscore2.value || subTotalFoul2 == 3 || disarm2 == 2) ||

            (inputscore1.value == inputscore2.value &&
            (suddenDeathScoreA > suddenDeathScoreB || subTotalFoul1 < subTotalFoul2
            || disarm1 < disarm2 || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0))
            ) || (
            inputscore1.value < inputscore2.value &&
            (subTotalFoul2 == 3 || disarm2 == 2)
            ) || (
            inputscore1.value > inputscore2.value &&
            (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2) && (subTotalFoul1 != 3 || disarm1 != 2)
            )

        || (inputscore1.value == inputscore2.value && ((advPoint1_R3_value == 1 && currentRound == 3)
        || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1)))) {

            if (suddenDeathScoreA > suddenDeathScoreB || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0)) {
                if (suddenDeathScoreA > suddenDeathScoreB) {
                    winner2_R3.innerHTML = "(tieBr)";
                }
                if (redCoins == heads && redCoins != 0) {
                    winner2_R3.innerHTML = "(heads)";
                }
                if (redCoins == tails && redCoins != 0) {
                    winner2_R3.innerHTML = "(tails)";
                }
            }
            if ((inputscore1.value < inputscore2.value
                || inputscore1.value > inputscore2.value
                || inputscore1.value == inputscore2.value)
                && (subTotalFoul2 == 3 || disarm2 == 2 || subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                ) {
                if (subTotalFoul2 == 3 || subTotalFoul1 < subTotalFoul2) {
                    winner2_R3.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && subTotalFoul1 < subTotalFoul2 && disarm2 == 0) {
                    winner2_R3.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && disarm1 < disarm2) {
                    winner2_R3.innerHTML = "(disarm)";
                }
                if (disarm2 == 2 || disarm1 < disarm2) {
                    winner2_R3.innerHTML = "(disarm)";
                }
            }
            if (inputscore1.value > inputscore2.value
                && (subTotalFoul2 != 3 && disarm2 != 2)
                && (subTotalFoul2 == 0 && disarm2 == 0
                || (subTotalFoul2 == subTotalFoul1 && disarm2 == disarm1)
                || (subTotalFoul2 > subTotalFoul1 || disarm2 > disarm1))
                ) {
                winner2_R3.innerHTML = "(score)";
                console.log("scorePrint");
            }
            if (inputscore1.value == inputscore2.value
                && (subTotalFoul2 == 0 && disarm2 == 0)
                && (subTotalFoul1 == 0 && disarm1 == 0)
                && (suddenDeathScoreA == 0 && suddenDeathScoreB == 0)
                && (redCoins == 0 && blueCoins == 0)
                ) {
                winner2_R3.innerHTML = "(advPoint)";
            }
            winner1_R3.innerHTML = currentWinnerR3;
            score1_R3.innerHTML = currentScoreR3;
            score2_R3.innerHTML = currentloserScoreR3;
            printSummary();
            winRed3 += winRed;
            subFinalScore1 += parseInt(currentScoreR3);
            subFinalScore2 += parseInt(currentloserScoreR3);
            console.log(`${`winRed:`} ${winRed}`);
            console.log(`${`winBlue:`} ${winBlue}`);
            console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
            console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
            console.log(`${`advPoint1:`} ${advPoint1}`);
            console.log(`${`advPoint2:`} ${advPoint2}`);
            overallWin();
        } else if ((winBlue > 0 && winBlue > winRed) ||
        (inputscore1.value < inputscore2.value || subTotalFoul1 == 3 || disarm1 == 2) ||

        (inputscore1.value == inputscore2.value &&
        (suddenDeathScoreA < suddenDeathScoreB || subTotalFoul1 > subTotalFoul2
        || disarm1 > disarm2 || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0))
        ) || (
        inputscore1.value > inputscore2.value &&
        (subTotalFoul1 == 3 || disarm1 == 2)
        ) || (
        inputscore1.value < inputscore2.value &&
        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2) && (subTotalFoul2 =! 3 || disarm2 != 2)
        )

        || (inputscore1.value == inputscore2.value && ((advPoint2_R3_value == 1 && currentRound == 3)
        || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1)))) {

            if (suddenDeathScoreA < suddenDeathScoreB || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0)) {
                if (suddenDeathScoreA < suddenDeathScoreB) {
                    winner1_R3.innerHTML = "(tieBr)";
                }
                if (blueCoins == heads && blueCoins != 0) {
                    winner1_R3.innerHTML = "(heads)";
                }
                if (blueCoins == tails && blueCoins != 0) {
                    winner1_R3.innerHTML = "(tails)";
                }
            }
            if ((inputscore1.value > inputscore2.value
                || inputscore1.value < inputscore2.value
                || inputscore1.value == inputscore2.value)
                && (subTotalFoul1 == 3 || disarm1 == 2 || subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                ) {
                if (subTotalFoul1 == 3 || subTotalFoul1 > subTotalFoul2) {
                    winner1_R3.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && subTotalFoul1 > subTotalFoul2 && disarm1 == 0) {
                    winner1_R3.innerHTML = "(foul)";
                }
                if (inputscore1.value == inputscore2.value && disarm1 > disarm2) {
                    winner1_R3.innerHTML = "(disarm)";
                }
                if (disarm1 == 2 || disarm1 > disarm2) {
                    winner1_R3.innerHTML = "(disarm)";
                }
            }
            if (inputscore1.value < inputscore2.value
                && (subTotalFoul1 != 3 && disarm1 != 2)
                && (subTotalFoul1 == 0 && disarm1 == 0
                || (subTotalFoul2 == subTotalFoul1 && disarm2 == disarm1)
                || (subTotalFoul2 < subTotalFoul1 || disarm2 < disarm1))
                ) {
                winner1_R3.innerHTML = "(score)";
                console.log("scorePrint");
            }
            if (inputscore1.value == inputscore2.value
                && (subTotalFoul2 == 0 && disarm2 == 0)
                && (subTotalFoul1 == 0 && disarm1 == 0)
                && (suddenDeathScoreA == 0 && suddenDeathScoreB == 0)
                && (redCoins == 0 && blueCoins == 0)
                ) {
                winner1_R3.innerHTML = "(advPoint)";
            }
            winner2_R3.innerHTML = currentWinnerR3;
            score1_R3.innerHTML = currentloserScoreR3;
            score2_R3.innerHTML = currentScoreR3;
            printSummary();
            winBlue3 += winBlue;
            subFinalScore1 += parseInt(currentloserScoreR3);
            subFinalScore2 += parseInt(currentScoreR3);
            console.log(`${`winRed:`} ${winRed}`);
            console.log(`${`winBlue:`} ${winBlue}`);
            console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
            console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
            console.log(`${`advPoint1:`} ${advPoint1}`);
            console.log(`${`advPoint2:`} ${advPoint2}`);
            overallWin();
        } else {
            console.log(`${`WinPerRound:`}`);
        }
    }
    console.log(`nextButton`);
    if (currentRound == 1 || currentRound == 2) {
        currentRound += 1;
        console.log(`${`diff`}${currentRound}`);
    } else {
        nextbtn.disabled = true;
        resetbtn.disabled = true;
        currentRound = currentRound;
        console.log(`${`same`}${currentRound}`);
    }
} //nextRound()
playbtn.addEventListener("click", playCountdown); //playbtn
stopbtn.addEventListener("click", stopCountdown); //stopbtn
resetbtn.addEventListener("click", () => {
    console.log("resetBtnEvent");
    resetBtnConfirm = confirm(`${`Are you sure you want to reset?`}\n${`Current Round:`} ${currentRound}`);
    if (resetBtnConfirm == false) {
        console.log(`${`resetBtnFalse1`}`);
        resetBtnConfirm = false;
        return false;
    } else {
        startActivate = 0;
        resetBtnConfirm = true;
        submitbtn_customTime.disabled = false;
        form_customTime.style.display = "";
        resetForRound();
        advantagePoint();
        console.log(`${`resetForRound()`}`);
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        console.log(`${defaultScoreOne}`);
        console.log(`${defaultScoreTwo}`);        
    }
}); //resetbtn
function resetCountdown() {
    minutesInput = minsInputDef;
    secondsInput = secsInputDef;
    totalSeconds = minutesInput * 60 + secondsInput;
    runtime();
    clearInterval(timerInterval);
    updateTimer(minutesInput, secondsInput);
    console.log(`${`resetCountdown()`}`);
    startbtn.disabled = false;
    playbtn.disabled = true;
    nextbtn.disabled = true;
    resetbtn.disabled = true;
}
function stopCountdown() {
    runtime();
    clearInterval(timerInterval);
    timerRunning = false;
    console.log("pause");
    playbtn.disabled = false;
    stopbtn.disabled = true;
}
function playCountdown() {
    runtime();
    timerRunning = true;
    console.log("play");
    playbtn.disabled = true;
    stopbtn.disabled = false;
}
function runtime() {
    if (!timerRunning) {
    totalSeconds = minutesInput * 60 + secondsInput;
    timerInterval = setInterval(function () {
        console.log(`${`totalSeconds1`} ${totalSeconds}`);
        totalSeconds--;
        minutesInput = Math.floor(totalSeconds / 60);
        secondsInput = totalSeconds % 60;
        updateTimer(minutesInput, secondsInput);
        console.log(`${`totalSeconds2`} ${totalSeconds}`);
        if (totalSeconds <= 0) {
            console.log(`${`totalSeconds`} ${totalSeconds}`);
            if (totalSeconds == -1) {
                minutesInput = 0;
                secondsInput = 0;
            }
            clearInterval(timerInterval);
            //alert('Timer reached zero!');
            stopbtn.disabled = true;
            console.log(inputScore1.value);
            console.log(inputScore2.value);
            startActivate = 0;
            //if foul exist = foul condition
            if (valueFoulA == 1 || valueFoulB == 1 || valueFoulD == 1 || valueFoulE == 1) {
                console.log("detFoul");
                determineWinner();
            } else {
                if (currentRound == 1) {
                    if (advPoint1_R1_value == 1 && inputscore1.value == inputscore2.value ) { //red wins
                        console.log(`RED WINS from advPoint`);
                        alert("RED WINS from advPoint");
                    }
                    if (advPoint2_R1_value == 1 && inputscore1.value == inputscore2.value) { //blue wins
                        console.log(`BLUE WINS from advPoint`);
                        alert("BLUE WINS from advPoint");
                    }
                }
                if (currentRound == 2) {
                    if (advPoint1_R2_value == 1 && inputscore1.value == inputscore2.value) { //red wins
                        console.log(`RED WINS from advPoint`);
                        alert("RED WINS from advPoint");
                    }
                    if (advPoint2_R2_value == 1 && inputscore1.value == inputscore2.value) { //blue wins
                        console.log(`BLUE WINS from advPoint`);
                        alert("BLUE WINS from advPoint");
                    }
                }
                if (currentRound == 3) {
                    if (advPoint1_R3_value == 1 && inputscore1.value == inputscore2.value) { //red wins
                        console.log(`RED WINS from advPoint`);
                        alert("RED WINS from advPoint");
                    }
                    if (advPoint2_R3_value == 1 && inputscore1.value == inputscore2.value) { //blue wins
                        console.log(`BLUE WINS from advPoint`);
                        alert("BLUE WINS from advPoint");
                    }
                }
                determineWinner();
                console.log("detWin");
                console.log(`${`inputscore1.value`} ${inputscore1.value}`);
                console.log(`${`inputscore2.value`} ${inputscore2.value}`);
                console.log(`${`subTotalFoul1`} ${subTotalFoul1}`);
                console.log(`${`subTotalFoul2`} ${subTotalFoul2}`);
                console.log(`${`disarm1`} ${disarm1}`);
                console.log(`${`disarm2`} ${disarm2}`);
            }
        }
    }, 1000);
    timerRunning = true;
    }
}
function updateTimer(minutesInput, secondsInput) {
    console.log(`${`totalSeconds`} ${totalSeconds}`);
    displayTime.innerHTML = `${minutesInput < 10 ? '0' + minutesInput : minutesInput}:${secondsInput < 10 ? '0' + secondsInput : secondsInput}`;
}
function resetForFoul() {
    console.log(`${`resetForFoul()`}`);
    valueFoulA = 0;
    valueFoulB = 0;
    valueFoulC = 0;
    valueFoulD = 0;
    valueFoulE = 0;
    valueFoulF = 0;
    subTotalFoul1 = 0;
    subTotalFoul2 = 0;
    advPoint1 = 0;
    advPoint2 = 0;
    console.log(subTotalFoul1);
    console.log(subTotalFoul2);
    foulA.style.backgroundColor = 'black';
    foulB.style.backgroundColor = 'black';
    foulC.style.backgroundColor = 'black';
    foulD.style.backgroundColor = 'black';
    foulE.style.backgroundColor = 'black';
    foulF.style.backgroundColor = 'black';
}
function foulRed() {
    if (subTotalFoul1 > subTotalFoul2) {
        winnerScore = inputscore2.value;
        winnerName = nameBlueValue;
        console.log(`BLUE WINS from foul`);
        alert(`BLUE WINS from foul`);        
    }
    console.log(`${`Current Round:`} ${currentRound}`);
    playbtn.disabled = true;
    stopbtn.disabled = true;
    nextbtn.disabled = false;
    startbtn.disabled = true;
    resetbtn.disabled = false;
}
function foulBlue() {
    if (subTotalFoul1 < subTotalFoul2) {
        winnerScore = inputscore1.value;
        winnerName = nameRedValue;
        console.log(`RED WINS from foul`);
        alert(`RED WINS from foul`);
    }
    console.log(`${`Current Round:`} ${currentRound}`);
    playbtn.disabled = true;
    stopbtn.disabled = true;
    nextbtn.disabled = false;
    startbtn.disabled = true;
    resetbtn.disabled = false;
}
function disarmRed() {
    disarmA.addEventListener("click", () => {
        if (disarmD_value == 0 && disarmB_value == 0 && valueFoulF == 0 && valueFoulC == 0 && startActivate == 1 && disarmA_value == 0) {
            var disarmAbtn = `${`Are you sure you want to DISARM-1 RED?`}`;
            if (!confirm(disarmAbtn)) {
                return false;
            } else {
                console.log("disarmRedA1");
                if (disarmA_value == 0) {
                    advPointVoidRed();
                    disarmA.style.backgroundColor = 'red';
                    console.log(disarmA_value);
                    disarmA_value += 1;
                    disarm1 += disarmA_value;
                    console.log(`${disarm1}`)
                    blueAdd.click();
                }
            }
        }
    });
    disarmB.addEventListener("click", () => {
        if (disarmD_value == 0 && disarmB_value == 0 && valueFoulF == 0 && valueFoulC == 0 && startActivate == 1 && disarmA_value == 1) {
            var disarmBbtn = `${`Are you sure you want to DISARM-2 RED?`}`;
            if (!confirm(disarmBbtn)) {
                return false;
            } else {
                console.log("disarmRedB1");
                if (disarmB_value == 0 && disarmA_value == 1) {
                    advPointVoidRed();
                    disarmB.style.backgroundColor = 'red';
                    console.log(disarmB_value);
                    disarmB_value += 1;
                    disarm1 += disarmB_value;
                    stopbtn.click();
                    playbtn.disabled = true;
                    blueAdd.click();
                    console.log(`BLUE WINS from disarm`);
                    alert(`BLUE WINS from disarm`);
                    determineWinner();
                }
            }
        }
    });
}
disarmRed();
function disarmBlue() {
    disarmC.addEventListener("click", () => {
        if (disarmB_value == 0 && disarmD_value == 0 && valueFoulC == 0 && valueFoulF == 0 && startActivate == 1 && disarmC_value == 0) {
            var disarmCbtn = `${`Are you sure you want to DISARM-1 BLUE?`}`;
            if (!confirm(disarmCbtn)) {
                return false;
            } else {
                console.log("disarmBlueC1");
                if (disarmC_value == 0) {
                    advPointVoidBlue();
                    disarmC.style.backgroundColor = 'blue';
                    console.log(disarmC_value);
                    disarmC_value += 1;
                    disarm2 += disarmC_value;
                    redAdd.click();
                }
            }
        }
    });
    disarmD.addEventListener("click", () => {
        if (disarmB_value == 0 && disarmD_value == 0 && valueFoulC == 0 && valueFoulF == 0 && startActivate == 1 && disarmC_value == 1) {
            var disarmDbtn = `${`Are you sure you want to DISARM-2 BLUE?`}`;
            if (!confirm(disarmDbtn)) {
                return false;
            } else {
                console.log("disarmBlueD1");
                if (disarmD_value == 0 && disarmC_value == 1) {
                    advPointVoidBlue();
                    disarmD.style.backgroundColor = 'blue';
                    console.log(disarmD_value);
                    disarmD_value += 1;
                    disarm2 += disarmD_value;
                    console.log(disarm2);
                    stopbtn.click();
                    playbtn.disabled = true;
                    redAdd.click();
                    console.log(`RED WINS from disarm`);
                    alert(`RED WINS from disarm`);
                    determineWinner();
                }
            }
        }
    });
}
disarmBlue();
function determineFoul() {
    if ((valueFoulA == 1 || valueFoulB == 1) && inputScore1.value == 0 && totalSeconds == 0) {
        if (valueFoulA == 1) {
            console.log("foulA");
        }
        if (valueFoulB == 1) {
            console.log("foulB");
        }
    }
    if ((valueFoulD == 1 || valueFoulE == 1) && inputScore2.value == 0 && totalSeconds == 0) {
        if (valueFoulD == 1) {
            console.log("foulD");
        }
        if (valueFoulE == 1) {
            console.log("foulE");
        }
    }
    foulA.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && valueFoulA == 0) {
            var foulAbtn = confirm(`${`Are you sure you want to FOUL-1 RED?`}`);
            if (foulAbtn == false) {
                return false;
            } else {
                advPointVoidRed();
                foulA.style.backgroundColor = 'red';
                valueFoulA = 1;
                subTotalFoul1 = 1;
                console.log(`${`foulA: `}${valueFoulA}`);
            }
        }
    });
    foulB.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && valueFoulB == 0 && valueFoulA == 1) {
            var foulBbtn = confirm(`${`Are you sure you want to FOUL-2 RED?`}`);
            if (foulBbtn == false) {
                return false;
            } else {
                if (valueFoulA == 1) {
                    foulB.style.backgroundColor = 'red';
                    valueFoulB = valueFoulA;
                    subTotalFoul1 = 2;
                    console.log(`${`foulB: `}${valueFoulB}`);
                }
            }
        }
    });
    foulC.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && valueFoulB == 1) {
            var foulCbtn = confirm(`${`Are you sure you want to FOUL-3 RED?`}`);
            if (foulCbtn == false) {
                return false;
            } else {
                if (valueFoulB == 1) {
                    foulC.style.backgroundColor = 'red';
                    valueFoulC = valueFoulB;
                    subTotalFoul1 = 3;
                    console.log(`${`foulC: `}${valueFoulC}`);
                    if (valueFoulC == 1) {
                        console.log("foulC");
                        stopbtn.click();
                        playbtn.disabled = true;
                        valueFoulE = 0;
                        foulRed();
                    }
                }
            }
        }
    });
    foulD.addEventListener("click", () => {
        if (valueFoulC == 0 && valueFoulF == 0 && disarmB_value == 0 && disarmD_value == 0 && startActivate == 1 && valueFoulD == 0) {
            var foulDbtn = confirm(`${`Are you sure you want to FOUL-1 BLUE?`}`);
            if (foulDbtn == false) {
                return false;
            } else {
                advPointVoidBlue();
                foulD.style.backgroundColor = 'blue';
                valueFoulD = 1;
                subTotalFoul2 = 1;
                console.log(`${`foulD: `}${valueFoulD}`);
            }
        }
    });
    foulE.addEventListener("click", () => {
        if (valueFoulC == 0 && valueFoulF == 0 && disarmB_value == 0 && disarmD_value == 0 && startActivate == 1 && valueFoulE == 0 && valueFoulD == 1) {
            var foulEbtn = confirm(`${`Are you sure you want to FOUL-2 BLUE?`}`);
            if (foulEbtn == false) {
                return false;
            } else {
                if (valueFoulD == 1) {
                    foulE.style.backgroundColor = 'blue';
                    valueFoulE = valueFoulD;
                    subTotalFoul2 = 2;
                    console.log(`${`foulE: `}${valueFoulE}`);
                }
            }
        }
    });
    foulF.addEventListener("click", () => {
        if (valueFoulC == 0 && valueFoulF == 0 && disarmB_value == 0 && disarmD_value == 0 && startActivate == 1 && valueFoulE == 1) {
            var foulFbtn = confirm(`${`Are you sure you want to FOUL-3 BLUE?`}`);
            if (foulFbtn == false) {
                return false;
            } else {
                if (valueFoulE == 1) {
                    foulF.style.backgroundColor = 'blue';
                    valueFoulF = valueFoulE;
                    subTotalFoul2 = 3;
                    console.log(`${`foulF: `}${valueFoulF}`);
                    if (valueFoulF == 1) {
                        console.log("foulF");
                        stopbtn.click();
                        playbtn.disabled = true;
                        valueFoulB = 0;
                        foulBlue();
                    }
                }
            }
        }
    });
}
determineFoul();
function advPointVoidRed() {
    if (currentRound == 1) {
        advPtA.style.border = "5px solid red";
        advPoint1_R1_value = 0;
        console.log(`${advPoint1_R1_value}`);
    }
    if (currentRound == 2) {
        advPtB.style.border = "5px solid red";
        advPoint1_R2_value = 0;
        console.log(`${advPoint1_R2_value}`);
    }
    if (currentRound == 3) {
        advPtC.style.border = "5px solid red";
        advPoint1_R3_value = 0;
        console.log(`${advPoint1_R3_value}`);
    }
}
function advPointVoidBlue() {
    if (currentRound == 1) {
        advPtD.style.border = "5px solid blue";
        advPoint2_R1_value = 0;
        console.log(`${advPoint1_R1_value}`);
    }
    if (currentRound == 2) {
        advPtE.style.border = "5px solid blue";
        advPoint2_R2_value = 0;
        console.log(`${advPoint1_R2_value}`);
    }
    if (currentRound == 3) {
        advPtF.style.border = "5px solid blue";
        advPoint2_R3_value = 0;
        console.log(`${advPoint1_R3_value}`);
    }
}
function printSummary() {
    if (currentRound == 1) {
        foul1_R1.innerHTML = subTotalFoul1;
        foul2_R1.innerHTML = subTotalFoul2;
        advPoint1_R1.innerHTML = advPoint1;
        advPoint2_R1.innerHTML = advPoint2;
        disarm1_R1.innerHTML = disarm1;
        disarm2_R1.innerHTML = disarm2;
    }
    if (currentRound == 2) {
        foul1_R2.innerHTML = subTotalFoul1;
        foul2_R2.innerHTML = subTotalFoul2;
        advPoint1_R2.innerHTML = advPoint1;
        advPoint2_R2.innerHTML = advPoint2;
        disarm1_R2.innerHTML = disarm1;
        disarm2_R2.innerHTML = disarm2;
    }
    if (currentRound == 3) {
        foul1_R3.innerHTML = subTotalFoul1;
        foul2_R3.innerHTML = subTotalFoul2;
        advPoint1_R3.innerHTML = advPoint1;
        advPoint2_R3.innerHTML = advPoint2;
        disarm1_R3.innerHTML = disarm1;
        disarm2_R3.innerHTML = disarm2;
    }
}
function resetPrintSummary() {
    if (currentRound == 1) {
        winner1_R1.innerHTML = '';
        winner2_R1.innerHTML = '';
        score1_R1.innerHTML = '';
        score2_R1.innerHTML = '';
        foul1_R1.innerHTML = '';
        foul2_R1.innerHTML = '';
        advPoint1_R1.innerHTML = '';
        advPoint2_R1.innerHTML = '';
        disarm1_R1.innerHTML = '';
        disarm2_R1.innerHTML = '';
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
    }
    if (currentRound == 2) {
        winner1_R2.innerHTML = '';
        winner2_R2.innerHTML = '';
        score1_R2.innerHTML = '';
        score2_R2.innerHTML = '';
        foul1_R2.innerHTML = '';
        foul2_R2.innerHTML = '';
        advPoint1_R2.innerHTML = '';
        advPoint2_R2.innerHTML = '';
        disarm1_R2.innerHTML = '';
        disarm2_R2.innerHTML = '';
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
    }
    if (currentRound == 3) {
        winner1_R3.innerHTML = '';
        winner2_R3.innerHTML = '';
        score1_R3.innerHTML = '';
        score2_R3.innerHTML = '';
        foul1_R3.innerHTML = '';
        foul2_R3.innerHTML = '';
        advPoint1_R3.innerHTML = '';
        advPoint2_R3.innerHTML = '';
        disarm1_R3.innerHTML = '';
        disarm2_R3.innerHTML = '';
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
    }
}
function resetValues() {
    console.log(`${`resetValues()`}`);
    if (currentRound == 1) {
        advPoint1_R1_value = 0;
        advPoint2_R1_value = 0;
        advPtA_value = 0;
        advPtA.style.display = "";
        advPtA.style.border = "";
        advPtA.style.backgroundColor = "";
        advPtA.style.color = '';
        advPtD_value = 0;
        advPtD.style.display = "";
        advPtD.style.border = "";
        advPtD.style.backgroundColor = "";
        advPtD.style.color = '';
    }
    if (currentRound == 2) {
        advPoint1_R2_value = 0;
        advPoint2_R2_value = 0;
        advPtB_value = 0;
        advPtB.style.display = "";
        advPtB.style.border = "";
        advPtB.style.backgroundColor = "";
        advPtB.style.color = '';
        advPtE_value = 0;
        advPtE.style.display = "";
        advPtE.style.border = "";
        advPtE.style.backgroundColor = "";
        advPtE.style.color = '';
    }
    if (currentRound == 3) {
        advPoint1_R3_value = 0;
        advPoint2_R3_value = 0;
        advPtC.style.display = "";
        advPtC.style.border = "";
        advPtC_value = 0;
        advPtC.style.backgroundColor = "";
        advPtC.style.color = '';
        advPtF_value = 0;
        advPtF.style.display = "";
        advPtF.style.border = "";
        advPtF.style.backgroundColor = "";
        advPtF.style.color = '';
    }
    subFinalScore1 = subFinalScore1;
    subFinalScore2 = subFinalScore2;
    winRed = winRed;
    winBlue = winBlue;
    disarmA_value = 0;
    disarmA.style.backgroundColor = "";
    disarmB_value = 0;
    disarmB.style.backgroundColor = "";
    disarmC_value = 0;
    disarmC.style.backgroundColor = "";
    disarmD_value = 0;
    disarmD.style.backgroundColor = "";
    disarm1 = 0;
    disarm2 = 0;
    console.log(`${`winRed: `}${winRed}`);
    console.log(`${`winBlue: `}${winBlue}`);
    console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
    console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
}
function advantagePoint() {
    if (currentRound == 1 && currentRound != 2 && currentRound != 3) { //AD
        if (valueFoulA == 1) {
            advPoint1_R1_value = 0;
            console.log(`${`advPoint1_R1_value:`} ${advPoint1_R1_value}`);
            console.log(`${`valueFoulA:`} ${valueFoulA}`);
        }
        advPtB.style.border = "5px solid gray";
        advPtC.style.border = "5px solid gray";
        advPtE.style.border = "5px solid gray";
        advPtF.style.border = "5px solid gray";
        advPtA.addEventListener("click", () => {
            if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && currentRound == 1 && defaultScoreOne == 1) {
                if (currentRound == 1 && currentRound != 2 && currentRound != 3) { //AD
                    if (advPtA_value == 1) {
                        console.log(`${`advPtD_value:`} ${advPtD_value}`);
                        console.log(`${`advPtA_value:`} ${advPtA_value}`);
                        console.log(`${`valueFoulA:`} ${valueFoulA}`);
                        console.log(`${`advPoint1_R1_value:`} ${advPoint1_R1_value}`);
                        console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
                    }
                    if (advPtA_value == 0 && advPtD_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                        if (valueFoulA == 0 && disarm1 == 0 && disarm2 == 0) {
                            advPoint1_R1_value = 1;
                            advPtA.style.backgroundColor = 'yellow';
                            advPtA.style.color = 'black';
                            console.log(`${`advPoint1_R1_value:`} ${advPoint1_R1_value}`);
                            console.log(`${`valueFoulA:`} ${valueFoulA}`);
                            advPtA_value = 1;
                            advPoint1 = advPtA_value;
                        }
                    }
                    console.log(`${`advPoint1:`} ${advPoint1}`);
                    console.log(`${`advPoint2:`} ${advPoint2}`);
                    console.log(`${`advPoint1_R1_value:`} ${advPoint1_R1_value}`);
                    console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
                }
            }
        });
        if (valueFoulD == 1) {
            advPoint2_R1_value = 0;
            console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
            console.log(`${`valueFoulD:`} ${valueFoulD}`);
        }
        advPtD.addEventListener("click", () => {
            if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && currentRound == 1 && defaultScoreTwo == 1) {
                if (advPtD_value == 1) {
                    console.log(`${`advPtA_value:`} ${advPtA_value}`);
                    console.log(`${`advPtD_value:`} ${advPtD_value}`);
                    console.log(`${`valueFoulD:`} ${valueFoulD}`);
                    console.log(`${`advPoint1_R1_value:`} ${advPoint1_R1_value}`);
                    console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
                }
                if (advPtD_value == 0 && advPtA_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulD == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint2_R1_value = 1;
                        advPtD.style.backgroundColor = 'yellow';
                        advPtD.style.color = 'black';
                        console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
                        console.log(`${`valueFoulD:`} ${valueFoulD}`);
                        advPtD_value = 1;
                        advPoint2 = advPtD_value;
                    }
                }
                console.log(`${`advPoint1:`} ${advPoint1}`);
                console.log(`${`advPoint2:`} ${advPoint2}`);
                console.log(`${`advPoint1_R1_value:`} ${advPoint1_R1_value}`);
                console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
            }
        });
    }
    if (currentRound == 2 && currentRound != 1 && currentRound != 3) { //BE
        if (valueFoulA == 1) {
            advPoint1_R2_value = 0;
            console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
            console.log(`${`valueFoulA:`} ${valueFoulA}`);
        }
        advPtB.style.border = "5px solid green";
        advPtE.style.border = "5px solid green";
        advPtC.style.border = "5px solid gray";
        advPtF.style.border = "5px solid gray";
        advPtB.addEventListener("click", () => {
            if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && currentRound == 2 && defaultScoreOne == 1) {
                if (advPtB_value == 1) {
                    console.log(`${`advPtE_value:`} ${advPtE_value}`);
                    console.log(`${`advPtB_value:`} ${advPtB_value}`);
                    console.log(`${`valueFoulA:`} ${valueFoulA}`);
                    console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
                    console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);
                }
                if (advPtB_value == 0 && advPtE_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulA == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint1_R2_value = 1;
                        advPtB.style.backgroundColor = 'yellow';
                        advPtB.style.color = 'black';
                        console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
                        console.log(`${`valueFoulA:`} ${valueFoulA}`);
                        advPtB_value = 1;
                        advPoint1 = advPtB_value;
                    }
                }
                console.log(`${`advPoint1:`} ${advPoint1}`);
                console.log(`${`advPoint2:`} ${advPoint2}`);
                console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
                console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);
            }
        });
        if (valueFoulD == 1) {
            advPoint2_R2_value = 0;
            console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);
            console.log(`${`valueFoulD:`} ${valueFoulD}`);
        }
        advPtE.addEventListener("click", () => {
            if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && currentRound == 2 && defaultScoreTwo == 1) {
                if (advPtE_value == 1) {
                    console.log(`${`advPtB_value:`} ${advPtB_value}`);
                    console.log(`${`advPtE_value:`} ${advPtE_value}`);
                    console.log(`${`valueFoulD:`} ${valueFoulD}`);
                    console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
                    console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);                }
                if (advPtE_value == 0 && advPtB_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulD == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint2_R2_value = 1;
                        advPtE.style.backgroundColor = 'yellow';
                        advPtE.style.color = 'black';
                        console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);
                        console.log(`${`valueFoulD:`} ${valueFoulD}`);
                        advPtE_value = 1;
                        advPoint2 = advPtE_value;
                    }
                }
                console.log(`${`advPoint1:`} ${advPoint1}`);
                console.log(`${`advPoint2:`} ${advPoint2}`);
                console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
                console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);
            }
        });
    }
    if (currentRound == 3 && currentRound != 1 && currentRound != 2) { //CF
        if (valueFoulA == 1) {
            advPoint1_R3_value = 0;
            console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
            console.log(`${`valueFoulA:`} ${valueFoulA}`);
        }
        advPtC.style.border = "5px solid green";
        advPtF.style.border = "5px solid green";
        advPtC.addEventListener("click", () => {
            if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && currentRound == 3 && defaultScoreOne == 1) {
                if (advPtC_value == 1) {
                    console.log(`${`advPtF_value:`} ${advPtF_value}`);
                    console.log(`${`advPtC_value:`} ${advPtC_value}`);
                    console.log(`${`valueFoulA:`} ${valueFoulA}`);
                    console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
                    console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);
                }
                if (advPtC_value == 0 && advPtF_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulA == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint1_R3_value = 1;
                        advPtC.style.backgroundColor = 'yellow';
                        advPtC.style.color = 'black';
                        console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
                        console.log(`${`valueFoulA:`} ${valueFoulA}`);
                        advPtC_value = 1;
                        advPoint1 = advPtC_value;
                    }
                }
                console.log(`${`advPoint1:`} ${advPoint1}`);
                console.log(`${`advPoint2:`} ${advPoint2}`);
                console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
                console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);
            }
        });
        if (valueFoulD == 1) {
            advPoint2_R3_value = 0;
            console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);
            console.log(`${`valueFoulD:`} ${valueFoulD}`);
        }
        advPtF.addEventListener("click", () => {
            if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1 && currentRound == 3 && defaultScoreTwo == 1) {
                if (advPtF_value == 1) {
                    console.log(`${`advPtC_value:`} ${advPtC_value}`);
                    console.log(`${`advPtF_value:`} ${advPtF_value}`);
                    console.log(`${`valueFoulD:`} ${valueFoulD}`);
                    console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
                    console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);                }
                if (advPtF_value == 0 && advPtC_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulD == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint2_R3_value = 1;
                        advPtF.style.backgroundColor = 'yellow';
                        advPtF.style.color = 'black';
                        console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);
                        console.log(`${`valueFoulD:`} ${valueFoulD}`);
                        advPtF_value = 1;
                        advPoint2 = advPtF_value;
                    }
                }
                console.log(`${`advPoint1:`} ${advPoint1}`);
                console.log(`${`advPoint2:`} ${advPoint2}`);
                console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
                console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);
            }
        });
    }
}
//advantagePoint();
function resetForRound() {
    resetCountdown();
    resetForFoul();
    resetValues();
    submitCurrent.disabled = false;
    startbtn.disabled = false;
    playbtn.disabled = true;
    resetbtn.disabled = true;
    stopbtn.disabled = true;
    nextbtn.disabled = true;
    savebtn.disabled = true;
}
    redAdd.addEventListener('mouseover', () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            redAdd.style.backgroundColor = 'green';
            redAdd.style.color = 'yellow';
            redMinus.style.backgroundColor = 'red';
            redMinus.style.color = 'red';
        }
    });
    redAdd.addEventListener('mouseout', () => {
        redAdd.style.backgroundColor = 'black';
        redAdd.style.color = '';
        redMinus.style.backgroundColor = '';
        redMinus.style.color = '';
    });
    redMinus.addEventListener('mouseover', () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            redMinus.style.backgroundColor = 'green';
            redMinus.style.color = 'yellow';
            redAdd.style.backgroundColor = 'red';
            redAdd.style.color = 'red';
        }
    });
    redMinus.addEventListener('mouseout', () => {
        redMinus.style.backgroundColor = 'black';
        redMinus.style.color = '';
        redAdd.style.backgroundColor = '';
        redAdd.style.color = '';
    });
    redAdd.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            if (inputScore1.value >= maxScoreValue) {
            } else if (defaultScoreOne < 9) {
                defaultScoreOne += 1;
                inputScore1.value = defaultScoreOne;
                scoreOne.innerHTML = "0" + defaultScoreOne;
            } else {
                defaultScoreOne += 1;
                inputScore1.value = defaultScoreOne;
                scoreOne.innerHTML = defaultScoreOne;
            }
            console.log(defaultScoreOne);
            if (currentRound == 1) {
                if (advPtA_value == 0 || advPtD_value != 1 || valueFoulA != 1 || valueFoulD != 1 || disarm1 == 0 || disarm2 == 0) {
                    advPtA.click();
                }
            }
            if (currentRound == 2) {
                if (advPtB_value == 0 || advPtE_value != 1 || valueFoulA != 1 || valueFoulD != 1 || disarm1 == 0 || disarm2 == 0) {
                    advPtB.click();
                }
            }
            if (currentRound == 3) {
                if (advPtC_value == 0 || advPtF_value != 1 || valueFoulA != 1 || valueFoulD != 1 || disarm1 == 0 || disarm2 == 0) {
                    advPtC.click();
                }
            }
        }
    });
    redMinus.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            //console.log("redMinusBtn");
            redMinusBtnConfirm = confirm(`${`Are you sure you want to remove a point?`}`);
            if (redMinusBtnConfirm == false) {
                console.log("false");
                return false;
            } else {
                if (inputScore1.value <= 0) {
                    console.log(inputScore1.value);
                } else if (defaultScoreOne <= 10) {
                    defaultScoreOne -= 1;
                    inputScore1.value = defaultScoreOne;
                    scoreOne.innerHTML = "0" + defaultScoreOne;
                } else {
                    defaultScoreOne -= 1;
                    inputScore1.value = defaultScoreOne;
                    scoreOne.innerHTML = defaultScoreOne;
                }
                console.log(defaultScoreOne);
            }
        }
    });
    blueAdd.addEventListener('mouseover', () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            blueAdd.style.backgroundColor = 'green';
            blueAdd.style.color = 'yellow';
            blueMinus.style.backgroundColor = 'blue';
            blueMinus.style.color = 'blue';
        }
    });
    blueAdd.addEventListener('mouseout', () => {
        blueAdd.style.backgroundColor = 'black';
        blueAdd.style.color = '';
        blueMinus.style.backgroundColor = 'black';
        blueMinus.style.color = '';
    });
    blueMinus.addEventListener('mouseover', () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            blueMinus.style.backgroundColor = 'green';
            blueMinus.style.color = 'yellow';
            blueAdd.style.backgroundColor = 'blue';
            blueAdd.style.color = 'blue';
        }
    });
    blueMinus.addEventListener('mouseout', () => {
        blueMinus.style.backgroundColor = '';
        blueMinus.style.color = '';
        blueAdd.style.backgroundColor = '';
        blueAdd.style.color = '';
    });
    blueAdd.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            if (inputScore2.value >= maxScoreValue) {
            } else if (defaultScoreTwo < 9) {
                defaultScoreTwo += 1;
                inputScore2.value = defaultScoreTwo;
                scoreTwo.innerHTML = "0" + defaultScoreTwo;
            } else {
                defaultScoreTwo += 1;
                inputScore2.value = defaultScoreTwo;
                scoreTwo.innerHTML = defaultScoreTwo;
            }
            console.log(defaultScoreTwo);
            if (currentRound == 1) {
                if (advPtD_value == 0 && advPtA_value != 1 && valueFoulA != 1 && valueFoulB != 1 && valueFoulD != 1 && valueFoulE != 1 && disarm1 != 1 && disarm2 != 1) {
                    advPtD.click();
                }
            }
            if (currentRound == 2) {
                if (advPtE_value == 0 && advPtB_value != 1 && valueFoulA != 1 && valueFoulB != 1 && valueFoulD != 1 && valueFoulE != 1 && disarm1 != 1 && disarm2 != 1) {
                    advPtE.click();
                }
            }
            if (currentRound == 3) {
                if (advPtF_value == 0 && advPtC_value != 1 && valueFoulA != 1 && valueFoulB != 1 && valueFoulD != 1 && valueFoulE != 1 && disarm1 != 1 && disarm2 != 1) {
                    advPtF.click();
                }
            }
        }
    });
    blueMinus.addEventListener("click", () => {
        if (valueFoulF == 0 && valueFoulC == 0 && disarmD_value == 0 && disarmB_value == 0 && startActivate == 1) {
            var blueMinusBtnConfirm = confirm(`${`Are you sure you want to remove a point?`}`);
            if (blueMinusBtnConfirm == false) {
                return false;
            } else {
                if (inputScore2.value <= 0) {
                    console.log(inputScore2.value);
                } else if (defaultScoreTwo <= 10) {
                    defaultScoreTwo -= 1;
                    inputScore2.value = defaultScoreTwo;
                    scoreTwo.innerHTML = "0" + defaultScoreTwo;
                } else {
                    defaultScoreTwo -= 1;
                    inputScore2.value = defaultScoreTwo;
                    scoreTwo.innerHTML = defaultScoreTwo;
                }
                console.log(defaultScoreTwo);
            }
        }
    });
} //scorer()
scorer();
function determineWinner() {
    console.log(`${`inputscore1.value`} ${inputscore1.value}`);
    console.log(`${`inputscore2.value`} ${inputscore2.value}`);
    console.log(`${`subTotalFoul1`} ${subTotalFoul1}`);
    console.log(`${`subTotalFoul2`} ${subTotalFoul2}`);
    console.log(`${`disarm1`} ${disarm1}`);
    console.log(`${`disarm2`} ${disarm2}`);
    console.log(`${`suddenDeathScoreA`} ${suddenDeathScoreA}`);
    console.log(`${`suddenDeathScoreB`} ${suddenDeathScoreB}`);
    if (currentRound == 1) {
        console.log(`${`advPoint1_R1_value`} ${advPoint1_R1_value}`);
        console.log(`${`advPoint2_R1_value`} ${advPoint2_R1_value}`);
    }
    if (currentRound == 2) {
        console.log(`${`advPoint1_R2_value`} ${advPoint1_R2_value}`);
        console.log(`${`advPoint2_R2_value`} ${advPoint2_R2_value}`);
    }
    if (currentRound == 3) {
        console.log(`${`advPoint1_R3_value`} ${advPoint1_R3_value}`);
        console.log(`${`advPoint2_R3_value`} ${advPoint2_R3_value}`);
    }
    if ((inputscore1.value > inputscore2.value || subTotalFoul2 == 3 || disarm2 == 2) ||

        (inputscore1.value == inputscore2.value &&
        (suddenDeathScoreA > suddenDeathScoreB || subTotalFoul1 < subTotalFoul2
        || disarm1 < disarm2 || (redCoins == heads && redCoins != 0) || (redCoins == tails && redCoins != 0))
        ) || (
        inputscore1.value < inputscore2.value &&
        (subTotalFoul2 == 3 || disarm2 == 2)
        ) || (
        inputscore1.value > inputscore2.value &&
        (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
        )

    || (inputscore1.value == inputscore2.value && ((advPoint1_R1_value == 1 && currentRound == 1)
    || (advPoint1_R2_value == 1 && currentRound == 2)
    || (advPoint1_R3_value == 1 && currentRound == 3)
    || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1)))) {

        winnerScore = inputscore1.value;
        loserScore = inputscore2.value;
        winnerName = nameRedValue;
        loserName = nameBlueValue;
        console.log(`RED WINS`);
        alert(`RED WINS`);
        nextbtn.disabled = false;
        //if tester
        if (inputscore1.value < inputscore2.value &&
            (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
            && (subTotalFoul2 =! 3 || disarm2 != 2)) {
                console.log(`${`testBlueWins1`}`);
        }
        if (inputscore1.value > inputscore2.value &&
            (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
            && (subTotalFoul1 != 3 || disarm1 != 2)) {
                console.log(`${`testRedWins1`}`);
        }
    } else if (
        (inputscore1.value < inputscore2.value || subTotalFoul1 == 3 || disarm1 == 2) ||

        (inputscore1.value == inputscore2.value &&
        (suddenDeathScoreA < suddenDeathScoreB || subTotalFoul1 > subTotalFoul2
        || disarm1 > disarm2 || (blueCoins == heads && blueCoins != 0) || (blueCoins == tails && blueCoins != 0))
        ) || (
        inputscore1.value > inputscore2.value &&
        (subTotalFoul1 == 3 || disarm1 == 2)
        ) || (
        inputscore1.value < inputscore2.value &&
        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
        )

    || (inputscore1.value == inputscore2.value && ((advPoint2_R1_value == 1 && currentRound == 1)
    || (advPoint2_R2_value == 1 && currentRound == 2)
    || (advPoint2_R3_value == 1 && currentRound == 3)
    || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1)))) {
        winnerScore = inputscore2.value;
        loserScore = inputscore1.value;
        winnerName = nameBlueValue;
        loserName = nameRedValue;
        console.log(`BLUE WINS`);
        alert(`BLUE WINS`);
        nextbtn.disabled = false;
        if (inputscore1.value < inputscore2.value &&
            (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
            && (subTotalFoul2 =! 3 || disarm2 != 2)) {
                console.log(`${`testBlueWins2`}`);
        }
    } else {
        console.log(`${`elseTie`}`);
        if (currentRound == 1) {
            if (advPoint1_R1_value == 1) { //red wins
                console.log(`RED WINS from advPoint`);
            }
            if (advPoint2_R1_value == 1) { //blue wins
                console.log(`BLUE WINS from advPoint`);
            }
        }
        if (currentRound == 2) {
            if (advPoint1_R2_value == 1) { //red wins
                console.log(`RED WINS from advPoint`);
            }
            if (advPoint2_R2_value == 1) { //blue wins
                console.log(`BLUE WINS from advPoint`);
            }
        }
        if (currentRound == 3) {
            if (advPoint1_R3_value == 1) { //red wins
                console.log(`RED WINS from advPoint`);
            }
            if (advPoint2_R3_value == 1) { //blue wins
                console.log(`BLUE WINS from advPoint`);
            }
        }
        console.log(`It's a TIE`);
        alert(`It's a TIE`);
        nextbtn.disabled = true;
        savebtn.disabled = true;
        showSDBoardval = 1;
        showTIEformsval = 1;
        showSDCTval = 1;
        showSDBoard();
        showSDBoardval = 1;
        showSDCT();
        table_contents.style.display = 'none';
        show_SDCT.innerHTML = `${"coin toss"}`;
        suddenDeathBoard.focus();
    }
}

setInterval(showTime, 1000);
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let time = new Date();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let day = time.getDay();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = " AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    // hour = hour < 10 ? "0" + hour : hour;
    hour = hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    let currentDay = weekday[day];
    let currentMonth = monthNames[month];
    // Displaying the time
    document.getElementById(
        "currentDate"
    ).innerHTML = `${`Local time:`} ${currentTime} - ${currentDay} - ${currentMonth} ${date}, ${year}`;
}
showTime();

//suddenDeath
let timerIntervalSD;
let totalSecondsSD = 0;
let timerRunningSD = false;
var suddenDeathScoreA = 0;
var suddenDeathScoreB = 0;
var displayTimeSD = document.getElementById("timerSudden_outside").contentWindow.document.getElementById("suddenTimer_actual");
var suddenDeathAbtn = document.getElementById("suddenDeathAbtn");
var suddenDeathBbtn = document.getElementById("suddenDeathBbtn");
var player1SD = document.getElementById("player1SD");
var player2SD = document.getElementById("player2SD");
var startbtn_SD = document.getElementById("startbtn_SD");
var playbtn_SD = document.getElementById("playbtn_SD");
var stopbtn_SD = document.getElementById("stopbtn_SD");
var resetbtn_SD = document.getElementById("resetbtn_SD");
var nextBtn_SD = document.getElementById("nextBtn_SD");
var inputMinutes_SD = document.getElementById("inputMinutes_SD");
var inputSeconds_SD = document.getElementById("inputSeconds_SD");
var submitbtn_SD = document.getElementById("submitbtn_SD");
var form_SD = document.getElementById("form_SD");
var suddenDeathBoard = document.getElementById("suddenDeathBoard");
var valueMinutesSD = parseInt(inputMinutes_SD.value);
var valueSecondsSD = parseInt(inputSeconds_SD.value);
var valueMinsDefSD = 0;
var valueSecondsDefSD = 0;
var showFormSDval = 0;
var showSDBoardval = 0; //make 0 final
var show_SDCT = document.getElementById("show_SDCT");
var showSDCTval = 0; // make 0 final
var showTIEformsval = 1;
showSDBoard();

show_SDCT.addEventListener("click", () => {
    if (showTIEformsval == 1) {
        console.log(showTIEformsval);
        showTIEformsval = 0;
        console.log(showTIEformsval);
        showCTBoardval = 1;
        showSDBoardval = 0;
        showSDBoard();
        showCTBoard();
        showFormCTval = 1;
        showFormCT();
        show_SDCT.innerHTML = `${"tie breaker"}`;
        coinTossBoard.focus();
    } else {
        console.log(showTIEformsval);
        showTIEformsval = 1;
        console.log(showTIEformsval);
        showSDBoardval = 1;
        showCTBoardval = 0;
        showCTBoard();
        showSDBoard();
        show_SDCT.innerHTML = `${"coin toss"}`;
        suddenDeathBoard.focus();
    }
});
function btnsSD() {
    startbtn_SD.disabled = true;
    playbtn_SD.disabled = true;
    stopbtn_SD.disabled = true;
    resetbtn_SD.disabled = true;
    suddenDeathAbtn.disabled = true;
    suddenDeathBbtn.disabled = true;
    nextBtn_SD.disabled = true;
}
btnsSD();
nextBtn_SD.addEventListener("click", () => {
    let nextBtnSD = confirm(`${`Are you sure you want to proceed to the next round?`}\n${`Current Round:`} ${currentRound}`);
    if (nextBtnSD == false) {
        console.log("nextBtnSD");
        return false;
    } else {
        determineWinner();
        nextRound();
        resetDefaultSD();
        inputMinutes_SD.value = 0;
        inputSeconds_SD.value = 30;
        valueMinutesSD = 0;
        valueSecondsSD = 0;
        totalSecondsSD = 0;
        suddenDeathScoreA = 0;
        suddenDeathScoreB = 0;
        updateTimerSD(valueMinutesSD, valueSecondsSD);
        btnsSD();
        showSDBoardval = 0;
        showSDBoard();
        table_contents.style.display = 'grid';
        resetForRound();
        console.log(`${`resetForRound()`}`);
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        console.log(`${defaultScoreOne}`);
        console.log(`${defaultScoreTwo}`);
        resetCountdown();
        resetDefaultCT();
        startbtn_SD.disabled = true;
        startActivate = 0;
        scoreboard_table.focus();
        if (winRed == 2) {
            startbtn.disabled = true;
            tablePartial.focus();
        }
        if (winBlue == 2) {
            startbtn.disabled = true;
            tablePartial.focus();
        }
    }
});
suddenDeathAbtn.addEventListener("click", () => {
    if (suddenDeathScoreA == 0) {
        stopbtn_SD.click();
        console.log(`${suddenDeathScoreA}`);
        player1SD.style.background = 'yellow';
        player1SD.style.color = 'red';
        player2SD.style.border = '5px solid black';
        suddenDeathScoreA += 1;
        suddenDeathAbtn.disabled = true;
        suddenDeathBbtn.disabled = true;
        playbtn_SD.disabled = true;
        nextBtn_SD.disabled = false;
        alert("RED WINS via Tie-Breaker");
    } else {
        console.log(`${suddenDeathScoreA}`);
    }
});
suddenDeathBbtn.addEventListener("click", () => {
    if (suddenDeathScoreB == 0) {
        stopbtn_SD.click();
        console.log(`${suddenDeathScoreB}`);
        player2SD.style.background = 'yellow';
        player2SD.style.color = 'blue';
        player1SD.style.border = '5px solid black';
        suddenDeathScoreB += 1;
        suddenDeathAbtn.disabled = true;
        suddenDeathBbtn.disabled = true;
        playbtn_SD.disabled = true;
        nextBtn_SD.disabled = false;
        alert("BLUE WINS via Tie-Breaker");
    } else {
        console.log(`${suddenDeathScoreB}`);
    }
});
startbtn_SD.addEventListener("click", () => {
    timerRunningSD = false;
    runtimeSD();
    startbtn_SD.disabled = true;
    playbtn_SD.disabled = true;
    stopbtn_SD.disabled = false;
    resetbtn_SD.disabled = false;
    submitbtn_SD.disabled = true;
    suddenDeathAbtn.disabled = false;
    suddenDeathBbtn.disabled = false;
    showFormSD();
    showSDCTval = 0;
    showSDCT();
});
playbtn_SD.addEventListener("click", () => {
    playCountdownSD();
    playbtn_SD.disabled = true;
    stopbtn_SD.disabled = false;
});
stopbtn_SD.addEventListener("click", () => {
    stopCountdownSD();
    stopbtn_SD.disabled = true;
    playbtn_SD.disabled = false;
});
resetbtn_SD.addEventListener("click", () => {
    let resetBtnConfirmSD = confirm('Are you sure you want to reset time?');
    if (resetBtnConfirmSD == false) {
        console.log(`${`false resetSD`}`);
        return false;
    } else {
        resetDefaultSD();
        showSDCTval = 1;
        showSDCT();
    }
});
function resetDefaultSD() {
    resetCountdownSD();
    suddenDeathScoreA = 0;
    suddenDeathScoreB = 0;
    player1SD.style.background = '';
    player2SD.style.background = '';
    player1SD.style.color = '';
    player2SD.style.color = '';
    player1SD.style.border = '';
    player2SD.style.border = '';
    resetbtn_SD.disabled = true;
    playbtn_SD.disabled = true;
    stopbtn_SD.disabled = true;
    startbtn_SD.disabled = false;
    submitbtn_SD.disabled = false;
    nextBtn_SD.disabled = true;
    suddenDeathAbtn.disabled = true;
    suddenDeathBbtn.disabled = true;
    showFormSDval = 1;
    showFormSD();
    valueMinutesSD = valueMinutesSD;
    valueSecondsSD = valueSecondsSD;
}
function showSDBoard() {
    if (showSDBoardval == 0) {
        suddenDeathBoard.style.display = 'none';
    } else {
        suddenDeathBoard.style.display = 'block';
        showSDBoardval = 0;
    }
}
function showFormSD() {
    if (showFormSDval == 0) {
        form_SD.style.display = 'none';
    } else {
        form_SD.style.display = 'inline-block';
        showFormSDval = 0;
    }
}
function resetCountdownSD() {
    valueMinutesSD = valueMinsDefSD;
    valueSecondsSD = valueSecondsDefSD;
    totalSecondsSD = valueMinutesSD * 60 + valueSecondsSD;
    runtimeSD();
    clearInterval(timerIntervalSD);
    updateTimerSD(valueMinutesSD, valueSecondsSD);
}
function stopCountdownSD() {
    runtimeSD();
    clearInterval(timerIntervalSD);
    timerRunningSD = false;
    console.log("pauseSD");
}
function playCountdownSD() {
    runtimeSD();
    timerRunningSD = true;
    console.log("playSD");
}
function runtimeSD() {
    if (!timerRunningSD) {
    totalSecondsSD = valueMinutesSD * 60 + valueSecondsSD;
    timerIntervalSD = setInterval(function () {
        console.log(`${`totalSecondsSD`} ${totalSecondsSD}`);
        totalSecondsSD--;
        valueMinutesSD = Math.floor(totalSecondsSD / 60);
        valueSecondsSD = totalSecondsSD % 60;
        updateTimerSD(valueMinutesSD, valueSecondsSD);
        console.log(`${`totalSecondsSD1`} ${totalSecondsSD}`);
        if (totalSecondsSD <= 0) {
            console.log(`${`totalSecondsSD`} ${totalSecondsSD}`);
            clearInterval(timerIntervalSD);
            console.log(suddenDeathScoreA);
            console.log(suddenDeathScoreB);
            if (suddenDeathScoreA > suddenDeathScoreA) {
                console.log(suddenDeathScoreA);
            } else if (suddenDeathScoreA < suddenDeathScoreA) {
                console.log(suddenDeathScoreB);
            } else {
                console.log("Tie!");
                alert("Tie!");
                stopbtn_SD.disabled = true;
                playbtn_SD.disabled = true;
                suddenDeathAbtn.disabled = true;
                suddenDeathBbtn.disabled = true;
            }
        }
    }, 1000);
    timerRunningSD = true;
    }
}
function updateTimerSD(valueMinutesSD, valueSecondsSD) {
    console.log(`${`totalSecondsSD`} ${totalSecondsSD}`);
    console.log(`${`totalSecondsSD`} ${totalSecondsSD}`);
    console.log(`${`valueMinutesSD`} ${valueMinutesSD}`);
    console.log(`${`totalSecondsSD`} ${totalSecondsSD}`);
    console.log(`${`valueSecondsSD`} ${valueSecondsSD}`);
    if (totalSecondsSD == -1) {
        valueMinutesSD = 0;
        valueSecondsSD = 0;
    }
    if (showSDBoardval == 1) {
        displayTimeSD.innerHTML = `${valueMinutesSD < 10 ? '0' + valueMinutesSD : valueMinutesSD}:${valueSecondsSD < 10 ? '0' + valueSecondsSD : valueSecondsSD}`;
    }
}
submitbtn_SD.addEventListener("click", () => {
    valueMinutesSD = parseInt(inputMinutes_SD.value);
    valueSecondsSD = parseInt(inputSeconds_SD.value);
    if (isNaN(valueMinutesSD) || isNaN(valueSecondsSD) || valueMinutesSD < 0 || valueSecondsSD < 0 || valueMinutesSD > maxMinutes || valueSecondsSD >= maxSeconds) {
        console.log(`${valueMinutesSD} ${valueSecondsSD}`);
        alert('Please enter valid minutes and seconds.');
        return;
    } else {
        suddenDeathBoard.focus();
        valueMinsDefSD = valueMinutesSD;
        valueSecondsDefSD = valueSecondsSD;
        console.log(`${valueMinutesSD} ${valueSecondsSD}`);
        displayTimeSD.innerHTML = `${valueMinutesSD < 10 ? '0' + valueMinutesSD : valueMinutesSD}:${valueSecondsSD < 10 ? '0' + valueSecondsSD : valueSecondsSD}`;
        startbtn_SD.disabled = false;
    }
});

//cointoss
var resetCoinToss = document.getElementById("resetCoinToss");
var flipCoinToss = document.getElementById("flipCoinToss");
var submitToss = document.getElementById("submitToss");
var nextRoundCT = document.getElementById("nextRoundCT");
var coin = document.getElementById("cointoss_outside").contentWindow.document.getElementById("coin");

var inputRedCoins = document.getElementById("inputRedCoins");
var inputBlueCoins = document.getElementById("inputBlueCoins");
var inputRedCoinsVal;
var inputBlueCoinsVal;

var coinTossBoard = document.getElementById("coinTossBoard");
var input_CT = document.getElementById("input_CT");
var redCoinChoice = document.getElementById("redCoinChoice");
var blueCoinChoice = document.getElementById("blueCoinChoice");
var headsCount = document.getElementById("heads-count");
var tailsCount = document.getElementById("tails-count");
var showFormCTval = 0; //make 0 final
var showCTBoardval = 0; //make 0 final
showFormCT();
showCTBoard();
showSDCT();

let heads = 0;
let tails = 0;
let headsTotal = 0;
let tailsTotal = 0;
let redCoins = 0;
let blueCoins = 0;

flipCoinToss.disabled = true;
resetCoinToss.disabled = true;
nextRoundCT.disabled = true;

nextRoundCT.addEventListener("click", () => {
    let nextRoundCT = confirm(`${`Are you sure you want to proceed to the next round?`}\n${`Current Round:`} ${currentRound}`);
    if (nextRoundCT == false) {
        console.log("nextRoundCTFalse");
        return false;
    } else {
        determineWinner();
        nextRound();
        resetDefaultCT();
        table_contents.style.display = 'grid';
        resetForRound();
        console.log(`${`resetForRound()`}`);
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        console.log(`${defaultScoreOne}`);
        console.log(`${defaultScoreTwo}`);
        resetCountdown();
        resetDefaultSD();
        resetColorToss();
        showSDCTval = 0;
        showSDCT();
        showFormCTval = 0;
        showFormCT();
        showCTBoardval = 0;
        showCTBoard();
        showTIEformsval = 1;
        startbtn_SD.disabled = true;
        startActivate = 0;
        coin.style.animation = "none";
        coin.style.transform = "";
        i=1;
        scoreboard_table.focus();
        if (winRed == 2) {
            startbtn.disabled = true;
            tablePartial.focus();
        }
        if (winBlue == 2) {
            startbtn.disabled = true;
            tablePartial.focus();
        }
    }
});
submitToss.addEventListener("click", () => {
    inputRedCoinsVal = parseInt(inputRedCoins.value);
    inputBlueCoinsVal = parseInt(inputBlueCoins.value);
    console.log(inputRedCoinsVal);
    console.log(inputBlueCoinsVal);
    if (isNaN(inputRedCoinsVal) || isNaN(inputBlueCoinsVal) || inputRedCoinsVal > 2 || inputBlueCoinsVal > 2 || inputRedCoinsVal == inputBlueCoinsVal) {
        alert('Please input "1" for Heads or "2" for Tails.');
        return;
    } else {
        coinTossBoard.focus();
        showSDCTval = 0;
        showSDCT();
        showFormCTval = 0;
        showFormCT();
        submitToss.disabled = true;
        flipCoinToss.disabled = false;
        resetCoinToss.disabled = false;
        if (inputRedCoinsVal == 1) {
            redCoinChoice.innerHTML = `${"HEADS"}`;
            redCoins = inputRedCoinsVal;
            console.log(`${"inputRedCoinsVal"} ${inputRedCoinsVal}`)
            console.log(`${"redCoins"} ${redCoins}`)
        }
        if (inputRedCoinsVal == 2) {
            redCoinChoice.innerHTML = `${"TAILS"}`;
            redCoins = inputRedCoinsVal;
            console.log(`${"inputRedCoinsVal"} ${inputRedCoinsVal}`)
            console.log(`${"redCoins"} ${redCoins}`)
        }
        if (inputBlueCoinsVal == 1) {
            blueCoinChoice.innerHTML = `${"HEADS"}`;
            blueCoins = inputBlueCoinsVal;
            console.log(`${"inputBlueCoinsVal"} ${inputBlueCoinsVal}`)
            console.log(`${"blueCoins"} ${blueCoins}`)
        }
        if (inputBlueCoinsVal == 2) {
            blueCoinChoice.innerHTML = `${"TAILS"}`;
            blueCoins = inputBlueCoinsVal;
            console.log(`${"inputBlueCoinsVal"} ${inputBlueCoinsVal}`)
            console.log(`${"blueCoins"} ${blueCoins}`)
        }
    }
});
resetCoinToss.addEventListener("click", () => {
    resetCoinTossConfirm = confirm(`${`Are you sure you want to reset?`} ${`Current Round:`} ${currentRound}\n
    ${`Heads: 1 / Tails: 2`}
    ${`RED:`} ${inputRedCoinsVal} --- ${`BLUE:`} ${inputBlueCoinsVal}`);
    if (resetCoinTossConfirm == false) {
        console.log(`${`resetCoinTossConfirm`}`);
        return false;
    } else {
        console.log("resetCoinToss");
        coin.style.animation = "none";
        resetColorToss();
        resetDefaultCT();
        showFormCTval = 1;
        showFormCT();
        showSDCTval = 1;
        showSDCT();
        headsTotal = 0;
        tailsTotal = 0;
        updateStats();
        coin.style.animation = "none";
        coin.style.transform = "";
        i=1;
    }
});
var i = 1;
flipCoinToss.addEventListener("click", () => {
    resetCoinToss.disabled = true;
    submitToss.disabled = true;
    resetColorToss();
    console.log("flipCoinToss");
    console.log(i);
    coin.style.animation = "none";
    if (i) {
        coin.style.transform = "rotateY(0)";
    }
    else {
        coin.style.transform = "rotateY(180deg)";
    }
    coinTossBoard.focus();
    i = Math.floor(Math.random() * 2);
    console.log(i);
    heads = 0;
    tails = 0;
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-heads 2s forwards";
        }, 1000);
        heads+=1;
        headsTotal+=1;
        i=i;
    }
    else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 2s forwards";
        }, 1000);
        tails+=2;
        tailsTotal+=1;
        i=i;
    }
    setTimeout(updateStats, 3000);
    disableButton();
    setTimeout(tossCoinResult, 3000);
});
function showSDCT() {
    if (showSDCTval == 0) {
        show_SDCT.style.display = "none";
    } else {
        show_SDCT.style.display = "";
        showSDCTval = 0;
    }
}
function showCTBoard() {
    if (showCTBoardval == 0) {
        coinTossBoard.style.display = "none";
    } else {
        coinTossBoard.style.display = "grid";
        showCTBoardval = 0;
    }
}
function showFormCT() {
    if (showFormCTval == 0) {
        input_CT.style.display = "none";
    } else {
        input_CT.style.display = "";
        showFormCTval = 0;
    }
}
function resetDefaultCT() {
    heads = 0;
    tails = 0;
    redCoins = 0;
    blueCoins = 0;
    submitToss.disabled = false;
    resetCoinToss.disabled = true;
    flipCoinToss.disabled = true;
    nextRoundCT.disabled = true;
    redCoinChoice.innerHTML = `${""}`;
    blueCoinChoice.innerHTML = `${""}`;
    inputRedCoins.value = "";
    inputBlueCoins.value = "";
    inputRedCoinsVal = 0;
    inputBlueCoinsVal = 0;
    headsCount.textContent = "";
    tailsCount.textContent = "";
}
function resetColorToss() {
    redCoinChoice.style.background = "";
    redCoinChoice.style.color = "";
    redCoinChoice.style.border = "";
    blueCoinChoice.style.background = "";
    blueCoinChoice.style.color = "";
    blueCoinChoice.style.border = "";
}
function updateStats() {
    if (inputRedCoinsVal == 1) {
        headsCount.textContent = `Heads: ${headsTotal}`;
        tailsCount.textContent = `Tails: ${tailsTotal}`;
    }
    if (inputBlueCoinsVal == 1) {
        headsCount.textContent = `Tails: ${tailsTotal}`;
        tailsCount.textContent = `Heads: ${headsTotal}`;
    }
}
function disableButton() {
    flipCoinToss.disabled = true;
    resetCoinToss.disabled = true;
    nextRoundCT.disabled = true;
    setTimeout(function () {
        flipCoinToss.disabled = false;
        resetCoinToss.disabled = false;
        nextRoundCT.disabled = false;
    }, 3000);
}
function tossCoinResult() {
    if ((redCoins == heads) || (blueCoins == heads)) {
        console.log("You Win1");
        if (redCoins == heads) {
            console.log("Red Coins Wins via heads");
            redCoinChoice.style.background = 'yellow';
            redCoinChoice.style.color = 'red';
            blueCoinChoice.style.border = '5px solid black';
        }
        if (blueCoins == heads) {
            console.log("Blue Coin Wins via heads");
            blueCoinChoice.style.background = 'yellow';
            blueCoinChoice.style.color = 'blue';
            redCoinChoice.style.border = '5px solid black';
        }
    } else if ((redCoins == tails) || (blueCoins == tails)) {
        console.log("You Win2");
        if (redCoins == tails) {
            console.log("Red Coins Wins via tails");
            redCoinChoice.style.background = 'yellow';
            redCoinChoice.style.color = 'red';
            blueCoinChoice.style.border = '5px solid black';
        }
        if (blueCoins == tails) {
            console.log("Blue Coin Wins via tails");
            blueCoinChoice.style.background = 'yellow';
            blueCoinChoice.style.color = 'blue';
            redCoinChoice.style.border = '5px solid black';
        }
    }
    else {
        console.log("Tie!");
        console.log(`${"heads"} ${heads}`);
        console.log(`${"tails"} ${tails}`);
        console.log(`${"redCoins"} ${redCoins}`);
        console.log(`${"blueCoins"} ${blueCoins}`);
    }
}
