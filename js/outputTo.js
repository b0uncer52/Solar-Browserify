"use strict";

let outputTo = function (planet) {
	let dom = $("#display");
	let displayString = `<br>Name: ${planet.name} <br>Year Discovered: ${planet.year}<br>Mass: ${planet.mass}x10^24kg<br>Size: ${planet.size}km<br>Distance from Sun: ${planet.distance}million kilometers<br>Atmosphere Comp: ${planet.atmos}<br>Satellites: ${planet.satellites} moons<br>Explored by: `;
	for(var exp in planet.explores) {
		displayString += `${planet.explores[exp]} `;
	}
	dom.append(displayString);
};

module.exports = outputTo;