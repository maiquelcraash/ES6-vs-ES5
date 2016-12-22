/**
 * Created by maiquel on 07/12/16.
 */

(function () {
	"use strict";

	/*******************************************************************************************
	 * Escope diferences
	 * *****************************************************************************************/

	var a = 12; 										//accessible globally
	function myFunction() {
		console.log(a);
		var b = 13; 									//accessible throughout function
		if (true) {
			var c = 14; 								//accessible throughout function
			let d = 15;
			console.log(b);
			console.log(d);								//works only in this if scope
		}
		console.log(c);
		console.log(d);									//inaccessible, doesn't works
	}

	myFunction();
	/*******************************************************************************************/


	/*******************************************************************************************
	 * Re-declaring diferences
	 * *****************************************************************************************/

	/* Using Var */
	var a = 0;
	var a = 1;											//Overrides
	console.log(a);
	function myFunction2() {
		var b = 2;
		var b = 3;										//Overrides
		console.log(b);
	}
	myFunction2();

	/* Using Let */
	let a = 0;
	let a = 1; 											//TypeError
	function myFunction3()
	{
		let b = 2;
		let b = 3; 										//TypeError
		if(true) {
			let c = 4;
			let c = 5; 									//TypeError
		}
	}
	myFunction3();

	/* Using both in scopes */
	var a = 1;
	let b = 2;
	function myFunction()
	{
		var a = 3; 										//different variable because different function scope
		let b = 4; 										//different variable
		if(true) {
			var a = 5; 									//overwritten
			let b = 6; 									//different variable
			console.log(a);
			console.log(b);
		}
		console.log(a);
		console.log(b);
	}
	myFunction();
	console.log(a);
	console.log(b);

	/*******************************************************************************************/
}());