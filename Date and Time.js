/********* 1.Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local. *******/
let date = new Date("2012","02", "20", "03", "12");
console.log(date);




/************ 2. Show a weekday ************/
//Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
 console.log( getWeekDay(date) );        // should output "TU"
 function getWeekDay(date) {
     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
     return days[date.getDay()];
}


/******************* 3.European weekday ***************/

/*European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). 
Write a function getLocalDay(date) that returns the “European” day of week for date.*/

let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getLocalDay(date) );       // tuesday, should show 2
function getLocalDay(date) {
    let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    return days[date.getDay() - 1];
}


/******************* 4. Which day of month was many days ago? *******************/
/* Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and
 getDateAgo(new Date(), 2) should be 18th.
Should work reliably for days=365 or more: 
*/
let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
    let dateCopy = new Date(date);  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }