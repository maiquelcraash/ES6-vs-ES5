/**
 * Created by maiquel on 22/12/16.
 */

/* OBJECT _proto_ ES5 MODE
 *  is an accessor property that exposes the internal [[prototype]] property and makes working with prototypes easier*/
{
	console.log("\n##__proto__:");

	//In ES5
	var myObject = {x: 12};
	var newObject = Object.create(myObject, {y: {value: 13}});		//create a new object, similar to the prototype passed, and add new properties
	console.log(newObject.x); 										//Output "12"
	console.log(newObject.y); 										//Output "13"
}

/* OBJECT _proto_ ES6 MODE */
{
	let a = {a: 12, __proto__: {b: 13}};							//create a new object and alter the inner prototype propertie
	console.log(a.a); 												//Output "12"
	console.log(a.b); 												//Output "13"
}


/* Object.is() -> determines whether two values are equal or not. It is similar to the === operator but there are some
 special cases for the Object.is() method. */
{
	console.log("\n##Object.is():");

	console.log(Object.is(0, -0));									//false
	console.log(0 === -0);											//true
	console.log(Object.is(NaN, 0 / 0));								//true
	console.log(NaN === 0 / 0);										//false
	console.log(Object.is(NaN, NaN));								//true
	console.log(NaN === NaN);										//false
}


/* Object.setPrototypeOf() -> is just an another way to assign the [[prototype]] property of an object */
{
	console.log("\n##Object.setPrototypeOf():");

	let x = {x: 12};
	let y = {y: 13};

	Object.setPrototypeOf(y, x);									//add the propertis of x, to y prototype

	console.log(y.x); 												//12
	console.log(y.y); 												//13
}