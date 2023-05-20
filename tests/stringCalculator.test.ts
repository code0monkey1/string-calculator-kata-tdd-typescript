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

       expect(sut.sum(input)).toBe(expected);

        }
      );
     })

      describe('should return -1 if 1 or both numbers are missing', () => { 
        
    test.each([{input:"2,",expected:2}, {input:",10",expected:10}, {input:",",expected:0}])(
    ' the sum of $input is $expected',
    ({ input, expected }) => {

        const sut=stringCalculator()
 
       expect(sut.sum(input)).toBe(expected);

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

          //
          expect(sut.sum(input)).toBe(expected);
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
          expect(sut.sum(input)).toBe(expected);
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

          expect(() => sut.sum(input)).toThrow(expected);
        }
      );
      
  });
  
  describe(`if the string starts with custom delimeter "//{delimeter}\n{numbers...}"`,()=>{
    
   test.each([
        { input: '//?\n2?4', expected: 6 },
        { input: '//(\n5(10', expected: 15},
        { input: '//}\n1}1', expected: 2},
      ])(
        '$input return $expected',
        ({ input, expected }) => {
          const sut = stringCalculator();
       
          expect( sut.sum(input)).toBe(expected);
        }
      );
        
       


  })


  // test('learning test',()=>{
     
  //    expect('1\n2,3'.split(/[\n,]/)).toStrictEqual(["1","2","3"])

  // })

  // test('learing test',()=>{
  //     let input="2,3\n4"
      
  //     let delimiters=',\n';
      

  //     if(input.startsWith('//')){

  //       input=input.replace('//','')

  //       delimiters=input[0]

  //       input= input.slice(2,)
        
  //     }
      
  //     const  arr = input.split(new RegExp(`[${delimiters}]`, "g"));

  //       expect(arr).toStrictEqual(["2","3","4"])
  // })  
        

})