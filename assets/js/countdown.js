// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2017 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Test the results in case it's 0. If it's, then don't show
    if(days != 0) {
        document.getElementById("days").innerHTML = days+"d";
    }
    if(hours != 0) {
        document.getElementById("hours").innerHTML = hours+"h";
    }
    if(minutes != 0) {
        document.getElementById("minutes").innerHTML = minutes+"m";
    }
    if(seconds != 0) {
        document.getElementById("seconds").innerHTML = seconds+"s";
    }
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Começou!";
    }
}, 1000);