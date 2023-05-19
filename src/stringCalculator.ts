interface propTypes{
  sum:(input:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum:(input:string):number=>{
       return 1;
      } 
    }
    
}
