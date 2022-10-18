// Imports
///////////////////////////////////////////////////////////////////////////////////////



// Helpers *****************************************************
///////////////////////////////////////////////////////////////////////////////////////

if (window.matchMedia('(hover: hover)').matches) {
  document.body.classList.add('hover');
}

var getNextSibling = function (elem, selector) {
	// Get the next sibling element
	var sibling = elem.nextElementSibling;
	// If there's no selector, return the first sibling
	if (!selector) return sibling;
	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling
	}
};

var getPreviousSibling = function (elem, selector) {

	// Get the next sibling element
	var sibling = elem.previousElementSibling;

	// If there's no selector, return the first sibling
	if (!selector) return sibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.previousElementSibling;
	}

};

var getSiblings = function (elem) {
	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
// As above just calculates from the top
var isInViewportTop = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.bottom >= 0 &&
    distance.left >= 0 &&
    distance.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// when scrolling lets not kill the processor
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}


// Navigation *****************************************************
///////////////////////////////////////////////////////////////////////////////////////


function distanceScrolled() {
  if (pageYOffset > 32) {
    document.body.classList.add("hideNav");
  } else {
    document.body.classList.remove("hideNav");
  }
}

function nextSection() {
  if(document.getElementById('nextButton')) {
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener("click", function () {
      let closestParent = nextButton.closest('.shopify-section');
      let nextParent = getNextSibling(closestParent);
      nextParent.scrollIntoView();
    });
  }
}

function viewport() {
  window.addEventListener("scroll", throttle(distanceScrolled, 10));
}

function loaded() {
  window.addEventListener('load', (event) => {
    document.body.classList.add('loaded');
    setTimeout(function() {
      document.body.classList.remove('loading');
    }, 1);
  });
}
function loadeded() {
    if(document.body.classList.contains('loading')) {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    }
}

function bodyCloser() {
  const body = document.getElementById('swup');
  const nav = document.getElementById('accessibleNav');
  const heeder = document.querySelector('.site-header');
  const button = document.getElementById('menuTrigger');
  
  if (heeder.classList.contains('nav-out')) {
    body.addEventListener("click", function () {
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
    }, false);
    nav.addEventListener("click", function (ev) {
        
        ev.stopPropagation(); 
    }, false);
  }
}

function closeNav() {
  const nav = document.getElementById("accessibleNav");
  const button = document.getElementById('menuTrigger');
  const heeder = document.querySelector('.site-header');
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');

}

function mobNavigation() {
  const nav = document.getElementById("accessibleNav");
  const button = document.getElementById('menuTrigger');
  const heeder = document.querySelector('.site-header');
  // const searchToggle= document.getElementById('searchToggle');
  // const headerSearch= document.getElementById('headerSearch');
  // const mobSearchClose= document.getElementById('mobSearchClose');
  
  button.addEventListener('click', function (){
    if (nav.classList.contains('active')) {
      button.classList.remove('nav-open');
      nav.classList.remove('active');
      heeder.classList.remove('nav-out');
    } else {
      button.classList.add('nav-open');
      nav.classList.add('active');
      heeder.classList.add('nav-out');
      bodyCloser();
    }
  });
  
}

function setNavigation() {
  var nav = document.getElementById("SiteNav"),
  anchor = nav.getElementsByTagName("a"),
  current = window.location;
  
  // console.log("anchor = ",anchor,"current = ",current);
  
  for (var i = 0; i < anchor.length; i++) {
  if(anchor[i].href == current) {
    anchor[i].className = "site-nav--active";
  } else {
    anchor[i].className = "site-nav--not_active";
  }
  
  }
  
}

// account pages stuff
function accounts() {
  if(document.getElementById('RecoverPassword')) {
    let RecoverPassword = document.getElementById('RecoverPassword');
    let HideRecoverPasswordLink = document.getElementById('HideRecoverPasswordLink');
    let CustomerLoginForm = document.getElementById('CustomerLoginForm');
    let RecoverPasswordForm = document.getElementById('RecoverPasswordForm');
    
    RecoverPassword.addEventListener('click', function() {
      console.log("yay clicked");
      CustomerLoginForm.classList.add('hide');
      RecoverPasswordForm.classList.remove('hide');
    });
    
    HideRecoverPasswordLink.addEventListener('click', function() {
      console.log("yay clicked");
      RecoverPasswordForm.classList.add('hide');
      CustomerLoginForm.classList.remove('hide');
    });
  }
}

function accordions() {
  if (document.getElementById('accordionGroup')) {
    console.log("hello Accordions");
    document.querySelectorAll('.Accordion h3 button').forEach( function(trigger) {
      trigger.addEventListener('click', function () {
        
        let targetSection = trigger.getAttribute('aria-controls');
        
        let theSection = document.getElementById(targetSection);
        
        if(trigger.getAttribute('aria-expanded') == 'true') {
          console.log("tis true");
          trigger.setAttribute('aria-expanded', 'false');
          theSection.setAttribute('hidden', 'true');
        } else {
          console.log("tis false");
          trigger.setAttribute('aria-expanded', 'true');
          theSection.removeAttribute('hidden');
        }
        
      });
    });
  }
}

let cartToggle= document.getElementById('cartToggle');
let closeCartx= document.getElementById('closeCartx');
let closeCart= document.getElementById('closeCart');
let sideCart= document.getElementById('sidecart');

cartToggle.addEventListener('click', function (event){
  if (cartToggle.classList.contains('active')) {
    cartToggle.classList.remove('active');
    sideCart.classList.remove('active');
    document.body.classList.remove("sidecart-active");
    setTimeout(function() {
      sideCart.classList.remove('alive');
    }, 500);
  } else {
    cartToggle.classList.add('active');
    document.body.classList.add("sidecart-active");
    sideCart.classList.add('alive');
    setTimeout(function() {
      sideCart.classList.add('active');
    }, 50);
  }
 event.preventDefault();
});

closeCartx.addEventListener('click', function (event){
  if (sideCart.classList.contains('active')) {
    sideCart.classList.remove('active');
    document.body.classList.remove("sidecart-active");
    setTimeout(function() {
      sideCart.classList.remove('alive');
    }, 500);
  }
});
closeCart.addEventListener('click', function (event){
  if (sideCart.classList.contains('active')) {
    sideCart.classList.remove('active');
    document.body.classList.remove("sidecart-active");
    setTimeout(function() {
      sideCart.classList.remove('alive');
    }, 500);
  }
});


// Swup *****************************************************
///////////////////////////////////////////////////////////////////////////////////////

// Initial functions
function init() {
  console.log("scripts init");
  if(document.querySelector('.account_area')) {
    accounts();
   //  toggleAddress();
  }
  viewport();
  distanceScrolled();
  loaded();

  setNavigation();
  mobNavigation();

  nextSection();
  accordions();
}


function unload() {
  closeNav();
}

// run once 
init();

