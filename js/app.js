// Create an age tester
/**
 * User will input their date of birth
 * Code will check the DOB entered and compare it to the date for eligibility: Today's day 21 years ago
 * User must check a checkbox for verification
 * If the DOB is valid, display Access Granted
 * IF the DOB is invalid, display Access Denies
 */
const today = new Date();

const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate();

const dateInput = document.getElementById('dateInput');
const checkbox = document.getElementById('checkbox');

const message = document.getElementById('message');
let messageText = "";

// need to get the year for the valid date by subtracting 21 years from today's date

// need to see if checkbox has been checked

// const validAge = ;

// console.log(dateInput);

const validate =()=> {
    const isChecked = checkbox.checked;
    if (!isChecked) {
        messageText = "Please check the box to verify your age.";
        message.innerHTML = `
            ${messageText};
        `
    } else {
        messageText = "";
        getDOB();
    }
}

const getDOB =()=> {
    const userDate = new Date(dateInput.value);// need to get just the year of the userDate
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    verifyAge(userYear, userMonth, userDay);
}

const verifyAge =(year, month, day)=> {
    const userYear = year;
    const userMonth = month;
    const userDay = day
    // Need to check to see the user's birth year is valid
    // Is userYear >= validYear?  This was backwards
    // Questions for Herb:  why are we getting days that seem to be zero-indexed?
    // Why did our pages default and refresh every time we submitted data?
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                console.log("month passed, day is validDay", validDay, "userDay", userDay);
                messageText = "access granted";
                message.innerHTML = `
                ${messageText};
            `
            } else {
                messageText = "access denied";
                message.innerHTML = `
                ${messageText};
            `
            }
        } else {
            messageText = "access denied";
            message.innerHTML = `
            ${messageText};
        `
        }
    } else {
        messageText = "access denied";        
        message.innerHTML = `
        ${messageText};
    `
    }
};

