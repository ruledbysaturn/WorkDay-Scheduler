const localeSettings = {};
dayjs.locale(localeSettings);

function upTime() {
  const dateE = $('#date');
  const timeE = $('#time');
  const currDate = dayjs().format ('dddd, MMMM D, YYYY');
  const currTime = dayjs().format('hh:mm:ss A');
  dateE.text(currDate);
  timeE.text(currTime);
}
setInterval(upTime, 1000);

$(function () {
  const currHour= dayjs().format('H');

  function hourColors() {
    $('.time-block').each(function(){
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currHour);
      $(this).toggleClass('present', blockHour === currHour);
      $(this).toggleClass('future', blockHour > currHour);
    })
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
