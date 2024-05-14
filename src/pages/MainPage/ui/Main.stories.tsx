import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';

import 'app/styles/themes/dark.scss'
import 'app/styles/themes/light.scss'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/Main',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};
export const Dark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story)
    ]
};
