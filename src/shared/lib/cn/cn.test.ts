import { cn } from './cn'

describe('cn', () => {
    test('only 1st param', () => {
        expect(cn('class_1')).toBe('class_1')
    })

    test('with additional classes', () => {
        const expected = 'class_1 add_1 add_2'
        expect(cn('class_1', {}, ['add_1', 'add_2'])).toBe(expected)
    })
})
