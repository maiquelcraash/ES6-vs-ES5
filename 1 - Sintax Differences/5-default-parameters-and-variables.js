/**
 * Created by maiquel on 07/12/16.
 */

(function () {
	"use strict";


	/* old mode, set the default value manually */
	function myFunction(x, y, z) {
		x = x === undefined ? 1 : x;
		y = y === undefined ? 2 : y;
		z = z === undefined ? 3 : z;
		console.log(x, y, z); //Output "6 7 3"
	}

	myFunction(6, 7);


	/* new mode, set default directly on the parameters */
	function myNewFunction(x = 1, y = 2, z = 3 + 5) {
		console.log(x, y, z); 							// Output "6 7 8"
	}

	myNewFunction(6, 7);								//last param omitted
	myNewFunction(undefined, 6, 7);						//first param omitted
	myNewFunction(null, 6, 7);							//null is a valid param

	/* using array variables */
	let [a, b, c = 3] =  [1, 2];						//"c" saves the "3" default value, only if he is omitted
	console.log("\n" +
		"##array default values:\n" +
		"a = " + a + "\n" +
		"b = " + b + "\n" +
		"c = " + c);

	function myFunction2([a, b, c = 3] = [1, 2, 3])		//if no array is in parameter, the use the default array
	{
		console.log(a, b, c);  							//Output "1 2 3"
	}
	myFunction2(undefined);								//undefined param

}());