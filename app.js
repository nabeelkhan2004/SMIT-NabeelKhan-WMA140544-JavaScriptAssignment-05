                                        // Chapter 26 - 30
                            
                            // 1. Write a program that takes a positive integer from user &
                                // display the following in your browser.
                                // a. number
                                // b. round off value of the number
                                // c. floor value of the number
                                // d. ceil value of the number

// // var floatNumber = 3.35151;

// // document.write("number: " + floatNumber);
// // document.write("<br> round off value: " + Math.round(floatNumber));
// // document.write("<br> floor value: " + Math.floor(floatNumber));
// document.write("<br> ceil value: " + Math.ceil(floatNumber));

                            // 2. Write a program that takes a negative floating point
                                // number from user & display the following in your browser.
                                // a. number
                                // b. round off value of the number
                                // c. floor value of the number
                                // d. ceil value of the number

// var floatNumber = -4.41651;

// document.write("number: " + floatNumber);
// document.write("<br> round off value: " + Math.round(floatNumber));
// document.write("<br> floor value: " + Math.floor(floatNumber));
// document.write("<br> ceil value: " + Math.ceil(floatNumber));



                            // 3. Write a program that displays the absolute value of a
                                // number.
                                // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var absNumber = -6;

// document.write("The absolute value of " + absNumber + " is " + Math.abs(absNumber))

                           
                            // 4. Write a program that simulates a dice using random()
                                // method of JS Math class. Display the value of dice in your
                                // browser.:

// document.write("Random dice value: " + (Math.round(Math.random() * 6)))
// document.write("<br> Random dice value: " + (Math.round(Math.random() * 6)))

                            // 5. Write a program that simulates a coin toss using random()
                                // method of JS Math class. Display the value of coin in your
                                // browser

// var coinVal1 = Math.round(Math.random() + 1);

// document.write(coinVal1 + "<br>")

// if(coinVal1 === 2) {
//     coinVal1 = "Heads";
// } else {
//     coinVal1 = "Tails"
// }

// document.write("random coin value: " + coinVal1 + "<br>")

// var coinVal1 = Math.round(Math.random() + 1);

// document.write(coinVal1 + "<br>")

// if(coinVal1 === 2) {
//     coinVal1 = "Heads";
// } else {
//     coinVal1 = "Tails"
// }

// document.write("random coin value: " + coinVal1)

                            // 6. Write a program that shows a random number between 1
                              // and 100 in your browser.

// var randomNum = Math.ceil(Math.random() * 100)

// document.write("random number between 1 and 100: " + randomNum)

                            // 7. Write a program that asks the user about his weight. Parse
                                // the user input and display his weight in your browser.
                                // Possible user inputs can be:
                                // a. 50
                                // b. 50kgs
                                // c. 50.2kgs
                                // d. 50.2kilograms

// var userInput = prompt("Please insert you weight")

// var userWeight = ""

// for(var i = 0; i < userInput.length; i++) {
//     if(userInput.charCodeAt(i) <= 57) {
//         userWeight += userInput[i]
//     }
// }

// document.write("The weight of user is " + userWeight + " kilograms")

                            // 8. Write a program that stores a random secret number from
                                // 1 to 10 in a variable. Ask the user to input a number
                                // between 1 and 10. If the user input equals the secret
                                // number, congratulate the user.

// var userInputNum = +prompt("Please input your number");

// var randomNum = Math.ceil(Math.random() * 10);

// if(randomNum === userInputNum) {
//     document.write("Congratulation! your number meet the secret number")
// } else {
//     document.write("Sorry! your number didn't meet the secret number")
// }

                                        // Chapter 31 - 34

                            // 1. Write a program that displays current date and time in your browser.

// var d = new Date()
// document.write(d)

                            // 2. Write a program that alerts the current month in words.
                             // For example December.

// var d =  new Date();

// var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// var m = d.getMonth()

// document.write("Current month: " + monthArr[m])

                            // 3. Write a program that alerts the first 3 letters of the current
                                // day, for example if today is Sunday then alert will show
                                // Sun.

// var d =  new Date().toString();
// d = d.slice(0, 3);

// document.write("Today is " + d)

                            // 4. Write a program that displays a message “It’s Fun day” if
                                // its Saturday or Sunday today.

// var d =  new Date().toString();
// d = d.slice(0, 3);

// if(d === "Sat" || d === "Sun") {
//     document.write("It's Fun day")
// }

                            // 5. Write a program that shows the message “First fifteen
                                // days of the month” if the date is less than 16th of the month
                                // else shows “Last days of the month”.

