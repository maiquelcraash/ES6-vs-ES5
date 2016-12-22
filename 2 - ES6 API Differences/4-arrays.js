/**
 * Created by maiquel on 14/12/16.
 */

/* Array.from -> The Array.from() method creates a new array instance from an iterable object. The  rst argument is a
 reference to the iterable object. The second argument is optional and is a callback (known as Map function) that is
 called for every element of the iterable object. The third argument is also optional and is the value of this inside
 the Map function. */
{
	console.log("\n##Array.from:");
	let str = "0123";										//iterable object (first argument)
	let obj = {number: 10};									//value of "this" (third argument)
	let arr = Array.from(str, function (value) {			//for every iterable element on str, call the function
		return parseInt(value) + this.number;
	}, obj);
	console.log(arr);										//[ 10, 11, 12, 13 ]
}

/* Array.of -> create an array with the value */
{
	console.log("\n##Array.of:");
	let arr1 = new Array(2);								//create an empty array with length equal the value passed as param
	let arr2 = Array.of(2);									//create an array with the value passed as param

	console.log(arr1[0], arr1.length);						//undefined 2
	console.log(arr2[0], arr2.length);						//2 1
}

/* Array.fill -> fill an array with the informed value */
{
	console.log("\n##Array.fill:");
	let arr1 = [1, 2, 3, 4];								//5 same arrays
	let arr2 = [1, 2, 3, 4];
	let arr3 = [1, 2, 3, 4];
	let arr4 = [1, 2, 3, 4];
	let arr5 = [1, 2, 3, 4];

	arr1.fill(5);											//fill all with the "5" value
	arr2.fill(5, 1, 2);										//fill the value "5" from index 1 to 2 (not inclusive)
	arr3.fill(5, 1, 3);										//fill the value "5" from index 1 to 3 (not inclusive)
	arr4.fill(5, -3, 2);									//start = 1, because ( -3 + array length) = 1. End = 2 (not inclusive)
	arr5.fill(5, 0, -2);									//start = 0. End = 2, becaus ( -2 + array length) = 2 (not inclusive)

	console.log(arr1);										//[ 5, 5, 5, 5 ]
	console.log(arr2);										//[ 1, 5, 3, 4 ]
	console.log(arr3);										//[ 1, 5, 5, 4 ]
	console.log(arr4);										//[ 1, 5, 3, 4 ]
	console.log(arr5);										//[ 5, 5, 3, 4 ]
}

/* Array.find -> returns an array element, if it satisfies the provided testing function. Otherwise it returns undefined. */
{
	console.log("\n##Array.find:");
	let x = 12;												//second argumento of the find, is the "this" inner the function
	let arr = [11, 12, 13];
	let result = arr.find(function (value) {
		if (value == this) {
			return true;
		}
	}, x);
	console.log(result); 									//Output "12"
}

/* Array.findIndex -> similar to the find(), but returns the index instead the element */
{
	console.log("\n##Array.findIndex:");
	let x = 12;												//second argumento of the findIndex, is the "this" inner the function
	let arr = [11, 12, 13];
	let result = arr.findIndex(function (value) {
		if (value == this) {
			return true;
		}
	}, x);
	console.log(result); 									//Output "1"
}

/* Array.copyWithin -> The copyWithin() method of an array is used to copy the sequence of values of the array to a different position in the array. */
/* copyWithin(targetIndex, startIndex, endIndex)*/
{
	console.log("\n##Array.copyWithin:");
	let arr1 = [1, 2, 3, 4, 5];
	let arr2 = [1, 2, 3, 4, 5];
	let arr3 = [1, 2, 3, 4, 5];
	let arr4 = [1, 2, 3, 4, 5];

	arr1.copyWithin(1, 2, 4);								//copy the values from index 2 to 4 (not included) to the index 1
	arr2.copyWithin(0, 1);									//copy the values from index 1 to end to the index 0
	arr3.copyWithin(1, -2);									//copy the values from index ( -2 + array length ) to end to the index 1
	arr4.copyWithin(1, -2, -1);								//copy the values from index ( -2 + 5 ) to ( -1 + 5 ) to the index 1

	console.log(arr1);										//[ 1, 3, 4, 4, 5 ]
	console.log(arr2);										//[ 2, 3, 4, 5, 5 ]
	console.log(arr3);										//[ 1, 4, 5, 4, 5 ]
	console.log(arr4);										//[ 1, 4, 3, 4, 5 ]
}

/*
 entries() -> return an iterable object that contains a pair key/value of eatch element
 keys() -> return an iterable object that contains the keys of eatch element
 values() -> return an iterable object that conains the values of eatch element */
{
	console.log("\n##entries(), keys() and values():");
	let arr = ['a', 'b', 'c'];
	let entries = arr.entries();
	let keys = arr.keys();
	// let values = arr.values();

	console.log(...entries);								//0,a 1,b 2,c
	console.log(...keys);									//0 1 2
	// console.log(...values);									//a b c

}