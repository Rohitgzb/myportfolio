var count = 0;
const heroAnimations = () => {
  	setTimeout(heroAnimations, 6000);
    const heroImage = document.querySelectorAll('.slider__image'),
          heroDetails = document.querySelectorAll('.slider__details'),
          heroDetailsBackground = document.querySelector('.slider__background--front'),
          heroNavDot = document.querySelectorAll('.slider__navigation--dot');
    for (var i=0; i<heroImage.length; i++) {
        heroImage[i].setAttribute('style', 'opacity: 0');
    }
    for (var i=0; i<heroDetails.length; i++) {
        heroDetails[i].setAttribute('style', 'opacity: 0');
    }
    for (i=0; i<heroNavDot.length; i++) {
		heroNavDot[i].setAttribute('style', 'background:orange');
	} 
    count++;
    if (count > heroImage.length) {
        count = 1;
   	}
    heroImage[count-1].setAttribute('style', 'opacity: 1');
    heroImage[count-1].style.animation = 'slideInLeft 6s infinite';
    heroDetails[count-1].setAttribute('style', 'opacity: 1');
    heroDetails[count-1].style.animation = 'fadeIn .5s forwards, fadeOut .5s 4.5s forwards';
    heroDetailsBackground.style.animation = 'slideInAndOut 6s infinite forwards';
    heroNavDot[count-1].setAttribute('style', 'background: black');
}
heroAnimations();

var skillPers = document.querySelectorAll(".skill-per");
    
skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; 
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }1
  }
  window.requestAnimationFrame(animate);
   
});


function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if(progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  }
  
  animateNumber(value => {
    document.querySelector('.number').textContent = Math.floor(value);
  }, 0, 5, 5000);