// var d = new Date();
//  d = d.getDate()
 
//  if(d < 16) {
//     document.write("First fifteen days of the month")
// } else {
//      document.write("Last days of the month")
//  }

                            // 6. Write a program that determines the minutes since
                                // midnight, Jan. 1, 1970 and assigns it to a variable that
                                // hasn't been declared beforehand. Use any variable you like
                                // to represent the Date object.

// var d = new Date();

// document.write("Current Date: " + d)
// document.write("<br>Elapsed miliseconds since January 1, 1970: " + d.getTime())
// document.write("<br>Elapsed minutes since January 1, 1970: " + Math.round(((d.getTime() / 1000) / 60 )))

                            // 7. Write a program that tests whether it's before noon and
                             // alert “Its AM” else “its PM”.

// var d = new Date();

// if(d.getHours() >= 12) {
//     document.write("Its PM")
// } else {
//     document.write("Its AM")
// }

                            // 8. Write a program that creates a Date object for the last day
                                // of the last month of 2020 and assigns it to variable named
                                // laterDate

// var d = new Date("December 31, 2020");

// document.write("Later Date: " + d)

                            // 9. Create a date object of the starting date of this Ramadan
                                // and alert the number of days past since 1st Ramadan?
                                // Note: 1st Ramadan was on June 18, 2015

// var ramadamDate = new Date("June 15, 2015");

// var currentDate = new Date()
// document.write(((currentDate.getTime() - ramadamDate.getTime()) / 1000 / 60 / 60 / 24).toFixed() + " days have passed since 1st Ramadan, 2015" )


                            // 10. Write a program that displays in your browser the
                                // seconds that elapsed between the reference date and the
                                // beginning of 2015.

// var currentDate = new Date();

// var dateSince2015 = new Date("January 01, 2015");

// document.write("On reference date: " + currentDate + "<br>" )
// document.write(((currentDate.getTime() - dateSince2015.getTime()) / 1000).toFixed() + " Seconds had passed since beginning of 2015" )

                            // 11. Create a Date object for the current date and time.
                                // Extract the hours, reset the date object an hour ahead and
                                // finally display the date object in your browser.

// var d = new Date();
// document.write("Current date: " + d + "<br>")
// document.write("1 hour ago, it was " + (new Date(d.setHours(Number(d.getHours()-1)))))

                            // 12. Write a program that creates a date object and show the
                                // date in an alert box that is reset to 100 years back?

// var d = new Date();
// document.write("current date: " + d)
// document.write("<br> 100 years back, it was " + new Date(d.setFullYear(Number(d.getFullYear()-100))))

                            // 13. Write a program to ask the user about his age. Calculate
                                // and show his birth year in your browser.

// var userAge = +prompt("Write your age");
// document.write("Your Age is: " + userAge);
// var userBirthYear = new Date().getFullYear() - userAge;
// document.write("<br> Your birth year is: " + userBirthYear);

                            // 14. Write a program to generate your K-Electric bill in your
                                // browser. All the amounts should be rounded off to 2
                                // decimal places. Display the following fields:
                                // a. Customer Name
                                // b. Current Month
                                // c. Number of units
                                // d. Charges per unit
                                // e. Net Amount Payable (within Due Date)
                                // f. Late Payment Surcharge
                                // g. Gross Amount Payable (after Due Date)
                                // Where,
                                // Net Amount Payable (within Due Date) = Number of units * Charges per unit
                                // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = "Nabeel Khan";
// var currentMonth = new Date().getMonth()
// var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var numOfUnits = 179;
// var unitCharges = 22.950;

// document.write("<h1>K-Electric Bill</h1> ")
// document.write("<br>Customer Name: " + "<b>" +customerName + "</b>");
// document.write("<br>Month: " + "<b>" + monthArr[currentMonth] +"</b>")
// document.write("<br>Number of units: " + "<b>" + numOfUnits +"</b>")
// document.write("<br>Charges units: " + "<b>" + unitCharges +"</b> <br>")

// document.write("<br>Net Amount Payable (within Due Date): " + "<b>" + (numOfUnits * unitCharges).toFixed(2) +"</b>")
// document.write("<br>Late payment surcharges: " + "<b>" + (numOfUnits * unitCharges * .18).toFixed(2) + "</b>")
// document.write("<br>Gross Amount Payable (after Due Date): " + "<b>" + ((numOfUnits * unitCharges) + (numOfUnits * unitCharges * .1 )).toFixed(2) +"</b>")