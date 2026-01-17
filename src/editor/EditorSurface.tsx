import { useRef, useState } from 'react';

type CursorSelection = {
  isCollapsed: boolean;
};

const useEditorCommands = () => {
  const commands = [
    {
      name: 'bold',
      execute: () => document.execCommand('bold'),
    },
    {
      name: 'italic',
      execute: () => document.execCommand('italic'),
    },
    {
      name: 'heading',
      execute: () => document.execCommand('formatBlock', false, 'H1'),
    },
  ];

  return commands;
};

export function EditorSurface() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [selection, setSelection] = useState<CursorSelection | null>(null);
  const commands = useEditorCommands();

  const handleSelectionChange = () => {
    const sel = window.getSelection();
    if (!sel || !editorRef.current) return;

    if (!editorRef.current.contains(sel.anchorNode)) return;

    setSelection({
      isCollapsed: sel.isCollapsed,
    });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Later: split block or create new paragraph
    }

    if (e.key === 'Backspace') {
      // Later: handle deletion logic
    }
  };

  return (
    <div className="editor-root">
      <div
        ref={editorRef}
        contentEditable
        role="textbox"
        aria-multiline="true"
        onKeyDown={handleKeyDown}
        onKeyUp={handleSelectionChange}
        onMouseUp={handleSelectionChange}
        className="min-h-[100px] border border-gray-300 p-2 focus:outline-none"
      >
        Editable content here…
      </div>

      <p className="editor-debug">
        Selection collapsed: {selection?.isCollapsed ? 'yes' : 'no'}
      </p>
    </div>
  );
}
