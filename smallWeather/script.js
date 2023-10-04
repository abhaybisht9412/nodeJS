// weather condition icon
const weatherIcon = document.getElementById("weathercon");

// date
const curDate = document.querySelector("#date");

// status of weather
let tempStatus = "Clouds";

// *****************************
// function for Date and Time
const getCurrentDay = () => {
  // array for week days
  let weekdays = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  // object for current info
  let current = new Date();
  // console.log(current);

  // getDate gives day in index format
  weekday = weekdays[current.getDay()];
  return weekday;
};
// **********************************

// **********************************
// getting full date
const getFullDate = () => {
  // array for months
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const current = new Date();
  //   console.log(months[current.getUTCMonth()]);

  let month = months[current.getUTCMonth()];
  let date = current.getDate();
  let year = current.getFullYear();

  //   getting time
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let second = current.getSeconds();

  //   period
  let period = "AM";
  if (hours >= 12) {
    period = "PM";
    hours -= 12;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    
  return `${month}  ${date}  ${year} | ${hours}:${minutes}:${second} ${period}`
};
// **********************************

curDate.innerHTML = getCurrentDay() + " | " + getFullDate();
