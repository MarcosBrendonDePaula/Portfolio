var menu_mobile = document.querySelector("#menu_mobile")
function switch_menu() {
    menu_mobile.classList.toggle("display_none")
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}
  
function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}


var progress_indicator = document.querySelector("#progress-indicator") 
let sections = document.querySelectorAll("section") 

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

window.addEventListener("scroll", function() {
    progress_indicator.style.marginLeft = Math.min(Math.max(getScrollPercent()-1,2),90)+"%";
})
