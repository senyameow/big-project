import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';

const meta = {
    component: PageError,
    title: 'widgets/PageError'
}satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {}
