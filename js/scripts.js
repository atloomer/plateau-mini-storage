// Front Page Animation with Greensock

var tl1 = new TimelineMax({ delay: .7 });

tl1.from('#header-photo', .6, {opacity:0});
tl1.from('#bus-name', .6, {opacity:0,y:20,ease: Circ.easeOut});
tl1.from('#reserve-button', .6, {opacity:0,y:20,ease: Circ.easeOut},'=-.2');