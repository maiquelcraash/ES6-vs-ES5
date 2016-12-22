/**
 * Created by maiquel on 22/12/16.
 */

/*
 ArrayBuffer -> are arrays more efficient. You must reserve the space. Eatch slot is 8bit sized.
 DataView -> A DataView object provides several methods to read and write numbers into an array buffer object.
 */
{
	console.log("\n##ArrayBuffer and DataView:");
	let buffer = new ArrayBuffer(80);
	let view = new DataView(buffer);

	view.setInt32(8, 22, false);							//write a 32bit value, from the byte "8" (offset). The value is "22" big-endian (represented by the third param "false")
	let number = view.getInt32(8, false);					//read a 32bit value, from the byte "8". The endian of the value is big-endian
	console.log(number); 									//Output "22"
}


/*
 TypedArray -> Typed arrays let us read and write to an array buffer object just like we do for normal arrays
 */
{
	console.log("\n##TypedArray:");
	let buffer = new ArrayBuffer(80);						//create a buffer with 80 bytes
	let typed_array = new Float64Array(buffer);				//create a typed array that accepts 64bit (8 bytes) float values
	typed_array[4] = 11;

	console.log(typed_array.length);						//10 (10 values of 64bit/8 bytes eatch
	console.log(typed_array[4]);							//11
}


/* Set -> A Set is a collection of unique values of any data type. The values in a Set are arranged in insertion order */
{
	console.log("\n##Set:");
	let set = new Set("Hello!!!");							//add eatch char as unique elements
	set.add(12); 											//add 12

	console.log(set.has("!")); 								//check if value exists TRUE
	console.log(set.size);									//6

	set.delete(12); 										//delete 12

	console.log(...set);									//H e l o !

	set.clear(); 											//delete all values
}

/* WeakSet ->
 • A Set can store primitive types and object references whereas a WeakSet object can only store object references
 • One of the important features of the WeakSet object is that if there is no other reference to an object stored in a WeakSet object then they are garbage collected
 • Lastly a WeakSet object is not enumerable, that is, you cannot find its size; it also doesn't implement iterable protocol
 */
{
	console.log("\n##WeakSet:");
	let weakset = new WeakSet();
	let b = {};
	(function () {
		let a = {};
		weakset.add(a);
		weakset.add(b);
	})();

	console.log(weakset.has(b));							//true
	//here 'a' is garbage collected from weakset
	//console.log(weakset.has(a));							//Exception because a doesn't exists

	console.log(weakset.size); 								//output "undefined" because is not an iterable
	//console.log(...weakset); 								//Exception is thrown
	//weakset.clear(); 										//Exception, no such function
}

/* Map -> A Map is a collection of key/value pairs. Keys and values of a Map can be of any data type.
 The key/value pairs are arranged in the insertion order.
 If we try to add a key that already exists then it's overwritten*/
{
	console.log("\n##Map:");
	let map = new Map();
	let o = {n: 1};
	map.set(o, "A"); 										//add value "A" (string) to key "o" (object)
	map.set("2", 9);										//add value "9" (int) to key "2" (string)

	console.log(map.has("2"));								//check if key exists TRUE
	console.log(map.get(o));								//A
	console.log(...map);									//[ { n: 1 }, 'A' ] [ '2', 9 ]

	map.delete("2");										//delete value of key "2"
	map.clear(); 											//delete everything

	let map_1 = new Map([[1, 2], [4, 5]]);					//create a map from iterable object. For eatch element, the index 0 is the key and index 1 is the value.
	console.log(map_1.size); 								//number of keys
}

/* WeakMap
 • Keys of a Map object can be of primitive types or object references but keys in WeakMap object can only be object references
 • One of the important features of the WeakMap object is that if there is no other reference to an object that is referenced by a key then the key is garbage collected.
 • Lastly the WeakMap object is not enumerable, that is, you cannot find its size and it doesn't implement iterable protocol. */
{
	console.log("\n##WeakMap:");
	let weakmap = new WeakMap();
	(function () {
		let o = {n: 1};
		weakmap.set(o, "A");
	})();

	//here 'o' key is garbage collected

	let s = {m: 1};
	weakmap.set(s, "B");

	console.log(weakmap.get(s));							//B
	//console.log(...weakmap);								//exception thrown

	weakmap.delete(s);
	//weakmap.clear();										//Exception, no such function
	let weakmap_1 = new WeakMap([[{}, 2], [{}, 5]]);		//this works
	console.log(weakmap_1.size);							//undefined because not iterable
}
