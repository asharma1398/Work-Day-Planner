// day and time displayed at the top of the page 
var currentDay = $("#currentDay");
var dayOfWeek = moment().format('dddd');
var dateAndTime = moment().format('MMMM Do YYYY');
currentDay.text(dayOfWeek + " - ");
currentDay.append(dateAndTime);