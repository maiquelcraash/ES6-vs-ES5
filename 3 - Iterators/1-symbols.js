/**
 * Created by maiquel on 30/12/16.
 */


/* A symbol is a unique and immutable value. From the preceding example, we can also say that a symbol is a string-like
 value that can't collide with any other value. */
{
	console.log("\n##Unique Symbols:");
	let s1 = Symbol("My Symbol");								//same description, but different symbols
	let s2 = Symbol("My Symbol");

	console.log(s1 === s2); 									//Output is "false"
}


/* The typeof operator outputs "symbol" when applied on a variable, holding a symbol. */
{
	console.log("\n##TypoOf a symbol:");
	let s = Symbol();
	console.log(typeof s); 										//Output "symbol"
}


/* You cannot apply the new operator on the Symbol() function. The Symbol() function detects if it's being used as an
 constructor, and if true, it then throws an exception. */
{
	console.log("\n##Symbom do not have a constructor:");
	try {
		let s = new Symbol(); 									//"TypeError" exception
	}
	catch (e) {
		console.log(e.message); 								//Output "Symbol is not a constructor"
	}
}


/* Object.getOwnPropertySymbols(obj) -> The Object.getOwnPropertySymbols() method returns an array of all symbol
 properties found directly upon a given object. */
{
	console.log("\n##Object.getOwnPropertySymbols(obj):");
	let obj = {a: 12};
	let s1 = Symbol("mySymbol");
	let s2 = Symbol("mySymbol2");
	Object.defineProperty(obj, s1, {							//define s1 as obj property (non-enumerable)
		enumerable: false
	});
	obj[s2] = "";												//define s2 as obj property

	console.log(obj);											//12
	console.log(Object.getOwnPropertySymbols(obj));				//[ Symbol(mySymbol), Symbol(mySymbol2) ]
}


/* he Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and
 returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.
 • Symbols created by Symbol.for are Global
 */
{
	console.log("\n##Symbol.for(key):");
	let obj = {};
	(function () {
		let s1 = Symbol("name");								//create local symbol...
		obj[s1] = "Eden";										//and set the value "Eden"
	})();

	//obj[s1] cannot be accessed here
	(function () {
		let s2 = Symbol.for("age");								//create global symbol...
		obj[s2] = 27;											//and set the value 27
	})();

	console.log(obj[Symbol.for("age")]); 						//Output "27" because "age" is global
	console.log(obj[Symbol.for("name")]);						//undefined because "name" is in other scope
}
