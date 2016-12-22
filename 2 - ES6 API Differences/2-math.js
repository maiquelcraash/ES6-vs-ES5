/**
 * Created by maiquel on 13/12/16.
 */

/* Trigonometry related operations */
{
	console.log("\n##Trigonometry operations:");
	console.log(Math.sinh(0));					//hyperbolic sine of a value
	console.log(Math.cosh(0));					//hyperbolic cosine of a value
	console.log(Math.tanh(0));					//hyperbolic tangent of a value
	console.log(Math.asinh(0));					//inverse hyperbolic sine of a value
	console.log(Math.acosh(1)); 				//inverse hyperbolic cosine of a value
	console.log(Math.atanh(0)); 				//inverse hyperbolic tangent of a value
	console.log(Math.hypot(2, 2, 1));			//Pythagoras theorem
}

/* Arithmetic related operations */
{
	console.log("\n##Arithmetic operations:");
	console.log(Math.log2(16));    				//log base 2
	console.log(Math.log10(1000)); 				//log base 10
	console.log(Math.log1p(0));					//same as log(1 + value)
	console.log(Math.expm1(0));					//inverse as Math.log1p
	console.log(Math.cbrt(8));					//cube root of a value
}

/* Math.imul -> Multiplicate two 32bit integers */
{
	console.log("\n##Math.imul():");
	console.log(Math.imul(590, 5000000)); 		//32-bit integer multiplication
	console.log(590 * 5000000); 				//64-bit floating-point multiplication
}

/* Math.clz32 -> Check how many 0's are empty on the front of the number */
{
	console.log("\n##Math.clz32():");
	console.log(Math.clz32(7));					//29
	console.log(Math.clz32(1000));				//22
	console.log(Math.clz32(295000000));			//3
}

/* Math.sign -> Check the signal of a number */
{
	console.log("\n##Math.sign():");
	console.log(Math.sign(11));					//1
	console.log(Math.sign(-11));				//-1
	console.log(Math.sign(0));					//0
}

/* Math.trunc -> Return an integer number without removing fractional digits */
{
	console.log("\n##Math.trunc():");
	console.log(Math.trunc(11.17));				//11
	console.log(Math.trunc(-1.112));			//-1
}

/* Math.fround -> rounds a number to a 32-bit  oating point value */
{
	console.log("\n##Math.fround():");
	console.log(Math.fround(0));				//0
	console.log(Math.fround(1));				//1
	console.log(Math.fround(1.137));			//1.1369999647140503
	console.log(Math.fround(1.5));				//1.5
}

