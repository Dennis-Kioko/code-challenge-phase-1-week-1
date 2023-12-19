//create function that generates student grades

let score = prompt("Enter the student's score");
function calculateGrade(score) {
    if (score >= 0 && score <= 39) {
        return `Your grade is:${E}`;
    
    } else if (score >= 40 && score < 49) {
        return `Your grade is:${"D"}`;
    
    } else if (score >=49 && score < 59) {
        return `Your grade is:${"C"}`;

    } else if (score >= 60 && score <= 79) {
        return `Your grade is:${"B"}`;

    } else if (score >= 79 && score <= 100) {
        return `Your grade is:${"A"}`;
    
    } else {
        return "Invalid input";
    }
}

let grade = calculateGrade(score);
// Prints the student's grade
window.alert(grade); 
