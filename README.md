# checkjs
A fast and lightweight library built to help with type checking in plain Javascript that works with new and old versions!

* [Installation](#installation)
* [Usage](#usage)
  * [Integer](#usage-integer)
  * [Float](#usage-float)
  * [String](#usage-string)
  * [Object](#usage-object)
  * [Function](#usage-function)
  * [Collection](#usage-collection)
  * [Not Empty](#usage-not-empty)
  
## Installation
Local: download the library and include in the `<head>` section of your website. [Link to library](https://tboccinfuso.github.io/checkjs-cdn/lib.js)

With Node: `npm install checkjs`

## Usage
If you included locally, you can use the funcations as you normally would with an included script.

With Node: `import * as CheckJS from 'checkjs';`

### Usage Integer
This function is used to check if the passed param is of type Integer. Will throw error if not.
``` javascript
  Integer(42) // returns 42
  Integer('text') // throw error
  Integer(42.2) // throw error - cannot convert float to int
```

### Usage Float
This function is used to check if the passed param is of type Float. Will throw error if not.
``` javascript
  Float(42.2) // returns 42.2
  Float({"name": "bob"}) // throw error
  Float(42) // throw error - cannot convert int to float
```

### Usage String
This function is used to check if the passed param is of type String. Will throw error if not.
``` javascript
  String('text') // returns text
  String(42) // returns "42"
  String({"name": "bob"}) // throw error
```

### Usage Object
This function is used to check if the passed param is of type Object. Will throw error if not.
``` javascript
  Object({"name": "bob"}) // return {"name": "bob"}
  Object('text') // throw error
```

### Usage Function
This function is used to check if the passed param is of type Function. Will throw error if not.
``` javascript
  Function(function(){}) // return function
  Function('text') // throw error
```

### Usage Collection
In Checkjs we use a special "type" called a collection. This is the similar to other languages that have a type of Interface. Here, the Collection type is an array of any passed values / types. It is primarly used as a constructor to make an array that accepts any types. You can then run any other type checker on the Collection's items by passing them to another check function. 
``` javascript
  Collection('text', 42, {"name": "bob"}) // returns ['text', 42, {"name": "bob"}]
  Collection() // throw error
```

To then check one of the values you can pass the Collection's item like so:
``` javascript
  var collection = Collection('text', 42, {"name": "bob"}); // new Collection
  var int = Integer(collection[1]) // returns true because the second item is an integer
```
  
### Usage Not Empty
The NotEmpty function is used to check if the passed param is empty or not. Useful when you want to perform an action only if there is something in the variable.
``` javascript
  var word = 'text';
  var empty = {};
  NotEmpty(word) // returns true
  NotEmpty(empty) // returns false
```
