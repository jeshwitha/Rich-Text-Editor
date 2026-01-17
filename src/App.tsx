import React, { useRef } from 'react';
import { EditorSurface } from './editor/EditorSurface';

const ContentEditable: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.execCommand('insertHTML', false, '<br>');
    } else if (event.key === 'Backspace') {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (range.collapsed && range.startOffset === 0) {
          event.preventDefault();
        }
      }
    }
  };

  return (
    <div
      ref={contentRef}
      contentEditable
      onKeyDown={handleKeyDown}
      style={{
        border: '1px solid #ccc',
        padding: '8px',
        minHeight: '100px',
      }}
    >
      Editable content here...
    </div>
  );
};

function App() {
  return (
    <main className="p-6">
      <EditorSurface />
      <ContentEditable />
    </main>
  );
}

export default App;
