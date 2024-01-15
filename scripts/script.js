const bannerContent = document.getElementById("bannerContent");

// setInterval(function() {}, delay in milliseconds)
// (first argument - function), (second argument - delay)  

let restartAnimation = function ()
{
    let clone = bannerContent.cloneNode(true);
    bannerContent.parentNode.replaceChild(clone, bannerContent);
}

setInterval(restartAnimation, 10000);