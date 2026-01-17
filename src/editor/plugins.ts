import React from 'react';
import type { EditorFormat } from './commands';

export type KeyBinding = {
  key: string;
  command: EditorFormat;
};

export type EditorPlugin = {
  name: string;
  commands?: EditorFormat[];
  keybindings?: KeyBinding[];
};

export const boldPlugin: EditorPlugin = {
  name: 'bold',
  commands: ['bold'],
  keybindings: [
    { key: 'Ctrl+B', command: 'bold' },
  ],
};

export const italicPlugin: EditorPlugin = {
  name: 'italic',
  commands: ['italic'],
  keybindings: [
    { key: 'Ctrl+I', command: 'italic' },
  ],
};

export const editorPlugins: EditorPlugin[] = [
  boldPlugin,
  italicPlugin,
];

interface ToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onHeading: () => void;
}

const EditorToolbar: React.FC<ToolbarProps> = ({ onBold, onItalic, onHeading }) => {
  return (
    <div role="toolbar" aria-label="Editor Toolbar">
      <button
        type="button"
        onClick={onBold}
        aria-label="Bold"
      >
        Bold
      </button>
      <button
        type="button"
        onClick={onItalic}
        aria-label="Italic"
      >
        Italic
      </button>
      <button
        type="button"
        onClick={onHeading}
        aria-label="Heading"
      >
        Heading
      </button>
    </div>
  );
};

export default EditorToolbar;
