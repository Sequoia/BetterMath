//relies on jQuery
function BetterMath(){
}

BetterMath.prototype.counter = 0;

BetterMath.prototype.add = function( numberA, numberB ){
	var result = this.sum( numberA, numberB );
	this.counter++;
	return result;
}

BetterMath.prototype.sum = function( a, b ){
	var product = a + b;
	product = Math.round( product ); //Downstream service needs numbers rounded
	return product;
}

BetterMath.prototype.multiply = function( a, b ){
	var result = a * b;
	result = Math.abs(result);
	this.counter++;
	return result;
}

BetterMath.prototype.getCount = function(){
	return this.counter;
}
