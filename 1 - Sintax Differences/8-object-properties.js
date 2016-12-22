/**
 * Created by maiquel on 12/12/16.
 */

/* old mode */
{
	var x = 1, y = 2;
	var object = {
		x: x,
		y: y
	};
}

/* new mode */
{
	let x = 1, y = 2;
	let object = {x, y};
	console.log(object.x); 									//output "1"
}

/* Declaring methods */
{
	let object = {
		myFunction(){
			console.log("Hello World!!!"); 					//Output "Hello World!!!"
		}
	};
	object.myFunction();
}

/* Conputed properties names */
{
	/* old mode */
	{
		var object = {};
		object["first" + "Name"] = "Eden";					//"firstName" is the property name
		//extract
		console.log(object["first" + "Name"]); 				//Output "Eden"
	}

	/* new mode */
	{
		let object = {
			["first" + "Name"]: "Eden",						//create property dinamicaly, and add value directly
		};
		//extract
		console.log(object["first" + "Name"]); 				//Output "Eden"
	}
}
