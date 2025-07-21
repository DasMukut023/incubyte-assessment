import {render, screen} from "@testing-library/react";
import StringCalculator from "../components/StringCalculator.jsx";

test("render input text area and calculate button ",()=>{
    render(<StringCalculator/>);
    expect(screen.getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument()
    expect(screen.getByText(/Calculate/i)).toBeInTheDocument()
})