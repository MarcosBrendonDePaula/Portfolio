// constants
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const menu_mobile = document.querySelector("#menu_mobile")
const progress_indicator = document.querySelector("#progress-indicator") 
const sections = document.querySelectorAll("section") 



function switch_menu() {
    menu_mobile.classList.toggle("display_none")
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}



// events
window.addEventListener("scroll", function() {
    progress_indicator.style.marginLeft = Math.min(Math.max(getScrollPercent()-1,2),95)+"%";
})
