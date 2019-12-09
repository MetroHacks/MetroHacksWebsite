var app = document.getElementById('type-writer');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('your start in tech')
    .pauseFor(500)
    .deleteAll()
    .typeString('your next big move')
    .pauseFor(500)
    .deleteAll()
    .typeString('your idea into reality')
    .pauseFor(500)
    .start();