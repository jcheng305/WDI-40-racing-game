//sanity check//
$(document).ready(function() {
  console.log("app.js is linked!");
//Action when clicking the RACE button
$('#go').click(function() {

  //build a function that checks to see if a car has won the race
  function checkIfComplete(){
    //if no motorcycle has completed the race, then change the variable to true
    //until  whichever motorcycle finishes that motorcycle will be declared as 1st
    if( isComplete === false) {
        isComplete = true;
    //otherwise the motorcycle that finishes last in this case since there are only
    // 2 motorcycles the other will finish as 2nd
    } else {
      place = 'second';
    }
  }

  //get the width of the motorcycles
  var motorcycleWidth = $('.motorcycle').width();

  //get the width of the racetrack which will tell motorcycles when to stop
  var raceTrackWidth = $(window).width() - motorcycleWidth;

  //generate a random # between 1 and 5000 milliseconds
  var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
  var raceTime2 = Math.floor( (Math.random() * 5000) + 1);

  //set flag variable to FALSE by default
  //used to check and see if the race is finished and determines winner
  var isComplete = false;

  //set flag variable to FIRST PLACE by default;
  var place = 'first';

  //this is where we're going to animate motorcycle 1
  $('#motorcycle1').animate({

    //move the motorcycle width of the racetrack
    left: raceTrackWidth
    //use racetime1 as a callback to show randomized time
    // when animation is complete create a function to check and see if the motorcycle has completed the race

  }, raceTime1, function() {
    //run the function
    checkIfComplete();
    //give some text feeback in the race info box
    $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');

    });
    $('#motorcycle2').animate({

      //move the motorcycle width of the racetrack
      left: raceTrackWidth
      //use racetime2 as a callback to show randomized time
      // when animation is complete create a function to check and see if the motorcycle has completed the race

    }, raceTime2, function(){
      //run the function
      checkIfComplete();

      //give some text feeback in the race info box
      $('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!');

      });
      //reset game after winner is declared
      $('#playAgain').click(function() {
        $('.motorcycle').css('left',0);
        $('.raceInfo span').text('');
  });
});
});
