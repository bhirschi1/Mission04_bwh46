$("#calcGrade").click(function () {
    //setting a variable for each section of the grade weight in the syllabus (50% for assignment grades, 10% for the rest
    // using the id's in the form inputs with jquery selectors)

    assignmentGrade = ($("#assignment").val() * .5);
    groupProjGrade = ($("#group").val() * .1);
    quizGrade = ($("#quizzes").val() * .1);
    midtermGrade = ($("#midterm").val() * .1);
    finalExamGrade = ($("#final").val() * .1);
    intexGrade = ($("#intex").val() * .1);

    //totalling up each individual portion of the grade to find the total percentage grade

    totalGrade = (assignmentGrade + groupProjGrade + quizGrade + midtermGrade + finalExamGrade + intexGrade)

    // initialize finalGrade, which will be a letter grade depending on totalGrade from above
    //These letter grades follow the syllabus

    finalGrade = "";
    if (totalGrade >= 94) {
        finalGrade = "A"
    }
    else if (totalGrade >= 90) {
        finalGrade = "A-"
    }
    else if (totalGrade >= 87) {
        finalGrade = "B+"
    }
    else if (totalGrade >= 84) {
        finalGrade = "B"
    }
    else if (totalGrade >= 80) {
        finalGrade = "B-"
    }
    else if (totalGrade >= 77) {
        finalGrade = "C+"
    }
    else if (totalGrade >= 74) {
        finalGrade = "C"
    }
    else if (totalGrade >= 70) {
        finalGrade = "C-"
    }
    else if (totalGrade >= 67) {
        finalGrade = "D+"
    }
    else if (totalGrade >= 64) {
        finalGrade = "D"
    }
    else if (totalGrade >= 60) {
        finalGrade = "D-"
    }
    else {
        finalGrade = "E"
    }

    //this line changes the p tag that is initially blank in the grade calc form on html page, then displays the % grade and the final letter grade
    $("#totalGrade").text("Final Grade is a(n) " + totalGrade + "%, which is a " + finalGrade)
})
    //alert("A: " + $("#assignment").val() + assignmentGrade + " " + groupProjGrade + " " + quizGrade + midtermGrade +
    //    finalExamGrade + intexGrade + " are all 6");
    


//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtFrom").value + 
//        "Subject: " + document.getElementById("txtSubject").value + 
//        "Message: " + document.getElementById("txtMessage").value)
//})

