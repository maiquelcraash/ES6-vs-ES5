/**
 * Created by maiquel on 12/12/16.
 */

/* binary notation */
{
	let a = 0b00001111;								//binary notation, add "0b" prefix
	let b = 15;
	console.log(a === b);							//true
	console.log(a);									//15
}

/* octal notation */
{
	let a = 0o17;									//octal notation, add "0o" prefix
	let b = 15;
	console.log(a === b);							//true
	console.log(a);									//15
}

/* Number.isInteger method
 * OBS: In javascript, all numbers are stored in a 64bit memory space
 * */
{
	console.log("\n##Number.isInteger:");
	let a = 17.0;
	let b = 1.2;
	console.log(Number.isInteger(a));				//true
	console.log(Number.isInteger(b));				//false
}

/* Number.isNaN is different that isNaN global fuction */
{
	console.log("\n##Number.isNaN:");
	let a = "NaN";
	let b = NaN;
	let c = "hello";
	let d = 12;
	console.log(Number.isNaN(a));					//false
	console.log(Number.isNaN(b));					//true
	console.log(Number.isNaN(c));					//false
	console.log(Number.isNaN(d));					//false
	console.log(isNaN(a));							//true
	console.log(isNaN(b));							//true
	console.log(isNaN(c));							//true
	console.log(isNaN(d));							//false
}

/* Number.isFinite is different that isFinite global function */
{
	console.log("\n##Number.isFinite:");
	console.log(isFinite(10));						//true
	console.log(isFinite(NaN));						//false
	console.log(isFinite(null));					//true
	console.log(isFinite([]));						//true
	console.log(Number.isFinite(10));				//true
	console.log(Number.isFinite(NaN));				//false
	console.log(Number.isFinite(null));				//false
	console.log(Number.isFinite([]));				//false
}

/* The Number.isSafeInteger(number) method
 The JavaScript numbers are stored as 64-bit  oating-point numbers, following the international IEEE 754 standard.
 This format stores numbers in 64 bits, where the number (the fraction) is stored in 0 to 51 bits,
 the exponent in 52 to 62 bits, and the sign in the last bit.

 So in JavaScript, safe integers are those numbers that are not needed to be rounded to some other integer
 to fit in the IEEE 754 representation. Mathematically, the numbers from -(2^53-1) to (2^53-1) are considered
 as safe integers. */
{
	console.log("\n##Number.isSafeInteger:");
	console.log(Number.isSafeInteger(156));								//true
	console.log(Number.isSafeInteger('1212'));							//false
	console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));			//true
	console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));		//false
	console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));			//true
	console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));		//false
}

/* The Number.EPSILON property */
{
	console.log("\n##Number.EPSILON:");

	//some math accurately problems
	console.log(0.1 + 0.2 == 0.3);					//false
	console.log(0.9 - 0.8 == 0.1);					//false
	console.log(0.1 + 0.2);							//0.30000000000000004
	console.log(0.9 - 0.8);							//0.09999999999999998

	/* The Number.EPSILON property was introduced in ES6, which has a value of approximately 2^-52.
	 This value represents a reasonable margin of error when comparing the  oating-point numbers.
	 Using this number, we can create a custom function to compare the  oating-point numbers by ignoring
	 the minimal rounding errors */
	let epsilonEqual = (a, b) => {
		return Math.abs(a - b) < Number.EPSILON;
	};
	console.log(epsilonEqual(0.1 + 0.2, 0.3));		//true
	console.log(epsilonEqual(0.9 - 0.8, 0.1));		//true
}



