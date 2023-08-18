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
    let currentSecond = currentTime.getSeconds()
    let currentMinute = currentTime.getMinutes();
    let currentHour = currentTime.getHours();
    let currentDate = currentTime.getDate();
    let currentDay = currentTime.getDay();
    let currentMonth = currentTime.getMonth();
    let currentYear = currentTime.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    currentMonth = monthNames[currentMonth]

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    currentDay = dayNames[currentDay]
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
    
    // Customizations in Showing Time

    //Changing Clock Type
    let clockType = document.getElementById('clockType');
    let twelveHrClock = document.getElementById('12hrClock');
    let twentryFourHrClock = document.getElementById('24hrClock');
    //  Main Clock Logic
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
        am_pm.style.display = "inline"
         if(currentHour == 12){
            currentHour =  12;
            am_pm.innerHTML = " PM";
        }
        else if(currentHour == 24){
            currentHour =  currentHour - 12;
            am_pm.innerHTML = " AM";
        }
        else if(currentHour > 12){
            currentHour = currentHour - 12;
            am_pm.innerHTML = " PM";
        }
        else{
            am_pm.innerHTML = " AM";
        }
    } 
    else if(clockType.classList.contains('24hr')) {
        currentHour = currentTime.getHours();
        am_pm.style.display = "none";
    };

    // Adding 0 if second is >10
    if(currentSecond < 10){
        currentSecond = `0${currentSecond}`
    }
    else{
        currentSecond = currentTime.getSeconds();
    };
    // Adding 0 if minute is >10
    if(currentMinute < 10){
        currentMinute = `0${currentMinute}`;
    }
    else{
        currentMinute = currentTime.getMinutes();
    };
    // Adding Time to DOM
    hours.innerHTML = `${currentHour}`;
    minutes.innerHTML = `${currentMinute}`;
    seconds.innerHTML = `${currentSecond}`;
    date.innerHTML = `${currentDate}`;
    day.innerHTML = `${currentDay}`;
    month.innerHTML = `${currentMonth}`;
    year.innerHTML = `${currentYear}`;


}, 1000);