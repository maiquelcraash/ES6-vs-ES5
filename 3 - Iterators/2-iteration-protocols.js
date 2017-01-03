/**
 * Created by maiquel on 30/12/16.
 *
 * An iteration protocol is a set of rules that an object needs to follow for implementing the interface, which when
 * used, a loop or a construct can iterate over a group of values of the object.
 */

/* The iterator protocol -> Any object that implements the iterator protocol is known as an iterator. According to the
 iterator protocol, an object needs to provide a next() method that returns the next item in the sequence of a group of
 items. */
{
	console.log("\n##Custom iterable object:");
	let obj = {
		array: [1, 2, 3, 4, 5],
		nextIndex: 0,
		next: function () {									//return the next value
			return this.nextIndex < this.array.length ?
				{value: this.array[this.nextIndex++], done: false} :
				{done: true};
		}
	};

	console.log(obj.next().value);							//1
	console.log(obj.next().value);							//2
	console.log(obj.next().value);							//3
	console.log(obj.next().value);							//4
	console.log(obj.next().value);							//5
	console.log(obj.next().value);							//undefined
	console.log(obj.next().done);							//true
}


/* Any object that implements the iterable protocol is known as an iterable. According to the iterable protocol, an
 object needs to provide the @@iterator method; that is, it must have the Symbol.iterator symbol as a property key. The
 @@iterator method must return an iterator object. */
{
	console.log("\n##Official Iterable protocol:");
	let obj = {
		array: [1, 2, 3, 4, 5],
		nextIndex: 0,
		[Symbol.iterator]: function () {					//iterator symbol that returns an iterable object
			return {
				array: this.array,
				nextIndex: this.nextIndex,
				next: function () {
					return this.nextIndex < this.array.length ?
						{value: this.array[this.nextIndex++], done: false} :
						{done: true};
				}
			}
		}
	};
	let iterable = obj[Symbol.iterator]();

	console.log(iterable.next().value);						//1
	console.log(iterable.next().value);						//2
	console.log(iterable.next().value);						//3
	console.log(iterable.next().value);						//4
	console.log(iterable.next().value);						//5
	console.log(iterable.next().done);						//true
}


/*  A generator function is an object that implements both, iterable and iterator protocols automatically. A generator
 function is written using the function* expression. The next() and done() methods are implemented directly */
{
	console.log("\n##Generator function:");
	function* generator_function() {						//strange notation :)
		yield 1;											//yield values to iterate
		yield 2;
		yield 3;
		yield 4;
		yield 5;
	}

	let generator = generator_function();					//get generator directly

	console.log(generator.next().value);					//1
	console.log(generator.next().value);					//2
	console.log(generator.next().value);					//3
	console.log(generator.next().value);					//4
	console.log(generator.next().value);					//5
	console.log(generator.next().done);						//true

	generator = generator_function();
	let iterable = generator[Symbol.iterator]();			//get iterable object

	console.log(iterable.next().value);						//1
	console.log(iterable.next().value);						//2
	console.log(iterable.next().value);						//3
	console.log(iterable.next().value);						//4
	console.log(iterable.next().value);						//5
	console.log(iterable.next().done);						//true
}

/* We can also pass an optional argument to the next() method. This argument becomes the value returned by the yield
 statement, where the generator function is currently paused. Here is an example to demonstrate this: */
{
	console.log("\n##Generator function with arguments:");
	function* generator_function_with_args() {
		let a = yield 12;
		let b = yield a + 1;
		let c = yield b + 2;
		yield c + 3;
	}

	let generator = generator_function_with_args();
	console.log(generator.next().value);				//12
	console.log(generator.next(5).value);				//6
	console.log(generator.next(11).value);				//13
	console.log(generator.next(78).value);				//81
	console.log(generator.next().done);					//true
}

/* You can anytime end a generator function before it has yielded all the values using the return() method of the
 generator object. The return() method takes an optional */
{
	console.log("\n##Generator function with return():");
	function* generator_function_with_return() {
		yield 1;
		yield 2;
		yield 3;
	}

	let generator = generator_function_with_return();
	console.log(generator.next().value);				//1
	console.log(generator.return(22).value);			//22	(return 22 and finish the iterable)
	console.log(generator.next().done);					//true
}

/* You can manually trigger an exception inside a generator function using the throw() method of the generator object.
 You must pass an exception to the throw() method that you want to throw. Here is an example to demonstrate this: */
{
	console.log("\n##Generator function with throw:");
	function* generator_function_with_throw() {
		try {
			yield 1;
		}
		catch (e) {
			console.log("1st Exception");
		}
		try {
			yield 2;
		}
		catch (e) {
			console.log("2nd Exception");
		}
	}

	let generator = generator_function_with_throw();
	console.log(generator.next().value);							//1 and pause execution
	console.log(generator.throw("exception string").value);			//throws exception, but restart execution and return the "2". Then, pause execution
	console.log(generator.throw("exception string").done);			//throws exception, but restart execution and make done the iterator
}

/* The yield* keyword inside a generator function takes an iterable object as the expression and iterates it to yield
 its values. Here is an example to demonstrate this: */
{
	console.log("\n##yield keyword:");
	function* generator_function_1() {
		yield 2;
		yield 3;
	}

	function* generator_function_2() {
		yield 1;
		yield* generator_function_1();					//return and iterable object
		yield* [4, 5];									//return eatch value as separated call
	}

	let generator = generator_function_2();
	console.log(generator.next().value);				//1
	console.log(generator.next().value);				//2		sub iterable object first return
	console.log(generator.next().value);				//3		sub iterable object second return
	console.log(generator.next().value);				//4		first array element
	console.log(generator.next().value);				//5		second array element
	console.log(generator.next().done);					//true
}

/* The for...of loop was introduced to iterate over the values of an iterable object */
{
	console.log("\n##for...of loop:");
	function* generator_function_for_of() {
		yield 1;
		yield 2;
		yield 3;
		yield 4;
		yield 5;
	}

	//iterate over eatch yield value of iterable object
	for (let value of generator_function_for_of()) {
		console.log(value);
	}

	//you can do the same with others iterable object like array
	let arr = [1, 2, 3];
	for (let value of arr) {
		console.log(value);
	}
}

