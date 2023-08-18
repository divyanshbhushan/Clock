console.clear()
// Go to FullScreen
function toggleFullscreen() {
    let navbar = document.querySelector('.navbar')
    let fullScreenToggler = document.getElementById('fullScreenToggler')

    if (fullScreenToggler.classList.contains('bg_fullscreen')) {
        if (window.document.body.requestFullscreen) {
            window.document.body.requestFullscreen();
        } else if (window.document.body.webkitRequestFullscreen) {
            window.document.body.webkitRequestFullscreen();
        } else if (window.document.body.msRequestFullscreen) {
            window.document.body.msRequestFullscreen();
        }
        fullScreenToggler.classList.replace('bg_fullscreen' , 'bg_fullscreen_exit')
        fullScreenToggler.style.opacity = .2
        navbar.style.display = "none"
    }
    else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
            else if(document.msexitFullscreen) {
                document.msexitFullscreen();
            }
            else if(document.mozexitFullscreen) {
                document.mozexitFullscreen();
            }
            else if(document.webkitexitFullscreen) {
                document.webkitexitFullscreen();
            }
            fullScreenToggler.classList.replace('bg_fullscreen_exit' , 'bg_fullscreen')
            navbar.style.display = "flex"
            fullScreenToggler.style.opacity = 1
    }
}

setInterval(function(){
    let currentTime = new Date;
    let seconds = currentTime.getSeconds()
    let minutes = currentTime.getMinutes()
    let hours = currentTime.getHours()
    let date = currentTime.getDate()
    let day = currentTime.getDay()
}, 1000);