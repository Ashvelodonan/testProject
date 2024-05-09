// var aggregate = array(val_1, val_2, val_3);
// aggregate.reduce(function(a,b){return a + b})
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
const submitCurrent = document.getElementById("submit_current_form");
const firstRound = document.getElementById("round1");
const secondRound = document.getElementById("round2");
const thirdRound = document.getElementById("round3");
const redAdd = document.getElementById("red_add");
const redMinus = document.getElementById("red_minus");
const blueAdd = document.getElementById("blue_add");
const blueMinus = document.getElementById("blue_minus");
// var playerNameRed = document.getElementById("red_name");
// var playerNameBlue = document.getElementById("blue_name");
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
// var winner_R1 = document.getElementById("WinnerR1");
// var score_R1 = document.getElementById("ScoreR1");
// var winner_R2 = document.getElementById("WinnerR2");
// var score_R2 = document.getElementById("ScoreR2");
// var winner_R3 = document.getElementById("WinnerR3");
// var score_R3 = document.getElementById("ScoreR3");
startbtn.disabled = true;
playbtn.disabled = true;
resetbtn.disabled = true;
stopbtn.disabled = true;
nextbtn.disabled = true;
savebtn.disabled = true;
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

var weightCategorySelected = document.getElementById("weight_category_selected");
var weightCategory = document.getElementById("select_weight_category");
var divWeight = document.getElementById("divWeight");
function selectedWeights() {
    var selectedWeight = weightCategory.value;
    console.log(`${selectedWeight}`);
    submitCurrent.addEventListener("click", () => {
        weightCategorySelected.innerHTML = `${selectedWeight.toUpperCase()} ${`Weight`}`;
        weightCategory.style.display = "none";
        divWeight.style.display = "none";
    });
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

// inputscore1.hidden = true;
// inputscore2.hidden = true;
submitCurrent.addEventListener("click", () => {
    //document.getElementById("first_name_red").readOnly = true;
    function gameReset() {
        //Reset all data except player information
    }
    function overallWin() {
        //if winRed > winBlue
        //assign variable in subtotal to save for two colors
        overAllScore = currentScoreR3 + currentScoreR2 + currentScoreR1;
    }
    function advPointVoidRed() {
        if (currentRound == 1) {
            advPtA.style.border = "5px solid yellow";
            advPoint1_R1_value = 0;
            console.log(`${advPoint1_R1_value}`);
        }
        if (currentRound == 2) {
            advPtB.style.border = "5px solid yellow";
            advPoint1_R2_value = 0;
            console.log(`${advPoint1_R2_value}`);
        }
        if (currentRound == 3) {
            advPtC.style.border = "5px solid yellow";
            advPoint1_R3_value = 0;
            console.log(`${advPoint1_R3_value}`);
        }
    }
    function advPointVoidBlue() {
        if (currentRound == 1) {
            advPtD.style.border = "5px solid yellow";
            advPoint2_R1_value = 0;
            console.log(`${advPoint1_R1_value}`);
        }
        if (currentRound == 2) {
            advPtE.style.border = "5px solid yellow";
            advPoint2_R2_value = 0;
            console.log(`${advPoint1_R2_value}`);
        }
        if (currentRound == 3) {
            advPtF.style.border = "5px solid yellow";
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
    function resetValues() {
        console.log(`${`resetValues()`}`);
        if (currentRound == 1) {
            advPoint1_R1_value = 0;
            advPoint2_R1_value = 0;
            advPtA_value = 0;
            advPtA.style.display = "";
            advPtA.style.border = "";
            advPtA.style.backgroundColor = "white";
            advPtD_value = 0;
            advPtD.style.display = "";
            advPtD.style.border = "";
            advPtD.style.backgroundColor = "white";
        }
        if (currentRound == 2) {
            advPoint1_R2_value = 0;
            advPoint2_R2_value = 0;
            advPtB_value = 0;
            advPtB.style.display = "";
            advPtB.style.border = "";
            advPtB.style.backgroundColor = "white";
            advPtE_value = 0;
            advPtE.style.display = "";
            advPtE.style.border = "";
            advPtE.style.backgroundColor = "white";
        }
        if (currentRound == 3) {
            advPoint1_R3_value = 0;
            advPoint2_R3_value = 0;
            advPtC.style.display = "";
            advPtC.style.border = "";
            advPtC_value = 0;
            advPtC.style.backgroundColor = "white";
            advPtF_value = 0;
            advPtF.style.display = "";
            advPtF.style.border = "";
            advPtF.style.backgroundColor = "white";
        }
        // inputScore1.value = 0;
        // inputScore2.value = 0;
        // scoreOne.innerHTML = `0` + inputScore1.value;
        // scoreTwo.innerHTML = `0` + inputScore2.value;
        subFinalScore1 = subFinalScore1;
        subFinalScore2 = subFinalScore2;
        winRed = winRed;
        winBlue = winBlue;
        disarmA_value = 0;
        disarmA.style.backgroundColor = "white";
        disarmB_value = 0;
        disarmB.style.backgroundColor = "white";
        disarmC_value = 0;
        disarmC.style.backgroundColor = "white";
        disarmD_value = 0;
        disarmD.style.backgroundColor = "white";
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
                            advPtA.style.backgroundColor = 'green';
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
            });
            if (valueFoulD == 1) {
                advPoint2_R1_value = 0;
                console.log(`${`advPoint2_R1_value:`} ${advPoint2_R1_value}`);
                console.log(`${`valueFoulD:`} ${valueFoulD}`);
            }
            advPtD.addEventListener("click", () => {
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
                        advPtD.style.backgroundColor = 'green';
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
                        advPtB.style.backgroundColor = 'green';
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
            });
            if (valueFoulD == 1) {
                advPoint2_R2_value = 0;
                console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);
                console.log(`${`valueFoulD:`} ${valueFoulD}`);
            }
            advPtE.addEventListener("click", () => {
                if (advPtE_value == 1) {
                    console.log(`${`advPtB_value:`} ${advPtB_value}`);
                    console.log(`${`advPtE_value:`} ${advPtE_value}`);
                    console.log(`${`valueFoulD:`} ${valueFoulD}`);
                    console.log(`${`advPoint1_R2_value:`} ${advPoint1_R2_value}`);
                    console.log(`${`advPoint2_R2_value:`} ${advPoint2_R2_value}`);                }
                if (advPtE_value == 0 && advPtB_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulD == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint2_R2_value = 1;
                        advPtE.style.backgroundColor = 'green';
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
                        advPtC.style.backgroundColor = 'green';
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
            });
            if (valueFoulD == 1) {
                advPoint2_R3_value = 0;
                console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);
                console.log(`${`valueFoulD:`} ${valueFoulD}`);
            }
            advPtF.addEventListener("click", () => {
                if (advPtF_value == 1) {
                    console.log(`${`advPtC_value:`} ${advPtC_value}`);
                    console.log(`${`advPtF_value:`} ${advPtF_value}`);
                    console.log(`${`valueFoulD:`} ${valueFoulD}`);
                    console.log(`${`advPoint1_R3_value:`} ${advPoint1_R3_value}`);
                    console.log(`${`advPoint2_R3_value:`} ${advPoint2_R3_value}`);                }
                if (advPtF_value == 0 && advPtC_value != 1 && valueFoulA != 1 && valueFoulD != 1 && disarm1 == 0 && disarm2 == 0) {
                    if (valueFoulD == 0 && disarm1 == 0 && disarm2 == 0) {
                        advPoint2_R3_value = 1;
                        advPtF.style.backgroundColor = 'green';
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
            });
        }
    }
    advantagePoint();
    resetbtn.addEventListener("click", () => {
        var resetBtnConfirm = confirm(`${`Are you sure you want to reset?`}\n${`Current Round:`} ${currentRound}`);
        if (resetBtnConfirm == false) {
            return false;
        } else {
            resetForRound();
            console.log(`${`resetForRound()`}`);
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
        }
    });
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
        foulA.style.backgroundColor = 'white';
        foulB.style.backgroundColor = 'white';
        foulC.style.backgroundColor = 'white';
        foulD.style.backgroundColor = 'white';
        foulE.style.backgroundColor = 'white';
        foulF.style.backgroundColor = 'white';
    }
    function foulRed() {
        //stopCountdown();
        if (subTotalFoul1 > subTotalFoul2) {
            winnerScore = inputscore2.value;
            winnerName = nameBlueValue;
            console.log(`BLUE WINS from foul`);
            alert(`BLUE WINS from foul`);
            winBlue += 1;
        }
        //currentRound += 1;
        console.log(`${`Current Round:`} ${currentRound}`);
        playbtn.disabled = true;
        stopbtn.disabled = true;
        nextbtn.disabled = false;
        startbtn.disabled = true;
        resetbtn.disabled = false;
    }
    function foulBlue() {
        //stopCountdown();
        if (subTotalFoul1 < subTotalFoul2) {
            winnerScore = inputscore1.value;
            winnerName = nameRedValue;
            console.log(`RED WINS from foul`);
            alert(`RED WINS from foul`);
            winRed += 1;
        }
        //currentRound += 1;
        console.log(`${`Current Round:`} ${currentRound}`);
        playbtn.disabled = true;
        stopbtn.disabled = true;
        nextbtn.disabled = false;
        startbtn.disabled = true;
        resetbtn.disabled = false;
    }
    function disarmRed() {
        disarmA.addEventListener("click", () => {
            //advPointVoidRed();
            console.log("disarmRedA1");
            disarmA.style.backgroundColor = 'red';
            if (disarmA_value == 0) {
                console.log(disarmA_value);
                disarmA_value += 1;
                disarm1 += disarmA_value;
                console.log(`${disarm1}`)
                blueAdd.click();
            }
            disarmB.addEventListener("click", () => {
                console.log("disarmRedB1");
                if (disarmB_value == 0 && disarmA_value == 1) {
                    disarmB.style.backgroundColor = 'red';
                    console.log(disarmB_value);
                    disarmB_value += 1;
                    disarm1 += disarmB_value;
                    blueAdd.click();
                    determineWinner();
                }
            });
        });
    }
    disarmRed();
    function disarmBlue() {
        disarmC.addEventListener("click", () => {
           //advPointVoidBlue();
            console.log("disarmBlueC1");
            disarmC.style.backgroundColor = 'blue';
            if (disarmC_value == 0) {
                console.log(disarmC_value);
                disarmC_value += 1;
                disarm2 += disarmC_value;
                redAdd.click();
            }
            disarmD.addEventListener("click", () => {
                console.log("disarmBlueD1");
                if (disarmD_value == 0 && disarmC_value == 1) {
                    disarmD.style.backgroundColor = 'blue';
                    console.log(disarmD_value);
                    disarmD_value += 1;
                    disarm2 += disarmD_value;
                    console.log(disarm2);
                    redAdd.click();
                    determineWinner();
                }
            });
        });
    }
    disarmBlue();
    function determineFoul() {
        if ((valueFoulA == 1 || valueFoulB == 1) && inputScore1.value == 0 && totalSeconds == 0) {
            foulRed();
            if (valueFoulA == 1) {
                console.log("foulA");
            }
            if (valueFoulB == 1) {
                console.log("foulB");
            }
        }
        if ((valueFoulD == 1 || valueFoulE == 1) && inputScore2.value == 0 && totalSeconds == 0) {
            foulBlue();
            if (valueFoulD == 1) {
                console.log("foulD");
            }
            if (valueFoulE == 1) {
                console.log("foulE");
            }
        }
        foulA.addEventListener("click", () => {
            advPointVoidRed();
            foulA.style.backgroundColor = 'red';
            valueFoulA = 1;
            subTotalFoul1 = 1;
            console.log(`${`foulA: `}${valueFoulA}`);
            foulB.addEventListener("click", () => {
                if (valueFoulA == 1) {
                    foulB.style.backgroundColor = 'red';
                    valueFoulB = valueFoulA;
                    subTotalFoul1 = 2;
                    valueFoulA == 0;
                    console.log(`${`foulB: `}${valueFoulB}`);
                }
                foulC.addEventListener("click", () => {
                    if (valueFoulB == 1) {
                        foulC.style.backgroundColor = 'red';
                        valueFoulC = valueFoulB;
                        subTotalFoul1 = 3;
                        valueFoulB == 0;
                        console.log(`${`foulC: `}${valueFoulC}`);
                        if (valueFoulC == 1) {
                            console.log("foulC");
                            foulRed();
                        }
                    }
                });
            });
        });
        foulD.addEventListener("click", () => {
            advPointVoidBlue();
            foulD.style.backgroundColor = 'blue';
            valueFoulD = 1;
            subTotalFoul2 = 1;
            console.log(`${`foulD: `}${valueFoulD}`);
            foulE.addEventListener("click", () => {
                if (valueFoulD == 1) {
                    foulE.style.backgroundColor = 'blue';
                    valueFoulE = valueFoulD;
                    subTotalFoul2 = 2;
                    valueFoulD == 0;
                    console.log(`${`foulE: `}${valueFoulE}`);
                }
                foulF.addEventListener("click", () => {
                    if (valueFoulE == 1) {
                        foulF.style.backgroundColor = 'blue';
                        valueFoulF = valueFoulE;
                        subTotalFoul2 = 3;
                        valueFoulE == 0;
                        console.log(`${`foulF: `}${valueFoulF}`);
                        if (valueFoulF == 1) {
                            console.log("foulF");
                            foulBlue();
                        }
                    }
                });
            });
        });
    }
    function determineWinner() {
        console.log(`${`inputscore1.value`} ${inputscore1.value}`);
        console.log(`${`inputscore2.value`} ${inputscore2.value}`);
        console.log(`${`subTotalFoul1`} ${subTotalFoul1}`);
        console.log(`${`subTotalFoul2`} ${subTotalFoul2}`);
        console.log(`${`disarm1`} ${disarm1}`);
        console.log(`${`disarm2`} ${disarm2}`);
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
        if (
            inputscore1.value > inputscore2.value || subTotalFoul1 <  subTotalFoul2 ||
            disarm1 < disarm2 || subTotalFoul2 == 3 || disarm2 == 2 ||

            (inputscore1.value == inputscore2.value &&
            (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
            ) || (
            inputscore1.value < inputscore2.value &&
            (subTotalFoul2 == 3 || disarm2 == 2)
            )

        || ((inputscore1.value == inputscore2.value) && (advPoint1_R1_value == 1 && currentRound == 1)
        || (advPoint1_R2_value == 1 && currentRound == 2)
        || (advPoint1_R3_value == 1 && currentRound == 3)
        || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1))) {
            // if (subTotalFoul1 < subTotalFoul2) {
            // }
            //trial
            winnerScore = inputscore1.value;
            loserScore = inputscore2.value;
            winnerName = nameRedValue;
            loserName = nameBlueValue;
            console.log(`RED WINS`);
            alert(`RED WINS`);
        } else if (
            inputscore1.value < inputscore2.value || subTotalFoul1 > subTotalFoul2 ||
            disarm1 > disarm2 || subTotalFoul1 == 3 || disarm1 == 2 ||

            (inputscore1.value == inputscore2.value &&
            (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
            ) || (
            inputscore1.value > inputscore2.value &&
            (subTotalFoul1 == 3 || disarm1 == 2)
            )

        || ((inputscore1.value == inputscore2.value) && (advPoint2_R1_value == 1 && currentRound == 1)
        || (advPoint2_R2_value == 1 && currentRound == 2)
        || (advPoint2_R3_value == 1 && currentRound == 3)
        || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1))) {
            winnerScore = inputscore2.value;
            loserScore = inputscore1.value;
            winnerName = nameBlueValue;
            loserName = nameRedValue;
            console.log(`BLUE WINS`);
            alert(`BLUE WINS`);
        } else {
            // winnerName = ("TIE");
            // winnerScore = inputscore2.value;
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
            // if (advPoint1_R1_value != 1 &&
            //     advPoint2_R1_value != 1 &&
            //     advPoint1_R2_value != 1 &&
            //     advPoint2_R2_value != 1 &&
            //     advPoint1_R3_value != 1 &&
            //     advPoint2_R3_value != 1
            // ) {
                console.log(`It's a TIE`);
                alert(`It's a TIE`);
                nextbtn.disabled = true;
                savebtn.disabled = true;
            // }
        }
    }
    function nextRound() {
        nextbtn.addEventListener("click", () => {
            var nextBtnConfirm = confirm(`${`Are you sure you want to proceed to the next round?`}\n${`Current Round:`} ${currentRound}`);
            if (nextBtnConfirm == false) {
                return false;
            } else {
                scorer();
                nextbtn.disabled = true;
                playbtn.disabled = true;
                stopbtn.disabled = true;
                // if (valueFoulA == 1 || valueFoulB == 1 || valueFoulD == 1 || valueFoulE == 1) {
                //     determineFoul();
                //     console.log("detFoul");
                // } else {
                //     determineWinner();
                //     console.log("detWin");
                // }
                if (totalSeconds > 0) {
                    determineWinner();
                }
                if (
                    inputscore1.value > inputscore2.value || subTotalFoul1 <  subTotalFoul2 ||
                    disarm1 < disarm2 || subTotalFoul2 == 3 || disarm2 == 2 ||

                    (inputscore1.value == inputscore2.value &&
                    (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                    ) || (
                    inputscore1.value < inputscore2.value &&
                    (subTotalFoul2 == 3 || disarm2 == 2)
                    )

                || ((inputscore1.value == inputscore2.value) && (advPoint1_R1_value == 1 && currentRound == 1)
                || (advPoint1_R2_value == 1 && currentRound == 2)
                || (advPoint1_R3_value == 1 && currentRound == 3)
                || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1))) {
                    winRed += 1;
                }
                if (
                    inputscore1.value < inputscore2.value || subTotalFoul1 > subTotalFoul2 ||
                    disarm1 > disarm2 || subTotalFoul1 == 3 || disarm1 == 2 ||

                    (inputscore1.value == inputscore2.value &&
                    (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                    ) || (
                    inputscore1.value > inputscore2.value &&
                    (subTotalFoul1 == 3 || disarm1 == 2)
                    )

                || ((inputscore1.value == inputscore2.value) && (advPoint2_R1_value == 1 && currentRound == 1)
                || (advPoint2_R2_value == 1 && currentRound == 2)
                || (advPoint2_R3_value == 1 && currentRound == 3)
                || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1))) {
                    winBlue += 1;
                }
                console.log(`${`winRed:`} ${winRed}`);
                console.log(`${`winBlue:`} ${winBlue}`);
                if (currentRound == 1) { //must put if winner or loser
                    currentWinnerR1 = winnerName;
                    currentScoreR1 = winnerScore;
                    currentLoserR1 = loserName;
                    currentloserScoreR1 = loserScore;
                    //if lose or win PRINT
                    console.log(`${`winRed:`} ${winRed}`);
                    console.log(`${`winBlue:`} ${winBlue}`);
                    // if ((winRed > 0 && winRed > winBlue) || (inputscore1.value > inputscore2.value && subTotalFoul1 != 3) || (valueFoulD == 1 && inputScore2.value == 0)
                    // || ((inputscore1.value == inputscore2.value) && (advPoint1_R1_value == 1 && currentRound == 1) || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1))) {
                    if ((winRed > 0 && winRed > winBlue) ||
                        inputscore1.value > inputscore2.value || subTotalFoul1 <  subTotalFoul2 ||
                        disarm1 < disarm2 || subTotalFoul2 == 3 || disarm2 == 2 ||

                        (inputscore1.value == inputscore2.value &&
                        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                        ) || (
                        inputscore1.value < inputscore2.value &&
                        (subTotalFoul2 == 3 || disarm2 == 2)
                        )

                    || ((inputscore1.value == inputscore2.value) && (advPoint1_R1_value == 1 && currentRound == 1)
                    || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1))) {

                        winner1_R1.innerHTML = currentWinnerR1;
                        //winner2_R1.innerHTML = currentLoserR1;
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
                    // } else if ((winBlue > 0 && winBlue > winRed) || (inputscore1.value < inputscore2.value && subTotalFoul2 != 3) || (valueFoulA == 1 && inputScore1.value == 0)
                    // || ((inputscore1.value == inputscore2.value) && (advPoint2_R1_value == 1 && currentRound == 1) || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1))) {
                    } else if ((winBlue > 0 && winBlue > winRed) ||
                        inputscore1.value < inputscore2.value || subTotalFoul1 > subTotalFoul2 ||
                        disarm1 > disarm2 || subTotalFoul1 == 3 || disarm1 == 2 ||

                        (inputscore1.value == inputscore2.value &&
                        (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                        ) || (
                        inputscore1.value > inputscore2.value &&
                        (subTotalFoul1 == 3 || disarm1 == 2)
                        )

                    || ((inputscore1.value == inputscore2.value) && (advPoint2_R1_value == 1 && currentRound == 1)
                    || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1))) {
                        //winner1_R1.innerHTML = currentLoserR1;
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
                        inputscore1.value > inputscore2.value || subTotalFoul1 <  subTotalFoul2 ||
                        disarm1 < disarm2 || subTotalFoul2 == 3 || disarm2 == 2 ||

                        (inputscore1.value == inputscore2.value &&
                        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                        ) || (
                        inputscore1.value < inputscore2.value &&
                        (subTotalFoul2 == 3 || disarm2 == 2)
                        )

                    || ((inputscore1.value == inputscore2.value) && (advPoint1_R2_value == 1 && currentRound == 2)
                    || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1))) {
                        winner1_R2.innerHTML = currentWinnerR2;
                        //winner2_R2.innerHTML = currentLoserR2;
                        score1_R2.innerHTML = currentScoreR2;
                        score2_R2.innerHTML = currentloserScoreR2;
                        printSummary();
                        // foul1_R2.innerHTML = subTotalFoul1;
                        // foul2_R2.innerHTML = subTotalFoul2;
                        winRed2 += winRed;
                        subFinalScore1 += parseInt(currentScoreR2);
                        subFinalScore2 += parseInt(currentloserScoreR2);
                        console.log(`${`winRed:`} ${winRed}`);
                        console.log(`${`winBlue:`} ${winBlue}`);
                        console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
                        console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
                        console.log(`${`advPoint1:`} ${advPoint1}`);
                        console.log(`${`advPoint2:`} ${advPoint2}`);
                    } else if ((winBlue > 0 && winBlue > winRed) ||
                    inputscore1.value < inputscore2.value || subTotalFoul1 > subTotalFoul2 ||
                    disarm1 > disarm2 || subTotalFoul1 == 3 || disarm1 == 2 ||

                    (inputscore1.value == inputscore2.value &&
                    (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                    ) || (
                    inputscore1.value > inputscore2.value &&
                    (subTotalFoul1 == 3 || disarm1 == 2)
                    )

                    || ((inputscore1.value == inputscore2.value) && (advPoint2_R2_value == 1 && currentRound == 2)
                    || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1))) {
                        //winner1_R2.innerHTML = currentLoserR2;
                        winner2_R2.innerHTML = currentWinnerR2;
                        score1_R2.innerHTML = currentloserScoreR2;
                        score2_R2.innerHTML = currentScoreR2;
                        printSummary();
                        // foul1_R2.innerHTML = subTotalFoul1;
                        // foul2_R2.innerHTML = subTotalFoul2;
                        winBlue2 += winBlue;
                        subFinalScore1 += parseInt(currentloserScoreR2);
                        subFinalScore2 += parseInt(currentScoreR2);
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
                if (currentRound == 3) {
                    currentWinnerR3 = winnerName;
                    currentScoreR3 = winnerScore;
                    currentLoserR3 = loserName;
                    currentloserScoreR3 = loserScore;
                    if ((winRed > 0 && winRed > winBlue) ||
                        inputscore1.value > inputscore2.value || subTotalFoul1 <  subTotalFoul2 ||
                        disarm1 < disarm2 || subTotalFoul2 == 3 || disarm2 == 2 ||

                        (inputscore1.value == inputscore2.value &&
                        (subTotalFoul1 < subTotalFoul2 || disarm1 < disarm2)
                        ) || (
                        inputscore1.value < inputscore2.value &&
                        (subTotalFoul2 == 3 || disarm2 == 2)
                        )

                    || ((inputscore1.value == inputscore2.value) && (advPoint1_R3_value == 1 && currentRound == 3)
                    || (valueFoulD == 1 && valueFoulA != 1) || (valueFoulE == 1 && valueFoulB != 1))) {
                        winner1_R3.innerHTML = currentWinnerR3;
                        score1_R3.innerHTML = currentScoreR3;
                        score2_R3.innerHTML = currentloserScoreR3;
                        printSummary();
                        //winner2_R3.innerHTML = currentLoserR3;
                        // foul1_R3.innerHTML = subTotalFoul1;
                        // foul2_R3.innerHTML = subTotalFoul2;
                        winRed3 += winRed;
                        subFinalScore1 += parseInt(currentScoreR3);
                        subFinalScore2 += parseInt(currentloserScoreR3);
                        console.log(`${`winRed:`} ${winRed}`);
                        console.log(`${`winBlue:`} ${winBlue}`);
                        console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
                        console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
                        console.log(`${`advPoint1:`} ${advPoint1}`);
                        console.log(`${`advPoint2:`} ${advPoint2}`);
                    } else if ((winBlue > 0 && winBlue > winRed) ||
                    inputscore1.value < inputscore2.value || subTotalFoul1 > subTotalFoul2 ||
                    disarm1 > disarm2 || subTotalFoul1 == 3 || disarm1 == 2 ||

                    (inputscore1.value == inputscore2.value &&
                    (subTotalFoul1 > subTotalFoul2 || disarm1 > disarm2)
                    ) || (
                    inputscore1.value > inputscore2.value &&
                    (subTotalFoul1 == 3 || disarm1 == 2)
                    )

                    || ((inputscore1.value == inputscore2.value) && (advPoint2_R3_value == 1 && currentRound == 3)
                    || (valueFoulA == 1 && valueFoulD != 1) || (valueFoulB == 1 && valueFoulE != 1))) {
                        //winner1_R3.innerHTML = currentLoserR3;
                        winner2_R3.innerHTML = currentWinnerR3;
                        score1_R3.innerHTML = currentloserScoreR3;
                        score2_R3.innerHTML = currentScoreR3;
                        printSummary();
                        // foul1_R3.innerHTML = subTotalFoul1;
                        // foul2_R3.innerHTML = subTotalFoul2;
                        winBlue3 += winBlue;
                        subFinalScore1 += parseInt(currentloserScoreR3);
                        subFinalScore2 += parseInt(currentScoreR3);
                        console.log(`${`winRed:`} ${winRed}`);
                        console.log(`${`winBlue:`} ${winBlue}`);
                        console.log(`${`subFinalScore1:`} ${subFinalScore1}`);
                        console.log(`${`subFinalScore2:`} ${subFinalScore2}`);
                        console.log(`${`advPoint1:`} ${advPoint1}`);
                        console.log(`${`advPoint2:`} ${advPoint2}`);
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
            }
            // if (currentRound == 1 || currentRound == 2) {
            //     resetbtn.click();
            // }
        });
    }
    nextRound();
    startbtn.disabled = false;
    submitCurrent.disabled = true;
    var minutesInput = parseInt(document.getElementById("minutes_input").value);
    var secondsInput = parseInt(document.getElementById("seconds_input").value);
    var maxMinutes = 2;
    var maxSeconds = 60;

    if (isNaN(minutesInput) || isNaN(secondsInput) || minutesInput < 0 || secondsInput < 0 || minutesInput > maxMinutes || secondsInput >= maxSeconds) {
        alert('Please enter valid minutes and seconds.');
        return;
    }
    if (minutesInput == maxMinutes && secondsInput > 0) {
        alert('Max minutes is 2:00');
        return;
    }
    //displayTime.innerHTML = `${minutesInput < 10 ? '0' + minutesInput : minutesInput}:${secondsInput < 10 ? '0' + secondsInput : secondsInput}`;

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
    var fnamered = document.getElementById("first_name_red").value;
    var mnamered = document.getElementById("middle_name_red").value;
    var lnamered = document.getElementById("last_name_red").value;
    var fnameblue = document.getElementById("first_name_blue").value;
    var mnameblue = document.getElementById("middle_name_blue").value;
    var lnameblue = document.getElementById("last_name_blue").value;
    var divisionInput = document.getElementById("division_input").value;
    var categoryInput = document.getElementById("category_input").value;
    var courtInput = document.getElementById("court_input").value;
    var matchInput = document.getElementById("match_input").value;
    var redGenderInput = document.getElementById("gender_red").value;
    var redWeightInput = document.getElementById("weight_red").value;
    var blueGenderInput = document.getElementById("gender_blue").value;
    var blueWeightInput = document.getElementById("weight_blue").value;
    var teamRedInput = document.getElementById("team_red").value;
    var teamBlueInput = document.getElementById("team_blue").value;
    var redNameDisplay = document.getElementById("red_name");
    var blueNameDisplay = document.getElementById("blue_name");
    const properFirstRed = fnamered[0].toUpperCase() + fnamered.slice(1).toLowerCase();
    const properFirstBlue = fnameblue[0].toUpperCase() + fnameblue.slice(1).toLowerCase();
    const properMiddleRed = mnamered[0].toUpperCase() + mnamered.slice(1).toLowerCase();
    const properMiddleBlue = mnameblue[0].toUpperCase() + mnameblue.slice(1).toLowerCase();
    const properLastRed = lnamered[0].toUpperCase() + lnamered.slice(1).toLowerCase();
    const properLastBlue = lnameblue[0].toUpperCase() + lnameblue.slice(1).toLowerCase();
    var playerNameRed = `${properFirstRed} ${properLastRed}`;
    var playerNameBlue = `${properFirstBlue} ${properLastBlue}`;
    var nameRedValue = playerNameRed;
    var nameBlueValue = playerNameBlue;

    teamRedCurrent.innerHTML = teamRedInput;
    teamBlueCurrent.innerHTML = teamBlueInput;
    displayVS.innerHTML = `${teamRedInput} VS ${teamBlueInput}`;
    redNameDisplay.innerHTML = playerNameRed;
    blueNameDisplay.innerHTML = playerNameBlue;
    divisionCurrent.innerHTML = `${divisionInput}`;
    categoryCurrent.innerHTML = `${categoryInput}`;
    courtNoCurrent.innerHTML = `${courtInput}`;
    matchNoCurrent.innerHTML = `${matchInput}`;
    redGenderCurrent.innerHTML = `${redGenderInput} `;
    redWeightCurrent.innerHTML = `${redWeightInput} kg`;
    blueGenderCurrent.innerHTML = `${blueGenderInput} `;
    blueWeightCurrent.innerHTML = `${blueWeightInput} kg`;
    redFullCurrent.innerHTML = `${properFirstRed} ${properMiddleRed} ${properLastRed} `;
    blueFullCurrent.innerHTML = `${properFirstBlue} ${properMiddleBlue} ${properLastBlue} `;

    let timerInterval;
    let timerRunning = false;
    let totalSeconds = 0;
    let paused = false;
    var inputScore1 = document.getElementById("inputscore1");
    var inputScore2 = document.getElementById("inputscore2");

    function runtime() {
        if (!timerRunning) {
        timerInterval = setInterval(function () {
            totalSeconds--;
            updateTimer();
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                //alert('Timer reached zero!');
                stopbtn.disabled = true;
                console.log(inputScore1.value);
                console.log(inputScore2.value);
                //if foul exist = foul condition
                if (valueFoulA == 1 || valueFoulB == 1 || valueFoulD == 1 || valueFoulE == 1) {
                    //determineFoul();
                    console.log("detFoul");
                    determineWinner();
                } else {
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

    function updateTimer() {
        var displayTime = document.getElementById("timer_outside").contentWindow.document.getElementById("timer_actual");
        const minutesInput = Math.floor(totalSeconds / 60);
        const secondsInput = totalSeconds % 60;
        displayTime.innerHTML = `${minutesInput < 10 ? '0' + minutesInput : minutesInput}:${secondsInput < 10 ? '0' + secondsInput : secondsInput}`;
    }
    startbtn.addEventListener("click", () => {
        //resetForRound();
        determineFoul();
        advantagePoint();
        scorer();
        console.log(`${`Current Round:`} ${currentRound}`);
        if (currentRound == 1) {
            savebtn.disabled = true;
            currentRound = currentRound;
            firstRound.style.backgroundColor = 'green';
            firstRound.style.color = 'yellow';
            secondRound.style.border = "5px solid gray";
            thirdRound.style.border = "5px solid gray";
        }
        if (currentRound == 2) {
            savebtn.disabled = false;
            currentRound = currentRound;
            secondRound.style.backgroundColor = 'green';
            secondRound.style.color = 'yellow';
            secondRound.style.border = "5px solid green";
            firstRound.style.backgroundColor = 'white';
            firstRound.style.color = 'black';
            firstRound.style.border = "5px solid gray";
            thirdRound.style.border = "5px solid gray";
        }
        if (currentRound == 3) {
            savebtn.disabled = false;
            currentRound = currentRound;
            thirdRound.style.backgroundColor = 'green';
            thirdRound.style.color = 'yellow';
            thirdRound.style.border = "5px solid green";
            firstRound.style.backgroundColor = 'white';
            firstRound.style.border = "5px solid gray";
            firstRound.style.color = 'black';
            secondRound.style.backgroundColor = 'white';
            secondRound.style.color = 'black';
            secondRound.style.border = "5px solid gray";
        }
        submitCurrent.disabled = true;
        startbtn.disabled = true;
        playbtn.disabled = true;
        resetbtn.disabled = false;
        stopbtn.disabled = false;
        nextbtn.disabled = false;
        var minutesInput = parseInt(document.getElementById("minutes_input").value);
        var secondsInput = parseInt(document.getElementById("seconds_input").value);
        console.log(`${minutesInput} ${secondsInput}`);
        totalSeconds = minutesInput * 60 + secondsInput;
        updateTimer();
        runtime();

    });
    function playCountdown() {
        console.log("play");
        playbtn.disabled = true;
        stopbtn.disabled = false;
        runtime();
        //scorer();
        timerRunning = true;
    }
    function stopCountdown() {
        playbtn.disabled = false;
        stopbtn.disabled = true;
        console.log("pause");
        runtime();
        //scorer();
        clearInterval(timerInterval);
        timerRunning = false;
        //resetForRound();
    }
    function resetCountdown() {
        console.log(`${`resetCountdown()`}`);
        startbtn.disabled = true;
        playbtn.disabled = false;
        nextbtn.disabled = false;
        resetbtn.disabled = false;
        runtime();
        clearInterval(timerInterval);
        timerRunning = false;
        totalSeconds = minutesInput * 60 + secondsInput;
        var displayTime = document.getElementById("timer_outside").contentWindow.document.getElementById("timer_actual");
        displayTime.innerHTML = `${minutesInput < 10 ? '0' + minutesInput : minutesInput}:${secondsInput < 10 ? '0' + secondsInput : secondsInput}`;
        // resetForFoul();
        // resetValues();
        // resetForRound();
        // }
    }
    // function scorer() {
    //     console.log(`${`scorer()`}`);
    //     // const scoreOne = document.getElementById("score1");
    //     // var inputScore1 = document.getElementById("inputscore1");
    //     // const scoreTwo = document.getElementById("score2");
    //     // var inputScore2 = document.getElementById("inputscore2");
    //     var defaultScoreOne = 0;
    //     var defaultScoreTwo = 0;
    //     var maxScoreValue = 30;

    //     resetbtn.addEventListener("click", () => {
    //         defaultScoreOne = 0;
    //         defaultScoreTwo = 0;
    //         inputScore1.value = defaultScoreOne;
    //         inputScore2.value = defaultScoreTwo;
    //         scoreOne.innerHTML = `0` + inputScore1.value;
    //         scoreTwo.innerHTML = `0` + inputScore2.value;
    //         console.log(`${defaultScoreOne}`);
    //         console.log(`${defaultScoreTwo}`);
    //     });
    //     //const redAdd = document.getElementById("red_add");
    //     //const redMinus = document.getElementById("red_minus");
    //     redAdd.addEventListener('mouseover', () => {
    //         redAdd.style.backgroundColor = 'green';
    //         redAdd.style.color = 'yellow';
    //         redMinus.style.backgroundColor = 'red';
    //         redMinus.style.color = 'red';
    //     });
    //     redAdd.addEventListener('mouseout', () => {
    //         redAdd.style.backgroundColor = '';
    //         redAdd.style.color = '';
    //         redMinus.style.backgroundColor = '';
    //         redMinus.style.color = '';
    //     });
    //     redMinus.addEventListener('mouseover', () => {
    //         redMinus.style.backgroundColor = 'green';
    //         redMinus.style.color = 'yellow';
    //         redAdd.style.backgroundColor = 'red';
    //         redAdd.style.color = 'red';
    //     });
    //     redMinus.addEventListener('mouseout', () => {
    //         redMinus.style.backgroundColor = '';
    //         redMinus.style.color = '';
    //         redAdd.style.backgroundColor = '';
    //         redAdd.style.color = '';
    //     });
    //     redAdd.addEventListener("click", () => {
    //         if (inputScore1.value >= maxScoreValue) {
    //             //console.log(inputScore1.value);
    //         } else if (defaultScoreOne < 9) {
    //             defaultScoreOne += 1;
    //             inputScore1.value = defaultScoreOne;
    //             scoreOne.innerHTML = "0" + defaultScoreOne;
    //         } else {
    //             defaultScoreOne += 1;
    //             inputScore1.value = defaultScoreOne;
    //             scoreOne.innerHTML = defaultScoreOne;
    //         }
    //         if (currentRound == 1) {
    //             if (advPtA_value == 0 || advPtD_value != 1 || valueFoulA != 1 || valueFoulD != 1 || disarm1 == 0 || disarm2 == 0) {
    //                 advPtA.click();
    //             }
    //         }
    //         if (currentRound == 2) {
    //             if (advPtB_value == 0 || advPtE_value != 1 || valueFoulA != 1 || valueFoulD != 1 || disarm1 == 0 || disarm2 == 0) {
    //                 advPtB.click();
    //             }
    //         }
    //         if (currentRound == 3) {
    //             if (advPtC_value == 0 || advPtF_value != 1 || valueFoulA != 1 || valueFoulD != 1 || disarm1 == 0 || disarm2 == 0) {
    //                 advPtC.click();
    //             }
    //         }
    //     });
    //     redMinus.addEventListener("click", () => {
    //         //if (confirm('Are you sure you want to remove a point?')) {
    //         var redMinusBtnConfirm = confirm(`${`Are you sure you want to remove a point?`}`);
    //         if (redMinusBtnConfirm == false) {
    //             console.log(`${`false`}`);
    //             return false;
    //         } else {
    //             console.log(`${`true`}`);
    //             if (inputScore1.value <= 0) {
    //                 console.log(inputScore1.value);
    //             } else if (defaultScoreOne <= 10) {
    //                 defaultScoreOne -= 1;
    //                 inputScore1.value = defaultScoreOne;
    //                 scoreOne.innerHTML = "0" + defaultScoreOne;
    //             } else {
    //                 defaultScoreOne -= 1;
    //                 inputScore1.value = defaultScoreOne;
    //                 scoreOne.innerHTML = defaultScoreOne;
    //             }
    //         }
    //         //}
    //     });

    //     //const blueAdd = document.getElementById("blue_add");
    //     //const blueMinus = document.getElementById("blue_minus");
    //     blueAdd.addEventListener('mouseover', () => {
    //         blueAdd.style.backgroundColor = 'green';
    //         blueAdd.style.color = 'yellow';
    //         blueMinus.style.backgroundColor = 'blue';
    //         blueMinus.style.color = 'blue';
    //     });
    //     blueAdd.addEventListener('mouseout', () => {
    //         blueAdd.style.backgroundColor = '';
    //         blueAdd.style.color = '';
    //         blueMinus.style.backgroundColor = '';
    //         blueMinus.style.color = '';
    //     });
    //     blueMinus.addEventListener('mouseover', () => {
    //         blueMinus.style.backgroundColor = 'green';
    //         blueMinus.style.color = 'yellow';
    //         blueAdd.style.backgroundColor = 'blue';
    //         blueAdd.style.color = 'blue';
    //     });
    //     blueMinus.addEventListener('mouseout', () => {
    //         blueMinus.style.backgroundColor = '';
    //         blueMinus.style.color = '';
    //         blueAdd.style.backgroundColor = '';
    //         blueAdd.style.color = '';
    //     });
    //     blueAdd.addEventListener("click", () => {
    //         if (inputScore2.value >= maxScoreValue) {
    //             //console.log(inputScore2.value);
    //         } else if (defaultScoreTwo < 9) {
    //             defaultScoreTwo += 1;
    //             inputScore2.value = defaultScoreTwo;
    //             scoreTwo.innerHTML = "0" + defaultScoreTwo;
    //         } else {
    //             defaultScoreTwo += 1;
    //             inputScore2.value = defaultScoreTwo;
    //             scoreTwo.innerHTML = defaultScoreTwo;
    //         }
    //         if (currentRound == 1) {
    //             if (advPtD_value == 0 && advPtA_value != 1 && valueFoulA != 1 && valueFoulB != 1 && valueFoulD != 1 && valueFoulE != 1 && disarm1 != 1 && disarm2 != 1) {
    //                 advPtD.click();
    //             }
    //         }
    //         if (currentRound == 2) {
    //             if (advPtE_value == 0 && advPtB_value != 1 && valueFoulA != 1 && valueFoulB != 1 && valueFoulD != 1 && valueFoulE != 1 && disarm1 != 1 && disarm2 != 1) {
    //                 advPtE.click();
    //             }
    //         }
    //         if (currentRound == 3) {
    //             if (advPtF_value == 0 && advPtC_value != 1 && valueFoulA != 1 && valueFoulB != 1 && valueFoulD != 1 && valueFoulE != 1 && disarm1 != 1 && disarm2 != 1) {
    //                 advPtF.click();
    //             }
    //         }
    //     });
    //     blueMinus.addEventListener("click", () => {
    //         //if (confirm('Are you sure you want to remove a point?')) {
    //         var blueMinusBtnConfirm = confirm(`${`Are you sure you want to remove a point?`}`);
    //         if (blueMinusBtnConfirm == false) {
    //             return false;
    //         } else {
    //             if (inputScore2.value <= 0) {
    //                 console.log(inputScore2.value);
    //             } else if (defaultScoreTwo <= 10) {
    //                 defaultScoreTwo -= 1;
    //                 inputScore2.value = defaultScoreTwo;
    //                 scoreTwo.innerHTML = "0" + defaultScoreTwo;
    //             } else {
    //                 defaultScoreTwo -= 1;
    //                 inputScore2.value = defaultScoreTwo;
    //                 scoreTwo.innerHTML = defaultScoreTwo;
    //             }
    //         }
    //         //}
    //     });
    // }
    playbtn.addEventListener("click", playCountdown);
    stopbtn.addEventListener("click", stopCountdown);
    //resetbtn.addEventListener("click", resetCountdown);
});
function scorer() {
    console.log(`${`scorer()`}`);
    // const scoreOne = document.getElementById("score1");
    // var inputScore1 = document.getElementById("inputscore1");
    // const scoreTwo = document.getElementById("score2");
    // var inputScore2 = document.getElementById("inputscore2");
    var defaultScoreOne = 0;
    var defaultScoreTwo = 0;
    var maxScoreValue = 30;

    resetbtn.addEventListener("click", () => {
        defaultScoreOne = 0;
        defaultScoreTwo = 0;
        inputScore1.value = defaultScoreOne;
        inputScore2.value = defaultScoreTwo;
        scoreOne.innerHTML = `0` + inputScore1.value;
        scoreTwo.innerHTML = `0` + inputScore2.value;
        console.log(`${defaultScoreOne}`);
        console.log(`${defaultScoreTwo}`);
    });
    //const redAdd = document.getElementById("red_add");
    //const redMinus = document.getElementById("red_minus");
    redAdd.addEventListener('mouseover', () => {
        redAdd.style.backgroundColor = 'green';
        redAdd.style.color = 'yellow';
        redMinus.style.backgroundColor = 'red';
        redMinus.style.color = 'red';
    });
    redAdd.addEventListener('mouseout', () => {
        redAdd.style.backgroundColor = '';
        redAdd.style.color = '';
        redMinus.style.backgroundColor = '';
        redMinus.style.color = '';
    });
    redMinus.addEventListener('mouseover', () => {
        redMinus.style.backgroundColor = 'green';
        redMinus.style.color = 'yellow';
        redAdd.style.backgroundColor = 'red';
        redAdd.style.color = 'red';
    });
    redMinus.addEventListener('mouseout', () => {
        redMinus.style.backgroundColor = '';
        redMinus.style.color = '';
        redAdd.style.backgroundColor = '';
        redAdd.style.color = '';
    });
    redAdd.addEventListener("click", () => {
        if (inputScore1.value >= maxScoreValue) {
            //console.log(inputScore1.value);
        } else if (defaultScoreOne < 9) {
            defaultScoreOne += 1;
            inputScore1.value = defaultScoreOne;
            scoreOne.innerHTML = "0" + defaultScoreOne;
        } else {
            defaultScoreOne += 1;
            inputScore1.value = defaultScoreOne;
            scoreOne.innerHTML = defaultScoreOne;
        }
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
    });
    redMinus.addEventListener("click", () => {
        //if (confirm('Are you sure you want to remove a point?')) {
        var redMinusBtnConfirm = confirm(`${`Are you sure you want to remove a point?`}`);
        if (redMinusBtnConfirm == false) {
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
        }
        //}
    });

    //const blueAdd = document.getElementById("blue_add");
    //const blueMinus = document.getElementById("blue_minus");
    blueAdd.addEventListener('mouseover', () => {
        blueAdd.style.backgroundColor = 'green';
        blueAdd.style.color = 'yellow';
        blueMinus.style.backgroundColor = 'blue';
        blueMinus.style.color = 'blue';
    });
    blueAdd.addEventListener('mouseout', () => {
        blueAdd.style.backgroundColor = '';
        blueAdd.style.color = '';
        blueMinus.style.backgroundColor = '';
        blueMinus.style.color = '';
    });
    blueMinus.addEventListener('mouseover', () => {
        blueMinus.style.backgroundColor = 'green';
        blueMinus.style.color = 'yellow';
        blueAdd.style.backgroundColor = 'blue';
        blueAdd.style.color = 'blue';
    });
    blueMinus.addEventListener('mouseout', () => {
        blueMinus.style.backgroundColor = '';
        blueMinus.style.color = '';
        blueAdd.style.backgroundColor = '';
        blueAdd.style.color = '';
    });
    blueAdd.addEventListener("click", () => {
        if (inputScore2.value >= maxScoreValue) {
            //console.log(inputScore2.value);
        } else if (defaultScoreTwo < 9) {
            defaultScoreTwo += 1;
            inputScore2.value = defaultScoreTwo;
            scoreTwo.innerHTML = "0" + defaultScoreTwo;
        } else {
            defaultScoreTwo += 1;
            inputScore2.value = defaultScoreTwo;
            scoreTwo.innerHTML = defaultScoreTwo;
        }
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
    });
    blueMinus.addEventListener("click", () => {
        //if (confirm('Are you sure you want to remove a point?')) {
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
        }
        //}
    });
}
