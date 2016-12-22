/**
 * Created by maiquel on 07/12/16.
 */

(function () {
	"use strict";

	/* old mode */
	var myArray = [1, 2, 3];
	var a = myArray[0];
	var b = myArray[1];
	var c = myArray[2];


	/* the new mode */
	let myArray2 = [1, 2, 3];
	let e, f, g;
	[e, f, g] = myArray2; 					//array destructuring assignment syntax

	console.log(a + b + c + e + f + g);		//12

	let[x, , y] = myArray2;					//direct assignment and ignore an element
	console.log(x + y);						//4

	let [h, ...i] = myArray2;				//save the first element to the "h" variable, and save the rest array to "i"

	console.log(h + " -> first element");
	console.log(i + " -> rest");
}());