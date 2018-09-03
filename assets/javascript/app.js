var questions = {
    django: {
        
    },

    dogs: {

    },

    inglo: {

    },

    killbill: {

    },

    proof: {

    },

    pulp: {

    }
}




$(document).ready(function() {
    $("#start").on("click", function() {
        console.log("sup");
        $("#pic").html("<img src='/Users/raglaks/Desktop/TriviaGame/assets/images/django.jpg' alt='django still' id='django'/>");
        $("#pic").append("<h2>What movie is this still from?</h2>");
    })
})

