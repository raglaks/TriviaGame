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

var time = 31;

var answerTime = 7;

var interval;

var answerInterval;

var right = null;

var incorrect = null;

var no = null;

var question = 0;

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

    //first question
    function django() {
        run();
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/django.jpg' alt='django still' />");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.django.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.django.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.django.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.django.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            correct();
        });

        $("#2").on("click", function () {
            wrong();
        });

        $("#3").on("click", function () {
            wrong();
        });

        $("#4").on("click", function () {
            wrong();
        });
    }

    //second question
    function dogs() {
        run();
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/dogs.jpg' alt='dogs still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.dogs.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.dogs.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.dogs.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.dogs.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
        });

        $("#2").on("click", function () {
            wrong();
        });

        $("#3").on("click", function () {
            correct();
        });

        $("#4").on("click", function () {
            wrong();
        });
    }

    //third question
    function inglo() {
        run();
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/inglo.jpg' alt='inglo still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.inglo.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.inglo.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.inglo.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.inglo.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
        });

        $("#2").on("click", function () {
            wrong();
        });

        $("#3").on("click", function () {
            wrong();
        });

        $("#4").on("click", function () {
            correct();
        });
    }

    //fourth question
    function killbill() {
        run();
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/killbill.jpg' alt='killbill still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.killbill.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.killbill.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.killbill.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.killbill.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
        });

        $("#2").on("click", function () {
            correct();
        });

        $("#3").on("click", function () {
            wrong();
        });

        $("#4").on("click", function () {
            wrong();
        });
    }

    //fifth question
    function proof() {
        run();
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/proof.jpg' alt='deathproof still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.proof.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.proof.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.proof.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.proof.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
        });

        $("#2").on("click", function () {
            correct();
        });

        $("#3").on("click", function () {
            wrong();
        });

        $("#4").on("click", function () {
            wrong();
        });
    }

    //sixth question
    function pulp() {
        run();
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/pulp.jpg' alt='pulp still'/>");
        $("#q").html("<h2>What movie is this still from?</h2>");
        $("#q").append("<div id='1'><h3>" + questions.pulp.opt1 + "</h3></div>");
        $("#q").append("<div id='2'><h3>" + questions.pulp.opt2 + "</h3></div>");
        $("#q").append("<div id='3'><h3>" + questions.pulp.opt3 + "</h3></div>");
        $("#q").append("<div id='4'><h3>" + questions.pulp.opt4 + "</h3></div>");

        $("#1").on("click", function () {
            wrong();
        });

        $("#2").on("click", function () {
            wrong();
        });

        $("#3").on("click", function () {
            correct();
        });

        $("#4").on("click", function () {
            wrong();
        });
    }


    //answer page for correct, wrong answers, not answered as well
    function correct() {
        clear();
        stop();
        answerRun();
        $("#timer").html("<h2>correct!</h2>");
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/correct.gif'/>");
        right = right + 1;
        console.log(right);
    }

    function wrong() {
        clear();
        stop();
        answerRun();
        $("#timer").html("<h2>wrong answer</h2>");
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/wrong.gif' alt='wrong answer gif'/>");
        incorrect = incorrect + 1;
        console.log(incorrect);
    }

    function noA() {
        no = no + 1;
        qCount();
        clear();
    }

    function clear() {
        $("#timer").html("");
        $("#pic").html("");
        $("#q").html("");
    }



    //answer page timer
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
        $("#timer").html("<h2>you have " + time + " seconds remaining</h2>");

        if (time === 0) {
            stop();
            $("#timer").html("<h2>time's up</h2>");
            qCount();
            // noA();
        }
    }

    function stop() {

        clearInterval(interval);

    }

    //reset global vars
    function reset() {
        time = 31;

        answerTime = 7;
    }
})

