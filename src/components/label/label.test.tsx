import { render, screen } from "@testing-library/react"
import { Label } from "."

describe('Label component', () => {
    
    test('display a text', () => {
        render(<Label value={'firstname'} />)
    
        const elem = screen.getByText(/Firstname/i)
    
        expect(elem).toBeInTheDocument()
    
    })
    
    test('label renders props', () => {
        render(<Label value={'username'}  />)
    
        const textElem = screen.getByText('username')
    
        expect(textElem).toBeInTheDocument()
    })

})
