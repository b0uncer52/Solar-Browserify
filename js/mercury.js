"use strict";

let outputTo = function (dom) {
	let name = "mercury", year = 0, mass = 0.33, size = 4879, distance = 57.9, atmos = "unknown", satellites = 0, explores = ["none"];

	let displayString = `<br>Name: ${name} <br>Year Discovered: ${year}<br>Mass: ${mass}x10^24kg<br>Size: ${size}km<br>Distance from Sun: ${distance}million kilometers<br>Atmosphere Comp: ${atmos}<br>Satellites: ${satellites} moons<br>Explored by: `;
	for(var exp in explores) {
		displayString += `${explores[exp]} `;
	}
	dom.append(displayString);
};

module.exports = {outputTo};