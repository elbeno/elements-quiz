(function( $ ){
  // Simple wrapper around jQuery animate to simplify animating progress from your app
  // Inputs: Progress as a percent, duration of animation, callback
  $.fn.animateProgress = function(progress, time, callback) {
    return this.each(function() {
      $(this).animate({
        width: progress+'%'
      }, {
        duration: time,
        easing: 'linear',
        complete: function(scope, i, elem) {
          if (callback) {
            callback.call(this, i, elem );
          };
        }
      });
    });
  };
})( jQuery );

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i;
        j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var fadeTime = 200;

(function() {

  window.App = {
    progressBar: null,

    // reentrancy guards
    inProgress: false,
    answerSelected: false,
    nextQuestionTransition: false,

    mode: null, // game mode

    clueIndex: 0,
    questions: [], // elements which will be the questions
    clues: [], // randomized clues for the current question
    currentQuestion: -1, // index of current question
    progressStages: ['blue', 'success', 'warning', 'error'],
    lives: 3,
    score: 0,
    multiplier: 1,
    streak: 0,

    startGame: function(mode, force) {
      // check we're not already in progress
      if (this.inProgress && !force) {
        return;
      }
      this.inProgress = true;
      this.mode = mode;

      // select questions and answers
      var elementSelection = new Array;
      for (var i = 0; i < elements.length; ++i) {
        elementSelection[i] = i;
      }
      shuffle(elementSelection);

      // score mode = 20 questions, survival mode = 3 lives and all questions
      if (this.mode == 'survival') {
        this.questions = elementSelection;
      }
      else {
        this.questions = elementSelection.slice(0, 20);
      }
      this.currentQuestion = 0;

      // fade out start buttons, fade in score
      var self = this;
      $("#nextquestion").fadeOut(fadeTime, function() {
        $("#nextquestion").empty();
      });

      // set stats
      this.score = 0;
      this.streak = 0;
      this.lives = 3;
      this.multiplier = 1;
      this.updateStats();

      // make the score be central
      $("#score").css("margin", "");
      $("#score").css("float", "left");
      $("#score").css("min-width", "0");

      // ask the first question
      this.progressBar = $("#progress_bar");
      this.askQuestion();
    },

    askQuestion: function() {
      // generate possible answers
      var answers = [];
      for (var i = 0; i < 4; ++i) {
        while (true) {
          var ans = Math.floor(Math.random()*elements.length);
          if (answers.indexOf(ans) == -1) {
            answers.push(ans);
            break;
          }
        }
      }

      // add the real answer if needed
      if (answers.indexOf(this.questions[this.currentQuestion]) == -1) {
        var realIndex = Math.floor(Math.random()*4);
        answers[realIndex] = this.questions[this.currentQuestion];
      }

      // generate clues
      this.clues = elements[this.questions[this.currentQuestion]].clues;
      do {
        shuffle(this.clues);
      // this is a family quiz, we don't want Fluorine Uranium Carbon Potassium!
      } while (this.clues[0] == 8
             && this.clues[1] == 91
             && this.clues[2] == 5
             && this.clues[3] == 18);

      // update the shown question number
      $("#question").empty();
      $("#question").append("<h2>Q" + (this.currentQuestion+1) + "</h2>");

      // show the possible answers
      $("#answers").fadeIn(fadeTime);
      for (var i = 0; i < 4; ++i) {
        $("#answers").append("<div id=\"elementbox" + (i+1) + "\" class=\"element-box hover-box\" "
                             + " onclick=\"App.selectAnswer("
                             + answers[i] + ");\">"
                             + "<div class=\"number\"><span class=\"label\">"
                             + (answers[i]+1)
                             + "</span></div>"
                             + "<div class=\"symbol\"><span class=\"label\">"
                             + elements[answers[i]].symbol
                             + "</span></div>"
                             + "<div class=\"name\"><span class=\"label\">"
                             + elements[answers[i]].name
                             + "</span></div></div>");
      }

      // start the clues
      this.clueIndex = -1;
      $("#clues").fadeIn(fadeTime);
      this.addClue();
    },

    addClue: function() {
      this.clueIndex++;
      if (this.clueIndex == 4) {
        return this.selectAnswer(-1);
      }
      var selectorStr = "clue" + this.clueIndex;
      $("#clues").append("<div class=\"cluediv\" id=\"" + selectorStr + "\" style=\"display:none;\"><span class=\"cluetext\" id=\"" + selectorStr + "span\">"
                         + this.clues[this.clueIndex]
                         + "</span></div>");
      $("#" + selectorStr).fadeIn(fadeTime);

      // change line height on line wrap
      if ($("#" + selectorStr + "span").outerHeight() > 50) {
        $("#" + selectorStr + "span").css("line-height", "25px");
      }

      if (this.clueIndex == 0) {
        this.progressBar.removeClass("transition")
          .addClass(this.progressStages[this.clueIndex]).addClass("transition");
      }
      else {
        this.progressBar.removeClass(this.progressStages[this.clueIndex-1])
          .addClass(this.progressStages[this.clueIndex]);
      }

      var self = this;
      $(".ui-progress", this.progressBar).animateProgress(75 - (25*this.clueIndex), 5000,
                                                          function() {self.addClue();});
    },

    selectAnswer: function(element) {
      if (this.answerSelected) {
        return;
      }
      this.answerSelected = true;

      // score
      var correct = (element == this.questions[this.currentQuestion]);
      var qscore = 0;
      if (correct) {
        qscore = this.rightAnswer();
      }
      else {
        this.wrongAnswer();
      }
      this.currentQuestion++;

      // reset progress bar
      $(".ui-progress", this.progressBar).stop(true);
      this.progressBar.removeClass("transition");
      this.progressBar.removeClass("blue");
      this.progressBar.removeClass("success");
      this.progressBar.removeClass("warning");
      this.progressBar.removeClass("error");
      this.progressBar.addClass("blue");
      $(".ui-progress", this.progressBar).css("width", "100%");

      // fade out clues and answers
      for (var i = 0; i < 4; ++i) {
        $("#clue" + i).fadeOut(fadeTime);
      }

      // fade out answers
      $("#elementbox1").fadeOut(fadeTime);
      $("#elementbox2").fadeOut(fadeTime);
      $("#elementbox3").fadeOut(fadeTime);

      var self = this;
      $("#elementbox4").fadeOut(fadeTime, function() {
        $("#clues").empty();
        $("#answers").empty();
        self.answerSelected = false;
        self.showQuestionResult(
          (element == -1 ? 'timeout' : (correct ? 'correct' : 'wrong')),
          self.questions[self.currentQuestion - 1], qscore);
      });
    },

    showQuestionResult: function(correct, element, qscore) {
      var resultStr = (correct == 'correct') ?
        ("Correct! " + qscore + " points!") :
        (((correct == 'wrong') ? "Wrong! " : "Too late! ") + "The correct answer was:");

      $("#questionresult").append("<h3 style=\"line-height:80px;\">"
                                  + resultStr
                                  + "</h3>");
      $("#answerbox").append("<div class=\"number\"><span class=\"label\">"
                             + (element+1)
                             + "</span></div>"
                             + "<div class=\"symbol\"><span class=\"label\">"
                             + elements[element].symbol
                             + "</span></div>"
                             + "<div class=\"name\"><span class=\"label\">"
                             + elements[element].name
                             + "</span></div>");
      if (this.gameIsOver()) {
        this.endGame();
        $("#nextquestion").append("<a onclick=\"App.playAgain('20 questions');\" "
                                  + "class=\"fixedbtn btn btn-primary btn-large\">"
                                  + "20 Questions Mode</a>"
                                  + "<a onclick=\"App.playAgain('survival');\" "
                                  + "class=\"fixedbtn btn btn-primary btn-large\">"
                                  + "Survival Mode</a>"
                                  + "<p><a id=\"tweetref\" href=\"https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.elbeno.com%2Fguesstheelement%2F&amp;text="
                                  + (this.mode == 'survival' ?
                                     "I%20survived%20for%20" + this.currentQuestion
                                     + "%20questions%20and%20scored%20" :
                                     "I%20scored%20")
                                  + this.score
                                  + "%20on%20Guess%20the%20Element%20"
                                  + this.mode
                                  + "%20mode%21&amp;tw_p=tweetbutton&amp;url=http%3A%2F%2Fwww.elbeno.com%2Fguesstheelement%2F\" "
                                  + "class=\"fixedbtn btn btn-primary btn-large novisit\">"
                                  + "Tweet Your Score</a></p>");
      }
      else {
        $("#nextquestion").append("<a onclick=\"App.nextQuestion();\" "
                                  + "class=\"btn btn-primary btn-large\">"
                                  + "Next Question</a>");
      }
      $("#nextquestion").fadeIn(fadeTime);
      $("#questionresultarea").fadeIn(fadeTime);
    },

    nextQuestion: function() {
      if (this.nextQuestionTransition) {
        return;
      }
      this.nextQuestionTransition = true;

      var self = this;
      $("#questionresultarea").fadeOut(fadeTime, function() {
        $("#questionresult").empty();
        $("#answerbox").empty();
        $("#nextquestion").empty();
        self.nextQuestionTransition = false;
        self.askQuestion();
      });
    },

    playAgain: function(mode) {
      if (this.inProgress) {
        return;
      }
      this.inProgress = true;

      var self = this;
      $("#questionresultarea").fadeOut(fadeTime, function() {
        $("#questionresult").empty();
        $("#answerbox").empty();
        $("#nextquestion").empty();
        self.startGame(mode, true);
      });
    },

    questionScore: function() {
      var w = $(".ui-progress", this.progressBar).width();
      return Math.floor(w/10) * this.multiplier;
    },

    calculateMultiplier: function() {
      return this.streak;
    },

    wrongAnswer: function() {
      this.lives--;
      this.streak = 0;
      this.multiplier = 1;
      this.updateStats();
    },

    rightAnswer: function() {
      var qscore = this.questionScore();
      this.score += qscore;
      this.streak++;
      this.multiplier = this.calculateMultiplier();
      this.updateStats();
      return qscore;
    },

    updateStats: function() {
      $("#score").empty();
      $("#score").append("<h2>Score: " + this.score + "</h2>");
      $("#modestat").empty();
      if (this.mode == 'survival') {
        $("#modestat").append("<h2>Lives: " + this.lives + "</h2>");
      }
      else {
        $("#modestat").append("<h2>Streak: " + this.streak + "</h2>");
      }
    },

    gameIsOver: function() {
      return (this.mode == 'survival' && this.lives == 0)
        || (this.currentQuestion == this.questions.length);
    },

    endGame: function() {
      $("#score").empty();
      $("#score").append("<h2 style=\"line-height: 80px;\">Final Score: "
                         + this.score + "</h2>");

      // make the final score be central
      $("#score").css("margin", "0 auto");
      $("#score").css("float", "none");
      $("#score").css("min-width", "400px");

      this.inProgress = false;
      $("#question").empty();
      $("#modestat").empty();
    },
  };

}).call(this);
