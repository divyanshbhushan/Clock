console.clear();
// Go to FullScreen
function toggleFullscreen() {
    let navbar = document.querySelector('.navbar');
    let fullScreenToggler = document.getElementById('fullScreenToggler');

    if (fullScreenToggler.classList.contains('bg_fullscreen')) {
        if (window.document.body.requestFullscreen) {
            window.document.body.requestFullscreen();
        } else if (window.document.body.webkitRequestFullscreen) {
            window.document.body.webkitRequestFullscreen();
        } else if (window.document.body.msRequestFullscreen) {
            window.document.body.msRequestFullscreen();
        }
        fullScreenToggler.classList.replace('bg_fullscreen', 'bg_fullscreen_exit');
        fullScreenToggler.style.opacity = .2;
        navbar.style.display = "none";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msexitFullscreen) {
            document.msexitFullscreen();
        } else if (document.mozexitFullscreen) {
            document.mozexitFullscreen();
        } else if (document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
        fullScreenToggler.classList.replace('bg_fullscreen_exit', 'bg_fullscreen');
        navbar.style.display = "flex";
        fullScreenToggler.style.opacity = 1;
    }
};

// Main Logic
setInterval(function () {
    // Time Variables
    let currentTime = new Date;
    let currentSecond = currentTime.getSeconds();
    let currentMinute = currentTime.getMinutes();
    let currentHour = currentTime.getHours();
    let currentDate = currentTime.getDate();
    let currentDay = currentTime.getDay();
    let currentMonth = currentTime.getMonth();
    let currentYear = currentTime.getFullYear();

    //DOM Variables
    //Showing Time
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let am_pm = document.querySelector('.am_pm');
    let date = document.querySelector('.date');
    let day = document.querySelector('.day');
    let month = document.querySelector('.month');
    let year = document.querySelector('.year');
    //Customs
    let clockType = document.getElementById('clockType');
    let twelveHrClock = document.getElementById('12hrClock');
    let twentryFourHrClock = document.getElementById('24hrClock');

    twentryFourHrClock.addEventListener('click', () => {
        clockType.innerHTML = "Clock Type: 24 Hour";
        clockType.classList.replace('12hr', '24hr');
    });

    twelveHrClock.addEventListener('click', () => {
        clockType.innerHTML = "Clock Type: 12 Hour";
        clockType.classList.replace('24hr', '12hr');
    });
    
    // Changing Hours as per clock Type
    if (clockType.classList.contains('12hr')) {
         if(currentHour == 12){
            currentHour =  12
            am_pm.innerHTML = "pm"
        }
        else if(currentHour > 12){
            currentHour = currentHour - 12;
            am_pm.innerHTML = "am"
        }
        else{
            currentHour
            am_pm.innerHTML = "pm"
        }
    } 
    else if(clockType.classList.contains('24hr')) {
        currentHour = currentTime.getHours()
        am_pm.style.display = "none"
    }
}, 1000);