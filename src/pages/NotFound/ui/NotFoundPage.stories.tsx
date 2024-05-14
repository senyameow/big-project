import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';

import 'app/styles/themes/dark.scss'
import 'app/styles/themes/light.scss'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/NotFound',
  component: NotFoundPage,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story)
    ]
};
