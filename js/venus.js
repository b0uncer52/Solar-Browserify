"use strict";

let outputTo = function (dom) {
	let name = "Venus", year = 0, mass = 4.87, size = 12104, distance = 108, atmos = "pending", satellites = 0, explores = ["me and my rocketship", "you and yours"];

	let displayString = `<br>Name: ${name} <br>Year Discovered: ${year}<br>Mass: ${mass}x10^24kg<br>Size: ${size}km<br>Distance from Sun: ${distance}million kilometers<br>Atmosphere Comp: ${atmos}<br>Satellites: ${satellites} moons<br>Explored by: `;
	for(var exp in explores) {
		displayString += `${explores[exp]} `;
	}
	dom.append(displayString);
};

module.exports = {outputTo};