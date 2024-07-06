function updateCountdown() {
    // Set the date we're counting down to
    const countDownDate = new Date("July 1, 2024 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
    const timeContainer = document.getElementById('time-container');
    const clockIcon = document.getElementById('clock-icon');
    const timeOfCullf = document.getElementById('time-of-cullf');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        // Move the container down with the scroll
        timeContainer.style.transform = `translateY(${scrollY}px)`;

        if (scrollY > 0) {
            clockIcon.classList.add('hidden');
            timeOfCullf.classList.remove('hidden');
        } else {
            clockIcon.classList.remove('hidden');
            timeOfCullf.classList.add('hidden');
        }
    });
});
