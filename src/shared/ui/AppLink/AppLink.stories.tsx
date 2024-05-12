import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    component: AppLink,
    title: 'shared/AppLink',
    args: {
        to: '#'
    }
}satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Link'
    }
}
export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Link'
    }
}
