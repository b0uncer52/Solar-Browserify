"use strict";

let earth = require('./earth'), venus = require('./venus'), mercury = require('./mercury'), saturn = require('./saturn'), jupiter = require('./jupiter'), uranus = require('./uranus'), mars = require('./mars'), neptune = require('./neptune');

let planets = {earth, venus, mercury, saturn, jupiter, uranus, mars, neptune};

let dom = $("#display");

// earth.outputTo(dom);
// mars.outputTo(dom);
// venus.outputTo(dom);
// mercury.outputTo(dom);
// neptune.outputTo(dom);
// jupiter.outputTo(dom);
// uranus.outputTo(dom);
// saturn.outputTo(dom);

for(var planet in planets) {
	planets[planet].outputTo(dom);
	dom.append(`<hr>`);
}