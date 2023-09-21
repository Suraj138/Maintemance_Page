 // Set the date and time for the countdown
 const countdownDate = new Date("2023-09-25 00:00:00").getTime();

 // Update the countdown every 1 second
 const x = setInterval(function() {
     const now = new Date().getTime();
     const distance = countdownDate - now;

     // Calculate days, hours, minutes, and seconds
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Update the HTML elements with the countdown values
     document.getElementById("day").innerHTML = days;
     document.getElementById("hour").innerHTML = hours;
     document.getElementById("minute").innerHTML = minutes;
     document.getElementById("second").innerHTML = seconds;

     // If the countdown is over, display a message
     if (distance < 0) {
         clearInterval(x); // Stop the countdown
         document.querySelector(".countdown").innerHTML = "Countdown expired!";
     }
 }, 1000); // Update every 1 second



// JavaScript code to toggle the newsletter popup
function toggle() {
    const newsletter = document.querySelector('.newsletter');
    newsletter.classList.toggle('active');
}

// JavaScript code to close the newsletter popup
function closeNewsletter() {
    const newsletter = document.querySelector('.newsletter');
    newsletter.classList.remove('active');
}

// Add an event listener to the "Notify Me..!" link
const notifyMeLink = document.querySelector('a[href="#"]');
if (notifyMeLink) {
    notifyMeLink.addEventListener('click', toggle);
}

// Add an event listener to the close button
const closeButton = document.querySelector('.close');
if (closeButton) {
    closeButton.addEventListener('click', closeNewsletter);
}
