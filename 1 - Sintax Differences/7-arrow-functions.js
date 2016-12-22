/**
 * Created by maiquel on 12/12/16.
 */

(function () {
	"use strict";

	/* old mode */
	var circleArea_old = function (pi, r) {
		return pi * r * r;
	};
	var result_old = circleArea_old(3.14, 3);
	console.log(result_old); //Output "28.26"


	/* the new mode */
	let circleArea = (pi, r) => {
		return pi * r * r;
	};
	console.log(circleArea(3.14, 3));


	/* when the function have just one statement */
	let circleArea2 = (pi, r) => pi * r * r;
	console.log(circleArea2(3.14, 3));


	/* Comparing scopes */
	console.log("\n##Comparing scopes\n" +
		"normal functions:");
	var object = {
		f1: function () {
			console.log(this);						//this is f1
			var f2 = function () {
				console.log(this);					//this is window
			};
			f2();
			setTimeout(f2, 1000);					//this is window
		}
	};
	object.f1();

	console.log("\n arrow functions:");
	let object2 = {
		f1: () => {
			console.log(this);						//this is window
			let f2 = () => {
				console.log(this);					//this is window
			};
			f2();
			setTimeout(f2, 1000);					//this is window
		}
	};
	object2.f1();

	/*
	* The arrow functions cannot be used as object constructors that is, the new operator cannot be applied on them.
	 Apart from syntax, the this value, and the new operator, everything else is the same between the arrow and traditional
	 functions, that is, they both are the instances of the Function constructor.
	* */

}());