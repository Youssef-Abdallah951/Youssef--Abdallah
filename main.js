const btnTop = document.getElementById("top-btn");

window.onscroll = function () {

if (document.documentElement.scrollTop >900) {
btnTop.style.display = "block";
} else {
btnTop.style.display = "none";
}
}
btnTop.addEventListener("click", function () {
window.scroll({
top: 0,
left: 0,
behavior: 'smooth'
});
});

const mode_toggle = document.getElementById('toggle')
const light_mode=document.getElementById('fa-sun')
const dark_mode=document.getElementById('fa-moon')
mode_toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')==true){
        light_mode.style.display = "block"
        dark_mode.style.display = "none"
    }
    else {
        light_mode.style.display="none"
        dark_mode.style.display="block"
    }
})