// day and time displayed at the top of the page 
var currentDay = $("#currentDay");
var dayOfWeek = moment().format('dddd');
// every second the clock updates 
function runSeconds() {
    currentDay.html(moment().format('D MMMM, YYYY h:mm:ss'));
    currentDay.prepend(dayOfWeek + " - ");
}
setInterval(runSeconds, 1000);

