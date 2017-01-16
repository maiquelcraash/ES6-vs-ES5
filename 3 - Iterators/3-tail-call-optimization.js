/**
 * Created by maiquel on 16/01/17.
 *
 * A tail call is a function call, performed optionally at the very end of a function
 with the return statement. If a tail call leads to the same function call again and again, then it's called as a
 tail-recursion, which is a special case of recursion. What's special about tail calls is that there is a way to
 actually prevent the extra CPU-time and memory usage while making the tail calls, which is to reuse the stack of the
 out function, instead of creating a new execution stack thereby saving the CPU time and the extra memory usage. Reusing
 the execution stack while making a tail call is called as the tail call optimization.
 */



/* Tail function vs non-tail function */
"use strict";

function add1(x, y) {
	return x + y;
}

function add2(x, y) {
	x = parseInt(x);
	y = parseInt(y);
	return add1(x, y);									//tail call
}

function add3(x, y) {
	x = parseInt(x);
	y = parseInt(y);
	return 0 + add1(x, y);								//not tail call because not last action in function
}

console.log(add2(1, '1')); 								//2
console.log(add3(1, '2')); 								//3




/* Converting non-tail to tail function*/
function _add1(x, y) {
	return x + y;
}

function _add2(x, y) {
	x = parseInt(x);
	y = parseInt(y);
	let result = _add1(x, y);
	return result;
}

function _add3(x, y) {
	x = parseInt(x);
	y = parseInt(y);
	return _add1(x, y);
}

console.log(_add2(1, '1'));								//2
console.log(_add3(1, '2'));								//3

