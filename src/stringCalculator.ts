interface propTypes{
  sum:(input:string,separator?:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum: (input: string, separator: string = ','): number => {
       // function implementation
       const statement=input.trim()

       const[...all]=statement.split(separator)

       const allNumbers = all.filter(v => v && !isNaN(Number(v)) ).map(Number)

       if(allNumbers.length<=1) return 0
      
       return allNumbers.reduce((result,value)=>result+value,)
      } 
    }
    
}
