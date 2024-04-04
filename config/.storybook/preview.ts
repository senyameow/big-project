import type { Preview } from "@storybook/react";
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/styleDecorator'

import '../../src/app/styles/index.scss';
import '../../src/app/styles/variables/global.scss';
import '../../src/app/styles/themes/light.scss';
import '../../src/app/styles/themes/dark.scss';

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
    (Story) => StyleDecorator(Story)
  ]
};


export default preview;
