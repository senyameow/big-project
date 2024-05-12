import React from 'react';
import type { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
)
