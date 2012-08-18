describe('BetterMath',function(){

	describe('add',function(){
		it('should add two numbers',function(){
			var bm = new BetterMath();

			expect( bm.add( 1 , 2 ) ).toEqual( 3 );
			expect( bm.add( -3  , 2 ) ).toEqual( -1 );
			expect( bm.add( 500000000 , 2 ) ).toEqual( 500000002 );

		});
	});

});
