var questions = {
    django: {
        opt1: "Django Unchained",
        opt2: "In Cold Blood",
        opt3: "Shaft",
        opt4: "The Warriors"
    },

    dogs: {
        opt1: "The Hateful Eight",
        opt2: "RocknRolla",
        opt3: "Reservoir Dogs",
        opt4: "Sin City"
    },

    inglo: {
        opt1: "Lock, Stock and Two Smoking Barrels",
        opt2: "Saving Private Ryan",
        opt3: "Tropic Thunder",
        opt4: "Inglorious Basterds"
    },

    killbill: {
        opt1: "Seven Samurai",
        opt2: "Kill Bill",
        opt3: "Atomic Blonde",
        opt4: "Snatch"
    },

    proof: {
        opt1: "Django Unchained",
        opt2: "Death Proof",
        opt3: "Underworld",
        opt4: "Mad Max (1979)"
    },

    pulp: {
        opt1: "Boogie Nights",
        opt2: "Scarface",
        opt3: "Pulp Fiction",
        opt4: "The Matrix"
    }
}

//variables for normal game timer and answer timer
var time = 31;

var answerTime = 5;

var interval;

var answerInterval;

//var to count right answers
var right = 0;

//var to count wrong answers
var incorrect = 0;

//var to count unanswered questions
var no = 0;

//question counter; basically makes the game run
var question = 0;

//var shows the correct answer for wrong function
var C = null;

//var click variable for unanswered function
var click = false;


