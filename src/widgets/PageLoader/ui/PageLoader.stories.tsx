import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PageLoader } from './PageLoader';

const meta = {
title: 'Components/PageLoader',
  component: PageLoader,
  args: {
    className: 'string'
  }, 
} satisfies Meta<typeof PageLoader>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Basic: Story = {
    args: {
    },
  };
