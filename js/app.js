// Create an age tester
/**
 * User will input their date of birth
 * Code will check the DOB entered and compare it to the date for eligibility: Today's day 21 years ago
 * If the DOB is valid, display Access Granted
 * IF the DOB is invalid, display Access Denies
 */
const today = new Date();

const dateInput = document.getElementById('dateInput');
const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate();
// console.log(today, dateInput, validYear, validMonth, validDay);
// console.log('the year is', validYear, 'the month is', validMonth, 'the day is', validDay);

// need to get the year for the valid date by subtracting 21 years from today's date

// const validAge = ;

// console.log(dateInput);

const getDOB =()=> {
    const userDate = new Date(dateInput.value);// need to get just the year of the userDate
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    console.log(userDate, userYear, userMonth, userDay);
    verifyAge(userDate, userYear, userMonth, userDay);
}

const verifyAge =(date, year, month, day)=> {
    const userDate = date;
    const userYear = year;
    const userMonth = month;
    const userDay = day
    // Need to check to see the user's birth year is valid
    // Is userYear >= validYear?
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                console.log("day is valid")
            } else {
                console.log("Access Denied")
            }
        } else {
            console.log("Access Denied")
        }
    } else {
        console.log("Access Denied")
    }


};



