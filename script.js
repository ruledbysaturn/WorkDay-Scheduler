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
        $(this).removeClass('present');
        $(this).removeClass('future');
      }
      else if (blockHour === currHour){
        $(this).removeClass('past');
        $(this).addClass('present');
        $(this).removeClass('future');
      }
      else {
        $(this).removeClass('present');
        $(this).addClass('future');
        $(this).removeClass('past');
      }
      
    });
  }
  function scheduleEntry() {
    $('.saveBtn').on('click'), function () {
      const hour = $(this).parent().attr('id');
      const text = $(this).siblings('.description').val();
      localStorage.setItem(hour, text);    }

  };
  hourColors();
  scheduleEntry();
});
