import { stringCalculator } from "../src/stringCalculator";


describe('stringCalculator',()=>{
   
    it('should exist as a function that takes in a string',()=>{
       const sut=stringCalculator;
      
        expect(sut).toBeInstanceOf(Function)

    })

    describe('should give the sum if 2 numbers are separated by comma', () => { 
        
    test.each([{input:"2,4",expected:6}, {input:"5,10",expected:15}, {input:"1,1",expected:2}])(
    "returns the sum of two numbers in a string",
    ({ input, expected }) => {

        const sut=stringCalculator()

       expect(sut.sum(input)).toBe(expected);

        }
      );
     })

      describe('should return -1 if 1 or both numbers are missing', () => { 
        
    test.each([{input:"2,",expected:-1}, {input:",10",expected:-1}, {input:",",expected:-1}])(
    "returns the sum of two numbers in a string",
    ({ input, expected }) => {

        const sut=stringCalculator()

       expect(sut.sum(input)).toBe(expected);

        }
      );
     })
        
     

})