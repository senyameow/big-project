import type { Preview } from "@storybook/react";
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator'
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator'

import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => StyleDecorator(Story),
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    (Story) => routerDecorator(Story)
  ]
};


export default preview;
