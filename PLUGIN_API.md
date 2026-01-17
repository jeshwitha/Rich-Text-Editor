# Plugin API

The editor supports extensibility through a simple plugin system.

## Plugin Structure

A plugin is a plain object that may provide:
- Commands
- Key bindings

```ts
type EditorPlugin = {
  name: string;
  commands?: EditorFormat[];
  keybindings?: {
    key: string;
    command: EditorFormat;
  }[];
};
