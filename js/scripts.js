// Front Page Animation with Greensock

var tl1 = new TimelineMax({ delay: .4 });

tl1.from('#header-photo', .8, {opacity:0});
tl1.from('#bus-name', .9, {opacity:0,y:15,ease: Power4.easeOut});
tl1.from('#reserve-button', .9, {opacity:0,y:15,ease: Power4.easeOut},'=-.85');
