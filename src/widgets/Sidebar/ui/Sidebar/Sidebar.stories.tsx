import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story)
  ]
};
