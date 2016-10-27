// TWEENMAX ANIMATIONS

// Front page animation

var tl1 = new TimelineMax({ delay: .7 });

tl1.from('#header-photo', .8, {opacity:0});
tl1.from('#bus-name', .5, {opacity:0});
tl1.from('#reserve-button', .2, {opacity:0,y:-10});