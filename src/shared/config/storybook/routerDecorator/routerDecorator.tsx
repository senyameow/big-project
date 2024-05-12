import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (Story: any) => (

    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
