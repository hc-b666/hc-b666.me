const bannerContent = document.getElementById("bannerContent");
const contactMeForm = document.getElementById("contactMeForm");
const btnContactMe = document.getElementById("btnContactMe");
const btnContactClose = document.getElementById("btnContactClose");

// setInterval(function() {}, delay in milliseconds)
// (first argument - function), (second argument - delay)  

let restartAnimation = function ()
{
    let clone = bannerContent.cloneNode(true);
    bannerContent.parentNode.replaceChild(clone, bannerContent);
}

setInterval(restartAnimation, 10000);

// Functions for Opening and Closing Contact Forms
function showContactForms () 
{
    contactMeForm.style.display = "inline-block";
}

function closeContactForms () 
{
    contactMeForm.style.display = "none";
}

btnContactMe.onclick = showContactForms;
btnContactClose.onclick = closeContactForms;