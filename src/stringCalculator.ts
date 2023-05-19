interface propTypes{
  sum:(input:string,separator?:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum: (input: string, separator: string = ','): number => {
       // function implementation
       const statement=input.trim()

       const allInput=statement.split(separator)

       const allNumbers = allInput.filter(v => v && !isNaN(Number(v)) && Number(v)<1000 ).map(Number)

       if(allNumbers.some(v => v<0)) throw Error('Negatives not allowed')

       const sum = allNumbers.reduce((result,value)=>result+value)
      
       return sum
      } 
    }
    
}
