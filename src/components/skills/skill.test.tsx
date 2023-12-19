import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe('Skills', () =>{

    const skills = ['HTML', 'CSS', 'PYTHON', 'JAVA']

    test('renders correctly', () => {
        render(<Skills skills={skills}/>)

        // Expect list element to be in the dom
        const listElements = screen.getByRole('list')

        expect(listElements).toBeInTheDocument()
    })

    test('render list of skills', () => {
        render(<Skills skills={skills} />)

        const listItemsElem = screen.getAllByRole('listitem')

        expect(listItemsElem).toHaveLength(4)

    })

})