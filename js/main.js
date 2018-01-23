/* Portfolio function */
function toggle() {
    var x = document.getElementById("portfoliodiv");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
        x.style.visibility = "visible";
    } else {
        x.style.opacity = "0";
        x.style.visibility = "hidden";
    }
}

if(window.attachEvent) {
window.attachEvent('onload', toggle);
} else {
if(window.onload) {
    var curronload = window.onload;
    var newonload = function(evt) {
        curronload(evt);
        toggle(evt);
    };
    window.onload = newonload;
} else {
    window.onload = toggle;
}
}

/* Contact Function */
function togglecontact() {
    var x = document.getElementById("contactdiv");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
        x.style.visibility = "visible";
    } else {
        x.style.opacity = "0";
        x.style.visibility = "hidden";
    }
}

if(window.attachEvent) {
window.attachEvent('onload', togglecontact);
} else {
if(window.onload) {
    var curronload = window.onload;
    var newonload = function(evt) {
        curronload(evt);
        togglecontact(evt);
    };
    window.onload = newonload;
} else {
    window.onload = togglecontact;
}
}
/* background change function */
var toggleBg = document.getElementById('port');
var slider = document.querySelector('.codebg');

toggleBg.addEventListener('click', toggleSlider, false);

function toggleSlider(){
if (slider.classList.contains('opened')) {
    slider.classList.remove('opened');
    slider.classList.add('closed');
} else {
    slider.classList.remove('closed');
    slider.classList.add('opened');
}
}