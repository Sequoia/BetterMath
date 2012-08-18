describe('BetterMath',function(){

	var bm; //BetterMath object
	beforeEach(function(){
			bm = new BetterMath();
	});

	describe('add',function(){

		it('should add two numbers',function(){
			expect( bm.add( 1 , 2 ) ).toEqual( 3 );
			expect( bm.add( -3  , 2 ) ).toEqual( -1 );
			expect( bm.add( 500000000 , 2 ) ).toEqual( 500000002 );
		});

		it('should round the sum',function(){
			expect( bm.add( 1.3 , 2.3 ) ).toEqual( 4 );
			expect( bm.add( 0.1  , 0.1 ) ).toEqual( 0 );
			expect( bm.add( .4, .4 ) ).not.toEqual( .8 );
		});
		
		it('should increment the counter',function(){
			expect( bm.getCount() ).toEqual( 0 );
			bm.add( 1 , 1 );
			expect( bm.getCount() ).toEqual( 1 );
			bm.add( 1 , 1 );
			expect( bm.getCount() ).toEqual( 2 );
		});

	});

	describe('multiply',function(){

		it('should multiply two numbers',function(){
			expect( bm.multiply( 2 , 2 ) ).toEqual( 4 );
			expect( bm.multiply( 10 , 10 ) ).toEqual( 100 );
		});

		it('should always return a positive result',function(){
			expect( bm.multiply( 2 , 2 ) ).toBeGreaterThan( 0 );
			expect( bm.multiply( -2 , 2 ) ).toBeGreaterThan( 0 );
			expect( bm.multiply( -2 , -2 ) ).toBeGreaterThan( 0 );
		});

		it('should increment the counter',function(){
			expect( bm.getCount() ).toEqual( 0 );
			bm.add( 1 , 1 );
			expect( bm.getCount() ).toEqual( 1 );
			bm.add( 1 , 1 );
			expect( bm.getCount() ).toEqual( 2 );
		});

	});

});
