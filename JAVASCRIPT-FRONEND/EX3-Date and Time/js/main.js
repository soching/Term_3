function showDate() {
  let today = new Date();
  // create 6 variables to store Hours, Minutes, Seconds, Date, Months and Year.
  let Hour1 = today.getHours();
  let minutes1 = today.getMinutes();
  let seconds1 = today.getSeconds();
  let day1 = today.getDate();
  let Months1 = months[today.getMonth()];
  let year1 = today.getFullYear();

  // check this website : https://www.w3schools.com/js/js_date_methods.asp
  // note:
  // the value of month is return us as number of index for each month so you can use it with array months to get value
  // the hours is return us as 0 - 23 (make sure it show us in 12-hour format)
  if (Hour1 > 12){
    Hour1 = 1;
  }else{
    Hour1 = today.getHours();
  }

  // add text content to hourElement, minElement, secElement 
  hourElement.textContent=Hour1;
  minElement.textContent=minutes1;
  secElement.textContent=seconds1;
  
  // add text content to dateElement as format(date month year)
  dateElement.textContent=day1+' '+Months1+' '+year1;
  // ex: 01 January 2024 
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#minute");
const secElement = document.querySelector("#second");
const dateElement = document.querySelector("#date");

setInterval(showDate, 1000);
