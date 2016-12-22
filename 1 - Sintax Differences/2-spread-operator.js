/**
 * Created by maiquel on 07/12/16.
 */

(function () {
	"use strict";

	/*******************************************************************************************
	 * Array as parameters
	 * *****************************************************************************************/

	/* old mode, passing an array as individual params, using apply */
	function myFunction(a, b) {
		return a + b;
	}

	var data = [1, 4];
	var result = myFunction.apply(null, data);				//the first param is the context (the "this") for the function
	console.log(result); 									//Output "5"
	/* Here, the apply method takes an array, extracts the values, passes them as individual arguments to the function, and then calls it. */


	/* the new mode */
	function myNewFunction(a, b) {
		return a + b;
	}

	let data2 = [1, 4];
	let result2 = myNewFunction(...data2);
	console.log(result2); //Output "5"


	let array1 = [2, 3, 4];
	let array2 = [1, ...array1, 5, 6, 7];
	console.log(array2); //Output "1, 2, 3, 4, 5, 6, 7"
	/*******************************************************************************************/


	/*******************************************************************************************
	 * Making array values a part of another array
	 * *****************************************************************************************/

	let array1 = [2, 3, 4];
	let array2 = [1, ...array1, 5, 6, 7];
	console.log(array2); //Output "1, 2, 3, 4, 5, 6, 7"
	/*******************************************************************************************/


	/*******************************************************************************************
	 * Pushing the values of an array into another array
	 * *****************************************************************************************/

	/* old mode */
	var array3 = [2, 3, 4];
	var array4 = [1];
	Array.prototype.push.apply(array4, array3);
	console.log(array4); //Output "1, 2, 3, 4"

	/* the new mode */
	let array3 = [2, 3, 4];
	let array4 = [1];
	array4.push(...array3);
	console.log(array4); //Output "1, 2, 3, 4"
	/*******************************************************************************************/


	/*******************************************************************************************
	 * Spreading multiple arrays
	 * *****************************************************************************************/

	let array1 = [1];
	let array2 = [2];
	let array3 = [...array1, ...array2, ...[3, 4]];			//multi array spread
	let array4 = [5];

	function myFunction(a, b, c, d, e) {
		return a + b + c + d + e;
	}

	let result = myFunction(...array3, ...array4); 			//multi array spread
	console.log(result); 									//Output "15"

	/*******************************************************************************************/


}());