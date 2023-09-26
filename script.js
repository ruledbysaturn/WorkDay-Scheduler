const localeSettings = {};
dayjs.locale(localeSettings);

//displays current date and time on the app
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
//adds the colors to the time blocks
function hourColors() {
  $('.time-block').each(function(){
    const blockHour = parseInt($(this).attr('id').split('hour')[1]);
    console.log(blockHour, currHour)
    if (blockHour < currHour){
      $(this).addClass('past');
    }
    else if (blockHour == currHour){
      $(this).removeClass('past');
      $(this).addClass('present');
    }
    else {
     $(this).addClass('future');
    }
      
    });
  }
  //when save button is clicked, saves to local storage

  function scheduleEntry() {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }
  //keeps schedule entries on the time blocks upon refreshing page (only if saved to local storage)
  $('.time-block').each(function(){
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  })
  hourColors();
  scheduleEntry();
});
