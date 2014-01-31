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
    inProgress: false,
    mode: null,

    clueIndex: 0,
    questions: [], // elements which will be the questions
    clues: [], // randomized clues for the current question
    currentQuestion: -1, // index of current question
    progressStages: ['blue', 'success', 'warning', 'error'],
    lives: 3,
    score: 0,
    multiplier: 1,
    streak: 0,

    reset: function() {
      $("#finalscorearea").fadeOut(fadeTime, function() {
        $("#startbuttons").fadeIn(fadeTime);
      });
    },

    startGame: function(mode) {
      // check we're not already in progress
      if (this.inProgress) {
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
      $("#startbuttons").fadeOut(fadeTime, function() {
        $("#question").fadeIn(fadeTime);
        $("#score").fadeIn(fadeTime);
        if (mode == 'survival') {
          $("#lives").fadeIn(fadeTime);
        }
        else {
          $("#streak").fadeIn(fadeTime);
        }
      });

      // set stats
      this.score = 0;
      this.streak = 0;
      this.lives = 3;
      this.multiplier = 1;
      this.updateStats();

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
      shuffle(this.clues);

      // update the shown question number
      $("#question").empty();
      $("#question").append("<h2>Q" + (this.currentQuestion+1) + "</h2>");

      // show the possible answers
      $("#answers").fadeIn(fadeTime);
      for (var i = 0; i < 4; ++i) {
        $("#answers").append("<div id=\"elementbox" + (i+1) + "\" class=\"element-box left hover-box\" "
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
      $("#clues").append("<div id=\"" + selectorStr + "\" style=\"display:none;\"><h4>"
                         + this.clues[this.clueIndex]
                         + "</h4></div>");
      $("#" + selectorStr).fadeIn(fadeTime);

      if (this.clueIndex == 0) {
        this.progressBar.removeClass("transition")
          .addClass(this.progressStages[this.clueIndex]).addClass("transition");
      }
      else {
        this.progressBar.removeClass(this.progressStages[this.clueIndex-1])
          .addClass(this.progressStages[this.clueIndex]);
      }

      var self = this;
      $(".ui-progress", this.progressBar).animateProgress(75 - (25*this.clueIndex), 4000,
                                                          function() {self.addClue();});
    },

    selectAnswer: function(element) {
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
        self.showQuestionResult(correct, self.questions[self.currentQuestion - 1], qscore);
      });
    },

    tweetScore: function() {
    },

    showQuestionResult: function(correct, element, qscore) {
      var resultStr = correct ?
        "Correct! " + qscore + " points!" :
        "Wrong! The correct answer was:";

      $("#questionresultarea").append("<div id=\"questionresult\">"
                                      + "<h3 style=\"line-height:80px;\">"
                                      + resultStr
                                      + "</h3></div>");
      $("#questionresultarea").append("<div class=\"element-box centred\" id=\"answerbox\">"
                                      + "<div class=\"number\"><span class=\"label\">"
                                      + (element+1)
                                      + "</span></div>"
                                      + "<div class=\"symbol\"><span class=\"label\">"
                                      + elements[element].symbol
                                      + "</span></div>"
                                      + "<div class=\"name\"><span class=\"label\">"
                                      + elements[element].name
                                      + "</span></div></div>");
      if (this.gameIsOver()) {
        this.endGame();
        $("#questionresultarea").append("<div id=\"nextquestion\">"
                                        + "<a onclick=\"App.playAgain();\" "
                                        + "class=\"btn btn-primary btn-large\">"
                                        + "Play Again</a>"
                                        + "<a onclick=\"App.tweetScore();\" "
                                        + "class=\"btn btn-primary btn-large\">"
                                        + "Tweet Your Score</a></div>");
      }
      else {
        $("#questionresultarea").append("<div id=\"nextquestion\">"
                                        + "<a onclick=\"App.nextQuestion();\" "
                                        + "class=\"btn btn-primary btn-large\">"
                                        + "Next Question</a></div>");
      }
      $("#questionresultarea").fadeIn(fadeTime);
    },

    nextQuestion: function() {
      var self = this;
      $("#questionresultarea").fadeOut(fadeTime, function() {
        $("#questionresultarea").empty();
        self.askQuestion();
      });
    },

    playAgain: function() {
      var self = this;
      $("#questionresultarea").fadeOut(fadeTime, function() {
        $("#questionresultarea").empty();
        self.reset();
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
      $("#streak").empty();
      $("#streak").append("<h2>Streak: " + this.streak + "</h2>");
      $("#lives").empty();
      $("#lives").append("<h2>Lives: " + this.lives + "</h2>");
    },

    gameIsOver: function() {
      return (this.mode == 'survival' && this.lives == 0)
        || (this.currentQuestion == this.questions.length);
    },

    endGame: function() {
      $("#finalscore").empty();
      $("#finalscore").append("<h2>Final Score: "
                              + this.score + "</h2>");

      this.inProgress = false;
      if (this.mode == 'survival') {
        $("#lives").fadeOut(fadeTime);
      }
      else {
        $("#streak").fadeOut(fadeTime);
      }
      $("#question").fadeOut(fadeTime);
      $("#score").fadeOut(fadeTime, function() {
        $("#finalscorearea").fadeIn(fadeTime);
      });
    },
  };

}).call(this);
