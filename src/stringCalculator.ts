interface propTypes{
  sum:(input:string)=>number
}

export const stringCalculator=():propTypes=>{


    return {
      sum: (input: string): number => {

       let delimiters:string|RegExp=/,|\n/
      
       if(hasCustomDelimiter(input)){

          delimiters= extractCustomDelimiter(input)

          input= extractStringToBeParsed(input)

        }
       
       const splitInput:string[] = input.split(delimiters);

       const allNumbers = parseNumbers(splitInput)

       if(hasNegativeNumber(allNumbers)) {

          const allNegativeNumbers = allNumbers.filter(num => num<0)

          throw 'Negative numbers are not allowed: ' + allNegativeNumbers.join(',');;
          
        }

       const _sum = allNumbers.reduce((result,value)=>result+value,0)
      
       return _sum
      } 
    }
    
}
function parseNumbers(splitInput: string[]) {
  
  const LARGE_NUMBER=1000

  return splitInput
                  .filter(v => v && !isNaN(Number(v)))
                  .map(Number)
                  .filter(v=> Number(v) <= LARGE_NUMBER)
}

function hasNegativeNumber(allNumbers: number[]) {
  return allNumbers.some(v => v < 0)
}

function extractStringToBeParsed(input: string): string {

  const STRING_START_INDEX=4

  return input.slice(STRING_START_INDEX)

}

function extractCustomDelimiter(input: string): string | RegExp {

  const DELIMITER_INDEX=2

  return input[DELIMITER_INDEX]
}

function hasCustomDelimiter(input: string) {
  return input.startsWith('//')
}

