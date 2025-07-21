export const addFn=(numbers)=>{
    // console.log(numbers);
    if(numbers==="") return 0;
    const numbersArr= numbers.split(",").map(Number);
   
    // console.log(numbersArr)
    const res= numbersArr.reduce((sum, number)=>sum+number,0);
    // console.log(res)
    return res
}

//  addFn("1,2");
//  addFn("1,2,3,4,5,6")

