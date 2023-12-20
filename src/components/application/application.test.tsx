import { render, screen } from "@testing-library/react"
import { Application } from "./Application"

// Group test
describe('Application', ()=> {
    test('it renders correctly', ()=> {
        render(<Application/>)

        const pageHeading_1 = screen.getByRole('heading', {
            name: 'Job application form',
            level:1
        })

        expect(pageHeading_1).toBeInTheDocument()

        const pageHeading_2 = screen.getByRole('heading', {
            name: 'Section 1',
            level:2
        })

        expect(pageHeading_2).toBeInTheDocument()

        const InputElem = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(InputElem).toBeInTheDocument()

        const NameValElem = screen.getByDisplayValue('tylerjusfly')
        expect(NameValElem).toBeInTheDocument()

        const ImageElement = screen.getByAltText('a person with a laptop')
        expect(ImageElement).toBeInTheDocument()

        const SpanElem = screen.getByTitle('close')
        expect(SpanElem).toBeInTheDocument()

        const ContactElem = screen.getByLabelText('Contact')
        expect(ContactElem).toBeInTheDocument()

        const ContactPlaceHolder = screen.getByPlaceholderText('Enter Contact')
        expect(ContactPlaceHolder).toBeInTheDocument()

        const paragraphText = screen.getByText((content) => content.startsWith('All fields'), {
            selector: 'p'
        })
        expect(paragraphText).toBeInTheDocument()

        const TextAreaElem = screen.getByRole('textbox', {
            name: /bio/i
            
        })

        expect(TextAreaElem).toBeInTheDocument()

        const SelectElem = screen.getByRole('combobox')

        expect(SelectElem).toBeInTheDocument()

        const checkboxElem = screen.getByRole('checkbox')
        expect(checkboxElem).toBeInTheDocument()

        const buttonElem = screen.getByRole('button')
        expect(buttonElem).toBeInTheDocument()


    })
})