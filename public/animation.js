function animateClouds() {
	$('.cloud').show();
}

function animateRain() {
	// number of drops created.
	var dropsNum = 1000; 
	// generate a random number range.
	function randRange( minNum, maxNum) {
	  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
	}
 
    for( i=1;i<dropsNum;i++) {
    var dropLeft = randRange(0,1600);
    var dropTop = randRange(-1000,1400);
 
    $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
    $('#drop'+i).css('left',dropLeft);
    $('#drop'+i).css('top',dropTop);
    }

    $('.rain').show();

}

function animateClear() {
	$('.sun').show();
}

function animateHaze() {

}

function animateMis() {

}

