interface propTypes{
  sum:(input:string,separator?:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum: (input: string, separator: string = ','): number => {
       // function implementation
       const statement=input.trim()
       const[first,second]=statement.split(separator)

       if(!first || !second) return 0

       if(isNaN(Number(first))||  isNaN(Number(first))) return 0

       return Number(first)+Number(second)       
      } 
    }
    
}
