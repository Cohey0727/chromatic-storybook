import { withScreenshot } from "storycap";
import type { Preview } from "@storybook/react";

export const decorators = [withScreenshot];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      useNestedPath: true,
    },
  },
};

export default preview;
