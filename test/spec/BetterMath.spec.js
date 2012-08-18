describe('BetterMath',function(){

	describe('add',function(){
		it('should add two numbers',function(){
			var bm = new BetterMath();

			expect( bm.add( 1 , 2 ) ).toEqual( 3 );
			expect( bm.add( -3  , 2 ) ).toEqual( -1 );
			expect( bm.add( 500000000 , 2 ) ).toEqual( 500000002 );

		});
		it('should round the sum',function(){
			var bm = new BetterMath();

			expect( bm.add( 1.3 , 2.3 ) ).toEqual( 4 );
			expect( bm.add( 0.1  , 0.1 ) ).toEqual( 0 );
			expect( bm.add( .4, .4 ) ).not.toEqual( .8 );

		});
	});

	describe('multiply',function(){
		it('should multiply two numbers',function(){
			var bm = new BetterMath();

			expect( bm.multiply( 2 , 2 ) ).toEqual( 4 );
			expect( bm.multiply( 10 , 10 ) ).toEqual( 100 );
		});

		it('should produce a negative result if one operand is negative',function(){
			var bm = new BetterMath();

			expect( bm.multiply( -2 , 2 ) ).toBeLessThan( 0 );
		});

		it('should produce a positive result if both operands are negative',function(){
			var bm = new BetterMath();

			expect( bm.multiply( -2 , -2 ) ).toBeGreaterThan( 0 );
		});

	});

});
