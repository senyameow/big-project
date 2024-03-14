import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('button', () => {
    test('render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    
    test('render', () => {
        render(<Button theme={ButtonTheme.CLEAR}>clear</Button>);
        expect(screen.getByText('clear')).toHaveClass('clear')
    });
})
