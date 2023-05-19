import { stringCalculator } from "../src/stringCalculator";


describe('stringCalculator',()=>{
   
    it('should exist as a function that takes in a string',()=>{
       const sut=stringCalculator;
      
        expect(sut).toBeInstanceOf(Function)

    })


    describe('should give the sum if 2 numbers are separated by comma', () => { 
        
    test.each([{input:"2,4",expected:6}, {input:"5,10",expected:15}, {input:"1,1",expected:2}])(
   ' the sum of $input is $expected',
    ({ input, expected }) => {

        const sut=stringCalculator()
        const separator=','
       expect(sut.sum(input,separator)).toBe(expected);

        }
      );
     })

      describe('should return -1 if 1 or both numbers are missing', () => { 
        
    test.each([{input:"2,",expected:2}, {input:",10",expected:10}, {input:",",expected:0}])(
    ' the sum of $input is $expected',
    ({ input, expected }) => {

        const sut=stringCalculator()
        const separator=','
       expect(sut.sum(input,separator)).toBe(expected);

        }
      );
     })
 
   
    describe('should give the sum if 3 numbers are separated by comma', () => {
      test.each([
        { input: '1,2,3', expected: 6 },
        { input: '5,10,15', expected: 30 },
        { input: '2,4,6', expected: 12 },
      ])(
        ' the sum of $input is $expected',
        ({ input, expected }) => {
          //Arrange
          const sut = stringCalculator();
          const separator = ',';

          //
          expect(sut.sum(input, separator)).toBe(expected);
        }
      );

});

    describe('should give the sum if numbers are separated by newline characters', () => {
      test.each([
        { input: '1\n2\n3', expected: 6 },
        { input: '5\n10\n15', expected: 30 },
        { input: '2\n4\n6', expected: 12 },
      ])(
        'returns the sum of numbers separated by newline characters',
        ({ input, expected }) => {
          const sut = stringCalculator();
          const separator = '\n';
          expect(sut.sum(input, separator)).toBe(expected);
        }
      );

  });

    describe('should return error if any of the number is negative', () => {
      test.each([
        { input: '2,-4', expected: 'Negatives not allowed' },
        { input: '-5,10', expected: 'Negatives not allowed' },
        { input: '1,-1', expected: 'Negatives not allowed' },
      ])(
        'returns an error message if a negative number is present',
        ({ input, expected }) => {
          const sut = stringCalculator();
          const separator = ',';
          expect(() => sut.sum(input, separator)).toThrow(expected);
        }
      );
      
});
        

})