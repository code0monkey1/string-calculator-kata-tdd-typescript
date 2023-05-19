interface propTypes{
  sum:(input:string,separator?:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum: (input: string, separator: string = ','): number => {
       // function implementation
       const statement=input.trim()

       const[...all]=statement.split(separator)

       const allNumbers = all.filter(v => v && !isNaN(Number(v)) && Number(v)<1000 ).map(Number)

       if(allNumbers.some(v => v<0)) throw Error('Negatives not allowed')

       if(allNumbers.length<=1) return 0
      
       return allNumbers.reduce((result,value)=>result+value,)
      } 
    }
    
}
