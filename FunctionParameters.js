function areaOfATriangle(height,base){
	
	var answer = 0.5*base*height
	return(answer);

}
var result1 = areaOfATriangle(20,16);
var result2 = areaOfATriangle(46,12);
var result3 = areaOfATriangle(10,6);
var result4 = areaOfATriangle(20,14);


print(result1)
print(result2)
print(result3)
print(result4)


function print(answer){
console.log("Area of a Triangle: " + answer)
}

