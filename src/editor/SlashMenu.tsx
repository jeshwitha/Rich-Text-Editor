import { useState } from 'react';
import type { EditorFormat } from './commands';

export type SlashCommand = {
  id: EditorFormat;
  label: string;
};

type SlashMenuProps = {
  open: boolean;
  commands: SlashCommand[];
  onSelect: (command: EditorFormat) => void;
  onClose: () => void;
};

export function SlashMenu({
  open,
  commands,
  onSelect,
  onClose,
}: SlashMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!open) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % commands.length);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + commands.length) % commands.length);
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      onSelect(commands[activeIndex].id);
      onClose();
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      role="menu"
      aria-label="Insert menu"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="border border-gray-300 bg-white p-2 space-y-1"
    >
      {commands.map((command, index) => (
        <div
          key={command.id}
          role="menuitem"
          aria-selected={index === activeIndex}
          className={`px-2 py-1 ${
            index === activeIndex ? 'bg-gray-200' : ''
          }`}
        >
          {command.label}
        </div>
      ))}
    </div>
  );
}
