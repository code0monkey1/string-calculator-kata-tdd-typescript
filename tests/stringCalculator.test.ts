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
        const separator=','
       expect(sut.sum(input,separator)).toBe(expected);

        }
      );
     })

      describe('should return -1 if 1 or both numbers are missing', () => { 
        
    test.each([{input:"2,",expected:0}, {input:",10",expected:0}, {input:",",expected:0}])(
    "returns the sum of two numbers in a string",
    ({ input, expected }) => {

        const sut=stringCalculator()
        const separator=','
       expect(sut.sum(input,separator)).toBe(expected);

        }
      );
     })
        
     

})