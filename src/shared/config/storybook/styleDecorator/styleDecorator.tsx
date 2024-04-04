import 'app/styles/index.scss';
import 'app/styles/variables/global.scss'
import 'app/styles/themes/dark.scss'
import 'app/styles/themes/light.scss'
import React from 'react';

export const StyleDecorator = (Story: any) => (
    <div className='app light'>
        <Story />
    </div>
)
