//Header ----------------------------------------------------
var image = document.getElementsByClassName('layer1-img');
new simpleParallax(image, {
    overflow: true,
    breakpoint: 768
});

var image = document.getElementsByClassName('layer0-img');
new simpleParallax(image, {
    overflow: true,
    delay: 0.1,
    scale: 3,
    breakpoint: 768
});

var image = document.getElementsByClassName('layer4-img');
new simpleParallax(image, {
    overflow: true,
    delay: 0.1,
    scale: 3,
    breakpoint: 768
});

var image = document.getElementsByClassName('layer3-img');
new simpleParallax(image, {
    overflow: true,
    breakpoint: 768
});

//Footer ----------------------------------------------------
var image = document.getElementsByClassName('cup');
new simpleParallax(image, {
    overflow: true,
    scale: 1.2,
    breakpoint: 768
});

var image = document.getElementsByClassName('stars');
new simpleParallax(image, {
    overflow: true,
    scale: 1.5,
    breakpoint: 768
});