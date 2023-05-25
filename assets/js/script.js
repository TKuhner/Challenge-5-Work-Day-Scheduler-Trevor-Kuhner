// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO:
// Add a listener for click events on the save button. 
// This code should use the id in the containing time-block as a key to save the user input in local storage. 
// HINT: What does `this` reference in the click listener function? 
// How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
// How might the id be useful when saving the description in local storage?
// TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
// HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
// How can Day.js be used to get the current hour in 24-hour time?
// TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
// HINT: How can the id attribute of each time-block be used to do this?
// TODO: Add code to display the current date in the header of the page.


// Get date and time 
var today = dayjs(); 

// Get the save button element
var saveBtn = document.querySelector(".saveBtn"); 

// Get all time block elements
var hoursEl = document.querySelectorAll(".time-block"); 



window.onload = function () {
  // Load stored data from local storage and populate the text areas
  for (var i = 0; i < localStorage.length; i++) {
    var pulledData = localStorage.key(i);
    $("#" + pulledData).children(".description").val(localStorage.getItem(pulledData));
  };

  // Iterate through each time block element to add appropriate classes based on the current hour
  for (var i = 0; i < hoursEl.length; i++) {
    var hourId = $(hoursEl[i]).attr("id");
    hourId = hourId.split("-")[1];

    if (today.hour() > hourId) {
      // Add 'past' class for time blocks in the past
      $(hoursEl[i]).children(".description").addClass("past"); 
    }

    // Add 'present' class for the current time block
    else if (today.hour() == hourId) {
      $(hoursEl[i]).children(".description").addClass("present"); 
    } 

     // Add 'future' class for time blocks in the future
    else if (today.hour() < hourId) {
      $(hoursEl[i]).children(".description").addClass("future");
    }

    // debugging statements 
    // console.log("hourId is " + hourId);
    // console.log("current hour is " + today.hour());
    // console.log(today.hour() + 1);
  }
}

// Display the current date and time in header
$('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));

// Save textarea input to local storage when save button class clicked
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);

  // debugging statement 
  // console.log(text, time);
});

// Clear local storage
$("#clearStorageBtn").on("click", function () {
  localStorage.clear();
});