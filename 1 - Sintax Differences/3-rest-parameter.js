/**
 * Created by maiquel on 07/12/16.
 */

(function () {
	"use strict";

	/*******************************************************************************************
	 * The rest parameter is used to capture a variable number of the function arguments from within a function.
	 * *****************************************************************************************/

	/* old mode */
	function myFunction(a, b) {
		var args = Array.prototype.slice.call(arguments,
			myFunction.length);
		console.log(args);
	}
	myFunction(1, 2, 3, 4, 5); 									//Output "3, 4, 5"


	/* the new mode */
	function myNewFunction(a, b, ...args)
	{
		console.log(args); 										//Output "3, 4, 5"
	}
	myNewFunction(1, 2, 3, 4, 5);
	/*******************************************************************************************/

	//The arguments object is not an array object. Therefore, to do array operations on the arguments object, you need to
	//convert it to an array. As the ES6 rest parameter is an array type, it's easier to work with it.

}());