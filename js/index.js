var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider"),
    advisor = document.getElementById('advisor');

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.left = slider.value+"%";
  advisor.style.right = (100 - slider.value)+"%";
}

window.onload = function() {
	moveDivisor();
};
