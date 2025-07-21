export const addFn=(numbers)=>{
    console.log(numbers);
    if(numbers==="") return 0;
    let delimiter=/,|\n/;
    if(numbers?.startsWith("//")){
        const parts= numbers.split("\n")
        delimiter= new RegExp(parts[0].substring(2))
        numbers= parts[1]
    }
    const numbersArr= numbers.
                      split(delimiter).
                      map(Number);
   
    console.log(numbersArr)
    const res= numbersArr.reduce((sum, number)=>sum+number,0);
    console.log(res)
    return res
}

//  addFn("1,2");
//  addFn("1,2,3,4,5,6");
//  addFn("1,2\n3");
//  addFn("//;\n1;2")

