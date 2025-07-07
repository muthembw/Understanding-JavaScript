//Conditional Statements
        /*if(expression) //Expression is a condition which can be true of false
        statement1; //Statement1 is executed if expression is true
        else
         statement2; //Statement2 is executed if expression is false
        */
        let time = 7;
        if(time<12){
            console.log("Good Morning");
            console.log("Take your meds");
        }else {
             console.log("Good afternoon");
             console.log('Welcome to your account');
            }

            //Nested if statement
         let avg_marks = 440;
        if (avg_marks >= 0 && avg_marks <= 200) {
            console.log("Sorry,You have failed!");
        } else if (avg_marks > 200 && avg_marks < 400) {
            console.log("You have passed!");
        } else if (avg_marks >= 400 && avg_marks <= 500) {
            console.log("Excellent Work!");
        } else {
            console.log("Invalid marks");
        }