import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';

describe('Sidber', () => {
    test('render', () => {
        render(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
