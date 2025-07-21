import {addFn} from "../utils/stringCalculator";
addFn
describe("String Calculator",()=>{
    // test for empty string
    test("return 0 when the input is empty string",()=>{
        expect(addFn("")).toBe(0)
    });

    
})