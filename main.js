// Create a function that takes two numbers as arguments and returns their sum.

function addition(a, b) {
	return a + b
}

addition(3, 2)


// There is a single operator in JavaScript, 
// capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided 
// by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(x, y) {
	return x % y
}

remainder(1, 3)


// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
	return (base * height) / 2
}

triArea(7, 4)



// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
function sumPolygon(n) {
	return (n-2) * 180
}

sumPolygon(3)


// Create a function that takes the age in years and returns the age in days
function calcAge(age) {
	return (age * 365)
}

calcAge(65)



// Write a function that converts hours into seconds.
function howManySeconds(hours) {
	return (hours * 3600)
}

howManySeconds(2)



function bitwiseAND(n1, n2) {
	return n1 & n2
}

function bitwiseOR(n1, n2) {
	return n1 | n2
}

function bitwiseXOR(n1, n2) {
	return n1 ^ n2
}




// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function cubes(a) {
	retunr a ** 3
}


// A student learning JavaScript was trying to make a function. 
// His code should concatenate a passed string name with string 
// "Edabit" and store it in a variable called result. 
// He needs your help to fix this code.

function nameString(name){
	var b == "Edabit"
	var result == name + b
  	return result
}


// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.

function points(twoPointers, threePointers) {
	return (twoPointers*2) + (threePointers*3)
}



// Given two numbers, return true 
// if the sum of both numbers is less than 100. 
// Otherwise return false.

function lessThan100(a, b) {
	if((a + b) < 100) {
		return true;
	} else {
		return false;
	}
}


// Mubashir created an infinite loop! Help him by 
// fixing the code in the code tab to pass this challenge. 
// Look at the examples below to get an idea of what the function 
// should do.

function printArray(number) {

    var newArray = [];
  
    for(var i = 1; i <= number; i++) {

      newArray.push(i);
      
    }
  
    return newArray;

}