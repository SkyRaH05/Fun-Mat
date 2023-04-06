var play = false;
var action;
var score;
var count;
var correctAns;

document.getElementById("start").onclick = function () {
  if (play) {
    location.reload();
  } else {
    play = true;

    score = 0;
    document.getElementById("marks").innerHTML = score;
    // document.getElementById("timeremain").style.display = "block";
    show("timeremain");
    count = 60;
    document.getElementById("time").innerHTML = count;
    hide("over");

    document.getElementById("start").innerHTML = "Reset Game";
    toCount();
    generateQues();
  }
};

for (i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function () {
    if (play) {
      if (this.innerHTML == correctAns) {
        score++;
        document.getElementById("marks").innerHTML = score;
        hide("cross");
        show("right");
        setTimeout(function () {
          hide("right");
        }, 1000);

        generateQues();
      } else {
        score = 0;
        document.getElementById("marks").innerHTML = score;

        show("cross");
        hide("right");
        setTimeout(function () {
          hide("cross");
        }, 1000);
      }
    }
  };
}

function toCount() {
  action = setInterval(function () {
    count -= 1;
    document.getElementById("time").innerHTML = count;
    if (count == 0) {
      stop();
      show("over");
      document.getElementById("over").innerHTML =
        "<p>Game Over !!</p><p>Your score is : " + score + "</p> ";
      document.getElementById("start").innerHTML = "Start Game";
      hide("timeremain");
      hide("cross");
      hide("right");
      play = false;
    }
  }, 1000);
}

function stop() {
  clearInterval(action);
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function generateQues() {
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  correctAns = x * y;
  document.getElementById("q&a").innerHTML = x + " x " + y;
  var postition = 1 + Math.round(3 * Math.random());
  document.getElementById("box" + postition).innerHTML = correctAns;
  var answers = [correctAns];
  for (i = 1; i <= 4; i++) {
    if (i != postition) {
      var wrongAns;
      do {
        wrongAns =
          (1 + Math.round(9 * Math.random())) *
          (1 + Math.round(9 * Math.random()));
      } while (answers.indexOf(wrongAns) > -1);
      document.getElementById("box" + i).innerHTML = wrongAns;
      answers.push(wrongAns);
    }
  }
}
