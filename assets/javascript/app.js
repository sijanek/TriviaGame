
    var count = 40;

    var intervalId;

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;

    //The questions array
    var question = [{
        question: "Who sang the title track of the late 80s James Bond film License to Kill?",
        answerList: ["Tina Turner","Patti LaBelle","Gladys Knight","Shirley Bassey"],
        answer: [2]
    },{
        question: "‘Need You Tonight’ was released by which rock band?",
        answerList: ["The Cure","Metallica","INXS","Aerosmith"],
        answer: [2]

    },{
        question: "Which British band had the massive hit Fools Gold?",
        answerList: ["The Stone Roses","Lloyd Cole and the Commotions","Pixies","Joy Division"],
        answer: [0] 
    },{
        question: "Which Frankie Goes to Hollywood song was banned on UK radio play in 1984, because of its lyrics?",
        answerList: ["Two Tribes","Relax","Welcome to the Pleasuredome","Rage Hard"],
        answer: [1]    
    },{
        question: "The French song Joe le Taxi, by Vanessa Paradis, charted at what position on the UK chart?",
        answerList: ["1","3","5","7"],
        answer: [1]    
    },{
        question: "In David Bowie's 'Let's Dance', he urges ,'...put on your ________ shoes and dance the blues....'",
        answerList: ["old","big","new","red"],
        answer: [3]   
    },{
        question: "In the video for 'Time After Time', where do Cyndi Lauper and her boyfriend live?",
        answerList: ["a treehouse","a houseboat","a trailer","a mansion"],
        answer: [2]   
    }];
 $("#start").on("click",function() {
     //Hide the start button
     $(this).hide();

     //Display the start coundown
     $("#time").html("<h2> Time Remaining: 40 Seconds </h2>" + "<br>");

     //Start the timer
     run();

     //Display questions
     //Q1
    $("#question1").html("<h3>" + question[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + question[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + question[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + question[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + question[0].answerList[3] + "</label><br><br>"
    );

    // Q2
    $("#question2").html("<h3>" + question[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + question[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + question[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + question[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + question[1].answerList[3] + "</label><br><br>"
    );

    // Q3
    $("#question3").html("<h3>" + question[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + question[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + question[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + question[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + question[2].answerList[3] + "</label><br><br>"
    );

    // Q4
    $("#question4").html("<h3>" + question[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + question[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + question[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + question[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + question[3].answerList[3] + "</label><br><br>"
    );

    // Q5
    $("#question5").html("<h3>" + question[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + question[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + question[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + question[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + question[4].answerList[3] + "</label><br><br>"
    );
    // Q6
    $("#question6").html("<h3>" + question[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + question[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + question[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + question[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + question[5].answerList[3] + "</label><br><br>"
    );
    // Q7
    $("#question7").html("<h3>" + question[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + question[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + question[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + question[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + question[6].answerList[3] + "</label><br><br>"
    );

    //Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    //Click to run the Score and display results when user clicks Done
    $("#done").on("click", function() {

        // I cannot figure out to make the done button work at this moment:/
        
        //Keeps track of the score based on correct, wrong or unanswered input
        keepingScore();

        //Display the results
        displayResults();
    });


 });

 //Timer countdown function
 function run () {
     clearInterval(intervalId);
     intervalId = setInterval(decrement,1000);
 }

 function decrement() {

    //Decrease number by one.
    count--;

    //Display the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + count + "Seconds ></h2>"  + "<br>");

    if (count === 0) {

        //Run the stop function to stop the coundown.
        stop ();

        keepingScore();
        displayResults();
    }
 }

 function stop() {

    //Clear the intervalId
    clearInterval(intervalId);
 }

 //Function to display results
 function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#submit").hide();

    //This will disply the count of each correct, wrong and unanswered questions.
    $("#resultsMessage").html();
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#wrong").html("Wrong Answers: " + wrongtAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
}

// Function keeps score in terms of correct, wrong, and unanswered 
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();

    // Q1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Q2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Q3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Q4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Q5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Q6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Q7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }  

}
    