/**
 * Created by maiquel on 12/12/16.
 */

(function () {
	"use strict";

	/* old mode */
	var o_object = {"name": "John", "age": 23};
	var o_name = o_object.name;
	var o_age = o_object.age;


	/* the new mode */
	let object = {"name": "John", "age": 23};
	let name, age;
	({name, age} = object); 								//object destructuring assignment syntax. "()" is obrigatory

	/* alternative */
	let {name: x, age: y} = {"name": "John", "age": 23};	//in this case, we create the variables and object ont the same line, and don'n need the "()"
	console.log(name);
	console.log(age);
	console.log(x);
	console.log(y);

	/* property default value */
	let {a, b, c = 3} = {a: "1", b: "2"};					//c property have the "3" default value
	console.log("\n" +
		"##object default values:\n" +
		"a = " + a + "\n" +
		"b = " + b + "\n" +
		"c = " + c);

	/* dinamic properties */
	console.log("\n##dinamic property name");
	let {["first" + "Name"]: z} = {firstName: "Eden"};
	console.log(z); //Output "Eden"

	/* destructuring nested objects */
	let {_name, otherInfo: {_age}} = {_name: "Eden", otherInfo: {_age: 23}};
	console.log("\n##Nested objects\n", _name, _age); 		//Eden 23
}());