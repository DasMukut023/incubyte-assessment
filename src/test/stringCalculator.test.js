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

    // test for newline delimiters
    test("testcases for handles newline delimiters",()=>{
        expect(addFn("1\n2,3")).toBe(6)
    });

    // test for different delimiters
    test("testcases for support different newline delimiters",()=>{
        expect(addFn("//;\n1,2")).toBe(3)
    });
})