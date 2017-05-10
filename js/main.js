"use strict";

let earth = require('./earth'), venus = require('./venus'), mercury = require('./mercury'), saturn = require('./saturn'), jupiter = require('./jupiter'), uranus = require('./uranus'), mars = require('./mars'), neptune = require('./neptune');
let outputTo = require('./outputTo');
let planets = {earth, venus, mercury, saturn, jupiter, uranus, mars, neptune};

let dom = $("#display");

for(var planet in planets) {
	console.log(planets[planet]);
	outputTo(planets[planet]);
	dom.append(`<hr>`);
}