$(document).ready(function () {
    $("#start").on("click", function () {
        qCount();
    })

    //game function (basically)
    function qCount() {
        question = question + 1;
        reset();

        if (question === 1) {
            django();
        } else if (question === 2) {
            dogs();
        } else if (question === 3) {
            inglo();
        } else if (question === 4) {
            killbill();
        } else if (question === 5) {
            proof();
        } else if (question === 6) {
            pulp();
        } else if (question === 7) {
            results();
        }
    }

    //play again func
    function playAgain() {
        reset();
        right = 0;
        incorrect = 0;
        no = 0;
        question = 0;
        C = null;
        click = false;

        qCount();
    }

    //results page
    function results() {
        clear();

        if (right === 6) {
            $("#pic").html("<h2>Results:</h2>");
            $("#q").append("<h2>you got all the questions right, nice.</h2>");
            $("#q").append("<button type='button' class='btn btn-danger' id='again'>play again?</button>");
        } else if (incorrect === 6) {
            $("#pic").html("<h2>Results:</h2>");
            $("#q").append("<h2>you got all the questions wrong.</h2>");
            $("#q").append("<button type='button' class='btn btn-danger' id='again'>play again?</button>");
        } else if (no === 6) {
            $("#pic").html("<h2>Results:</h2>");
            $("#q").append("<h2>you didn't answer any questions.</h2>");
            $("#q").append("<button type='button' class='btn btn-danger' id='again'>play again?</button>");
        } else {
            $("#pic").html("<h2>Results:</h2>");
            $("#q").append("<h2 class='text-success'>you got " + right + " question(s) right.</h2>");
            $("#q").append("<h2 class='text-danger'>you got " + incorrect + " question(s) wrong.</h2>");
            if (no) {
                $("#q").append("<h2>you didn't answer " + no + " question(s).</h2>");
            }
            $("#q").append("<button type='button' class='btn btn-danger' id='again'>play again?</button>");
        }

        $("#again").on("click", function () {
            playAgain();
        })

    }

    //first question
    function django() {
        C = questions.django.opt1;
        run();
        $("#pic").html("<img src='assets/images/django.jpg' alt='django still' />");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.django.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.django.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.django.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.django.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            correct();
            click = true;
        });

        $("#2").on("click", function () {
            wrong();
            click = true;
        });

        $("#3").on("click", function () {
            wrong();
            click = true;
        });

        $("#4").on("click", function () {
            wrong();
            click = true;
        });
    }

    //second question
    function dogs() {
        C = questions.dogs.opt3;
        run();
        $("#pic").html("<img src='assets/images/dogs.jpg' alt='dogs still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.dogs.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.dogs.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.dogs.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.dogs.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
            click = true;
        });

        $("#2").on("click", function () {
            wrong();
            click = true;
        });

        $("#3").on("click", function () {
            correct();
            click = true;
        });

        $("#4").on("click", function () {
            wrong();
            click = true;
        });
    }

    //third question
    function inglo() {
        C = questions.inglo.opt4;
        run();
        $("#pic").html("<img src='assets/images/inglo.jpg' alt='inglo still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.inglo.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.inglo.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.inglo.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.inglo.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
            click = true;
        });

        $("#2").on("click", function () {
            wrong();
            click = true;
        });

        $("#3").on("click", function () {
            wrong();
            click = true;
        });

        $("#4").on("click", function () {
            correct();
            click = true;
        });
    }

    //fourth question
    function killbill() {
        C = questions.killbill.opt2;
        run();
        $("#pic").html("<img src='assets/images/killbill.jpg' alt='killbill still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.killbill.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.killbill.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.killbill.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.killbill.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
            click = true;
        });

        $("#2").on("click", function () {
            correct();
            click = true;
        });

        $("#3").on("click", function () {
            wrong();
            click = true;
        });

        $("#4").on("click", function () {
            wrong();
            click = true;
        });
    }

    //fifth question
    function proof() {
        C = questions.proof.opt2;
        run();
        $("#pic").html("<img src='assets/images/proof.jpg' alt='deathproof still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.proof.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.proof.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.proof.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.proof.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
            click = true;
        });

        $("#2").on("click", function () {
            correct();
            click = true;
        });

        $("#3").on("click", function () {
            wrong();
            click = true;
        });

        $("#4").on("click", function () {
            wrong();
            click = true;
        });
    }

    //sixth question
    function pulp() {
        C = questions.pulp.opt3;
        run();
        $("#pic").html("<img src='assets/images/pulp.jpg' alt='pulp still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.pulp.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.pulp.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.pulp.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.pulp.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
            click = true;
        });

        $("#2").on("click", function () {
            wrong();
            click = true;
        });

        $("#3").on("click", function () {
            correct();
            click = true;
        });

        $("#4").on("click", function () {
            wrong();
            click = true;
        });
    }


    //answer page for correct, wrong answers, not answered as well
    function correct() {
        clear();
        stop();
        answerRun();
        $("#timer").html("<h2 class='text-success'>correct!</h2>");
        $("#pic").html("<img src='assets/images/correct.gif'/>");
        right = right + 1;
        console.log(right);
    }

    function wrong() {
        clear();
        stop();
        answerRun();
        $("#timer").html("<h2 class='text-danger'>wrong answer</h2>");
        $("#pic").html("<img src='assets/images/wrong.gif' alt='wrong answer gif'/>");
        $("#q").html("<h2>the correct answer is: " + C + "</h2>");
        incorrect = incorrect + 1;
        console.log(incorrect);
    }

    function noA() {
        $("#timer").html("<h2 class='text-warning'>time's up</h2>");
        $("#pic").html("<img src='assets/images/huh.gif' alt='no answer gif'/>");
        $("#q").html("<h2>the correct answer is: " + C + "</h2>");
        no = no + 1;
        answerRun();
    }

    //function to clear divs
    function clear() {
        $("#timer").html("");
        $("#pic").html("");
        $("#q").html("");
    }

    //answer page timer function
    function answerRun() {
        answerInterval = setInterval(answerTimer, 1000);
    }

    function answerTimer() {
        answerTime--;
        if (answerTime === 0) {
            answerStop();
            clear();
            qCount();
        }
    }

    function answerStop() {
        clearInterval(answerInterval);
    }

    //timer functions
    function run() {

        interval = setInterval(timer, 1000);
    }

    function timer() {
        time--;
        $("#timer").html("<h2>you have " + time + " second(s) remaining</h2>");

        if (time === 0 && click === true) {
            stop();
            qCount();
            // noA();
        } else if (time === 0 && click === false) {
            stop();
            noA();
        }

        click = false;
    }

    function stop() {

        clearInterval(interval);

    }

    //reset global vars for round timer and answer timer
    function reset() {
        time = 31;
        answerTime = 5;
    }
})

