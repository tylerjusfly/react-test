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

        expect(listItemsElem).toHaveLength(skills.length)

    })

    test('render login button', ()=> {
        render(<Skills skills={skills} />)

        const LoginBtn = screen.getByRole('button', {
            name: /login/i
        })

        expect(LoginBtn).toBeInTheDocument()

    })

    test('start learning button should not be in dom', ()=> {
        render(<Skills skills={skills} />)

        const StartLearnBtn = screen.queryByRole('button', {
            name: 'Start learning'
        })

        expect(StartLearnBtn).not.toBeInTheDocument()

    })

    test('start learning button eventually appeared', async()=> {

        render(<Skills skills={skills} />)

        // FindBy or findAllBy returns a promise

        // find button
        const StartLearningButton = await screen.findByRole('button', {
            name: 'Start learning'
        }, {
            timeout: 2000
        })

        expect(StartLearningButton).toBeInTheDocument()

    })


})