/****************  1. Last day of month? **************/
/*Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
Parameters:
year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb). */

function getLastDayOfMonth(year, month)
{
    let date = new Date(year,month+1,0);
    return date.getDate()
}

console.log(getLastDayOfMonth(2012,1));

/***************** 2. How many seconds have passed today? ****************/
/*  Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
For instance, if now were 10:00 am, and there was no daylight savings shift, then:
getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today”.
 */
function getSecondsToday()
{
    let date = new Date();
    date.setHours(0,0,0,0);
    return Math.floor((new Date() - date)/1000) ;
}
console.log(getSecondsToday());

/*********************** 3.How many seconds till tomorrow?  *********************/
/* Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
For instance, if now is 23:00, then:
getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.*/
function getSecondsToTomorrow()
{
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    return Math.floor(tomorrow - now)/1000;
}
console.log(getSecondsToTomorrow());

