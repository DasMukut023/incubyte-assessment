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
    test("returns sum of two comma separated number",()=>{
        expect(addFn("3,5")).toBe(8)
    });

    // test for multiple comma separated number
    test("returns sum of multiple comma separated number",()=>{
        expect(addFn("1,2,4,5")).toBe(12)
    });
})