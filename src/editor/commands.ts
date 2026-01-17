export type EditorFormat = 'bold' | 'italic' | 'heading';

export type EditorState = {
  activeFormats: Set<EditorFormat>;
};

export type FormattingCommand = {
  name: EditorFormat;
  execute: (state: EditorState) => EditorState;
};

export const formattingCommands: Record<EditorFormat, FormattingCommand> = {
  bold: {
    name: 'bold',
    execute: (state) => {
      const next = new Set(state.activeFormats);
      next.has('bold') ? next.delete('bold') : next.add('bold');

      return { activeFormats: next };
    },
  },

  italic: {
    name: 'italic',
    execute: (state) => {
      const next = new Set(state.activeFormats);
      next.has('italic') ? next.delete('italic') : next.add('italic');

      return { activeFormats: next };
    },
  },

  heading: {
    name: 'heading',
    execute: (state) => {
      return { activeFormats: new Set(['heading']) };
    },
  },
};

interface Command {
  name: string;
  execute: () => void;
}

interface Keymap {
  key: string;
  command: string;
}

interface Plugin {
  name: string;
  commands: Command[];
  keymaps: Keymap[];
}

const boldPlugin: Plugin = {
  name: 'bold',
  commands: [
    {
      name: 'bold',
      execute: () => console.log('Bold executed'),
    },
  ],
  keymaps: [
    {
      key: 'Ctrl+B',
      command: 'bold',
    },
  ],
};

const italicPlugin: Plugin = {
  name: 'italic',
  commands: [
    {
      name: 'italic',
      execute: () => console.log('Italic executed'),
    },
  ],
  keymaps: [
    {
      key: 'Ctrl+I',
      command: 'italic',
    },
  ],
};

const plugins: Plugin[] = [boldPlugin, italicPlugin];

export { Plugin, plugins };
