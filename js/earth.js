"use strict";


let outputTo = function (dom) {
	let name = "Earth", year = 0, mass = 5.97, size = 12756, distance = 149, atmos = "oxygen: 1, nitrogen: 3", satellites = 1, explores = ["N/A"];


	let displayString = `<br>Name: ${name} <br>Year Discovered: ${year}<br>Mass: ${mass}10^24kg<br>Size: ${size}km<br>Distance from Sun: ${distance}million kilometers<br>Atmosphere Comp: ${atmos}<br>Satellites: ${satellites} moons<br>Explored by: `;
	for(var exp in explores) {
		displayString += `${explores[exp]} `;
	}
	dom.append(displayString);
};

module.exports = {outputTo};