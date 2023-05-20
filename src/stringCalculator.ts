interface propTypes{
  sum:(input:string)=>number
}

export const stringCalculator=():propTypes=>{
   
    return {
      sum: (input: string): number => {
       // function implementation

       const isDelimeteredInput= input.startsWith('//')
       let delimiters=',\n';
      
        if(isDelimeteredInput){

          input=input.replace('//','')

          delimiters=input[0]

          input= input.slice(2,)

        }

       
       const allInput = input.split(new RegExp(`[${delimiters}]`, "g"));
    
       const allNumbers = allInput
                                  .filter(v => v && !isNaN(Number(v)) && Number(v)<1000 )
                                  .map(Number)

       if(allNumbers.some(v => v<0)) throw Error('Negatives not allowed')

       const _sum = allNumbers.reduce((result,value)=>result+value,0)
      
       return _sum
      } 
    }
    
}
