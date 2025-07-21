import {addFn} from "../utils/stringCalculator";
addFn
describe("String Calculator",()=>{
    // test for empty string
    test("return 0 when the input is empty string",()=>{
        expect(addFn("")).toBe(0)
    });

    // test for single input 
    test("return the number when passes single number", ()=>{
        expect(addFn("3")).toBe(3)
    });

    // test for 2 comma separated number
    test("returens sum of comma separated number",()=>{
        expect(addFn("3,5")).toBe(8)
    })
})