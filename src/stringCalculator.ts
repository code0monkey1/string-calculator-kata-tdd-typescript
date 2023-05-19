interface propTypes{
  sum:(input:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum:(input:string):number=>{
       
       const statement=input.trim()
       const[first,second]=statement.split(',')
        console.debug("first",first,"second",second)

       if(!first || !second) return -1

       if(isNaN(Number(first))||  isNaN(Number(first))) return -1

       return Number(first)+Number(second)       
      } 
    }
    
}
