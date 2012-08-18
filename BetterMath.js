//relies on jQuery
function BetterMath(){
}

BetterMath.prototype.add = function( numberA, numberB ){
	var result = this.sum( numberA, numberB );
	return result;
}

BetterMath.prototype.sum = function( a, b ){
	var product = a + b;
	product = Math.round( product ); //Downstream service needs numbers rounded
	return product;
}

BetterMath.prototype.multiply = function( a, b ){
	var result = a * b;
	return result;
}
