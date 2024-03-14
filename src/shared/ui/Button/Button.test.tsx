import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('button', () => {
    test('render', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).
    })
})
