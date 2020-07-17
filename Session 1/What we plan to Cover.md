# What we plan to cover!
- if elseif switch ternary
- comparison operators specially ==,===
```javascript
   var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

a == c;		// true
b == c;		// true
a == b;		// false
```
- typeOf
- Explore Objects
  - ways to access object properties obj.prop or obj["prop"]
  - shallow and deep copy
- Except primitive type everything is an object
- Functions
  - Explore the object side
  - scope via functions  
```javascript
  function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
		}
	}
}

foo();
// 5 7 9
Because of using let instead of var, b will belong only to the if statement and thus not to the whole foo() function's scope. Similarly, c belongs only to the while loop. Block scoping is very useful for managing your variable scopes in a more fine-grained fashion, which can make your code much easier to maintain over time.
```
- strict mode
```javascript
function foo() {
	"use strict";

	// this code is strict mode

	function bar() {
		// this code is strict mode
	}
}

// this code is not strict mode
```
- Functions As Values
- IIFE
```javascript
function foo() { .. }

// `foo` function reference expression,
// then `()` executes it
foo();

// `IIFE` function expression,
// then `()` executes it
(function IIFE(){ .. })();
```
- Explore prototype 
- Closures
