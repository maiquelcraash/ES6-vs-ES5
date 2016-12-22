/**
 * Created by maiquel on 13/12/16.
 */

/* Representing chars with the utf-16 code */
{
	console.log("\n##Unicode codes:");
	let \u0061 = "\u0061\u0062\u0063";
	console.log(a); 							//Output is "abc"

	console.log("\n##Special codes:");
	console.log("\uD83D\uDE91");				//double espace (2 codes combined)
	console.log("\u{1F691}");					//same caracter, single code
}

/* String.codePointAt() -> return an integer representing the codepoint */
{
	console.log("\n##codePointAt():");
	console.log("\uD83D\uDE91".codePointAt(1));	//56977
	console.log("\u{1F691}".codePointAt(1));	//56977
	console.log("hello".codePointAt(2));		//108
}

/* String.fromCodePoint() -> t takes a sequence of code points and returns a string */
{
	console.log("\n##fromCodePoint():");
	console.log(String.fromCodePoint(0x61, 0x62, 0x63));
	console.log("\u0061\u0062" == String.fromCodePoint(0x61, 0x62));
}

/* String.repeat() -> constructs and returns a new string which contains the speci ed number of copies on which it was called, concatenated together */
{
	console.log("\n##repeat():");
	console.log("a".repeat(6));      			//Output "aaaaaa"
	console.log("ha".repeat(8));
}

/* String.includes() ->  used to find whether one string may be found in another string, returning true or false as appropriate */
{
	console.log("\n##includes():");
	let str = "Hi, I am a JS Developer";		//searching for "JS" in entire string
	console.log(str.includes("JS")); 			//Output "true"

	let str2 = "Hi, I am a JS Developer";		//searching for "JS" from character 13
	console.log(str2.includes("JS", 13)); 		//Output "false"
}

/* String.startsWith() -> find whether a string begins with the characters of another string, returning true or false as appropriate*/
{
	console.log("\n##startsWith():");
	let str = "Hi, I am a JS Developer";
	console.log(str.startsWith('Hi, I am')); 	//Output "true"

	let str2 = "Hi, I am a JS Developer";
	console.log(str2.startsWith('JS Developer', 11));	//Output "true"
	console.log(str2.startsWith('JS Developer', 8));	//Output "false"
}

/* String.endsWith() -> find whether a string ends with the characters of another string, returning true or false as appropriate */
{
	console.log("\n##endsWith():");
	let str = "Hi, I am a JS Developer";
	console.log(str.endsWith("JS Developer"));  //Output "true"
	console.log(str.endsWith("JS", 13));        //Output "true"
	console.log(str.endsWith("JS", 8));      	//Output "false"
}

/* String.normalize -> normalize epecial chars that have two diferent codes, that permiss to comparate them */
{
	console.log("\n##Without normalize:");
	let a = "\u00E9";							//same char single code
	let b = "e\u0301";							//same char double code
	console.log(a == b);
	console.log(a.length);
	console.log(b.length);
	for (let i = 0; i < a.length; i++) {
		console.log(a[i]);
	}

	console.log("\n##With normalize:");
	a = "\u00E9".normalize();					//normalize
	b = "e\u0301".normalize();
	console.log(a == b);
	console.log(a.length);
	console.log(b.length);
	for (let i = 0; i < a.length; i++) {
		console.log(a[i]);
	}
}

/* Template Strings */
{
	console.log("\n##Template Strings:");
	let a = 20;
	let b = 10;
	let c = "JavaScript";
	let str = `My age is ${a + b} and I love ${c}`;		//template with embed expressions
	console.log(str);

	console.log("\nLine break:");
	console.log(`1
	2
	3`);										//all elements (wrap, tab, spaces) will be printed
}

/* Raw Strings -> is a normal string in which escaped characters aren't interpreted. */
{
	console.log("\n##Raw String:");
	let s = String.raw `xy\n${ 1 + 1 }z`;
	console.log(s);								//xy\n2z
}


