import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import React from 'react';

import 'app/styles/themes/dark.scss'
import 'app/styles/themes/light.scss'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CLEAR: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: 'button',
  },
};
export const Primary: Story = {
  args: {
    children: 'button',
  },
};
export const Outlined: Story = {
  args: {
    children: 'йцу',
    theme: ButtonTheme.OUTLINED
  },
};
export const OutlinedDark: Story = {
  args: {
    children: 'йцу',
    theme: ButtonTheme.OUTLINED
  },
};
OutlinedDark.decorators = [
  (Story) => ThemeDecorator(Theme.DARK)(Story)
]
