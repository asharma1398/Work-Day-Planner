// day and time displayed at the top of the page 
var currentDay = $("#currentDay");
var dayOfWeek = moment().format('dddd');
// every second the clock updates 
function runSeconds() {
    currentDay.html(moment().format('D MMMM, YYYY h:mm:ss'));
    currentDay.prepend(dayOfWeek + " - ");
}
setInterval(runSeconds, 1000);

// push to local storage 
$(".saveBtn").on("click", function() {
    var sib = $(this).siblings("textarea").attr("id") // id of textarea (hour)
    var toDo = $(this).siblings("textarea").val().trim(); // value user typed
    localStorage.setItem(sib, toDo) // store (id,val) pair to local storage
});

// retrieve from local storage 
function runRetrieveStorage() {
    
    // looping through work day hours 
    for (var i = 9; i < 18; i++) {
        // content contains val for each work day time 
        var content = localStorage.getItem(i.toString());
        // setting val to textarea id 
        $("#" + i.toString()).val(content)
    }
}
runRetrieveStorage();

// clear the page of content
$(".clear").on("click", function () {
    localStorage.clear(); // clear items on page
    location.reload(); // reload page
})

// deciphering between past, present and future time 
var hourNow = moment().format('h'); // current hour
var hourNowInt = parseInt(hourNow); // hour as int
var description = document.getElementsByClassName("description col-sm-8");

// comparing the current hour to the number id associated with each time block
for (var i = 0; i < description.length; i++) {
    
    // present time gets color red 
    if (hourNowInt == parseInt(description[i].getAttribute("id"))) {
        $("#" + description[i].getAttribute("id")).addClass("present");
    } 
    // future time gets color green
    else if (hourNowInt < parseInt(description[i].getAttribute("id"))) {
        $("#" + description[i].getAttribute("id")).addClass("future");
    }
    // past time gets color gray 
    else {
        $("#" + description[i].getAttribute("id")).addClass("past");
    }
}