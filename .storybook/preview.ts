import type { Preview } from "@storybook/react"
import "../src/index.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        contentsSelector: ".sbdocs-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: "#storybook-docs",
        title: "Table of Contents",
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#0f0f0f",
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", left: "☀️" },
          { value: "dark", title: "Dark", left: "🌙" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light"

      return (
        <div className={theme === "dark" ? "dark" : ""}>
          <div className="bg-background text-foreground min-h-screen p-4">
            <Story />
          </div>
        </div>
      )
    },
  ],
}

export default preview
