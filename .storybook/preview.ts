import type { Preview } from "@storybook/react";
import '@/styles/site.scss'
import './storybook.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
};

export default preview;
