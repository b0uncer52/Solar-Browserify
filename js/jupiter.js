"use strict";


let outputTo = function (dom) {
	let name = "jupiter", year = 1610, mass = 1898, size = 142984, distance = 778, atmos = "unknown", satellites = 67, explores = ["none"];

	let displayString = `<br>Name: ${name} <br>Year Discovered: ${year}<br>Mass: ${mass}x10^24kg<br>Size: ${size}km<br>Distance from Sun: ${distance}million kilometers<br>Atmosphere Comp: ${atmos}<br>Satellites: ${satellites} moons<br>Explored by: `;
	for(var exp in explores) {
		displayString += `${explores[exp]} `;
	}
	dom.append(displayString);
};

module.exports = {outputTo};