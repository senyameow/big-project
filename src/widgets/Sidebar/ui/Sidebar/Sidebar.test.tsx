import { screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidber', () => {
    test('render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
