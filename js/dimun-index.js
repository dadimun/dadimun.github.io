var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: '#theme-text',duration:'120%',triggerHook:0.8})
.setClassToggle( '#theme-text','fade-in')
.addTo(controller);

new ScrollMagic.Scene({triggerElement: '#view1',triggerHook:1,duration:'200%'})
.setTween("#view1-bg", {y: "30%",ease:Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: '#view1',triggerHook:0.9,duration:'200%'})
.setTween("#view1-text", {y: "20%",ease:Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: '.view2',triggerHook:'1',duration:'200%'})
.setTween("#view2-left-image-bg", {x: "5%",ease:Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: '.view2',triggerHook:'1',duration:'200%'})
.setTween("#view2-image-center img", {y: "20%",ease:Linear.easeNone})
.addTo(controller);

new ScrollMagic.Scene({triggerElement: '.view2',triggerHook:'1',duration:'200%'})
.setTween("#view2-image-right img", {y: "-40%",ease:Linear.easeNone})
.addTo(controller);

var wiping = new TimelineMax()
.fromTo(".view4",1, {x:"-100%"},{x: "0%", ease: Linear.easeNone});

new ScrollMagic.Scene({triggerElement: '#pinContainer',triggerHook:'onLeave',duration:'200%'})
.setPin('#pinContainer')
.setTween(wiping)
.addTo(controller);
