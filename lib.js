// Styles
var errorStyles = 'color: red; padding: 10px 0';

// Return only Ints
function Integer(param){
  var type = typeof param;
  if(type === "number" && param % 1 === 0){    
    return parseInt(param);
  } else if(type === "number" && param % 1 !== 0){
    type = "float";
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to an Integer.`, errorStyles); 
  }
  else {
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to an Integer.`, errorStyles); 
  } 
}

// Return only Floats
function Float(param){
  var type = typeof param;
  if(type === "number" && param % 1 === 0){
    type = "integer"
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to a Float.`, errorStyles); 
  } else if(type === "number" && param % 1 !== 0){
    return parseFloat(param);
  }
  else {
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to a Float.`, errorStyles); 
  }  
}

// Return only Strings & filter out objects / funcs
function String(param){
  var type = typeof param;
  if(type === "string"){
    return param.toString();
  } else if(type === "object" || type === "function"){
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to a String.`, errorStyles); 
  } 
}

// Return only objects
function Object(param){
  var type = typeof param;
  if(type === "object"){
    return param;
  } else {
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to an Object.`, errorStyles); 
  }
}

// Return only objects
function Boolean(param){
  var type = typeof param;
  if(type === "boolean"){
    return param;
  } else {
    console.error(`%c ERROR converting: ${param} (Type of: ${type}) to Boolean.`, errorStyles); 
  }
}

// Return only functions
function Function(param){
  var type = typeof param;
  if(type === "function"){
    return param;
  } else {
    console.error(`%c ERROR: ${param} (Type of: ${type}) is not a function.`, errorStyles); 
  } 
}

// Return only collections (arrays of different types)
function Collection(param){
  var collection = [];
  for (var i = 0; i < arguments.length; ++i){
    collection.push(arguments[i]);
  }
  if(collection.length <= 0){
    console.error(`%c ERROR: Collection is empty.`, errorStyles); 
    return null;
  }
  return collection;
}

// Returns true if the passed param is NOT empty
function NotEmpty(param){
  var type = typeof param;
  if(type === "undefined"){ return false; } 
  if(param === {}){ return false; }
  if(param === []){ return false; }
  if(param === ''){ return false; }

  else{ return true}
}