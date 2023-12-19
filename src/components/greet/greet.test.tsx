import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test('renders greet component correctly', ()=> {
    // create a virtual dom and query it
    render(<Greet/>)
    const textElem = screen.getByText('Hello World', {
        // this narrows down the selection if we have multiple Hello world
        selector: 'div'
    })

    expect(textElem).toBeInTheDocument()
})