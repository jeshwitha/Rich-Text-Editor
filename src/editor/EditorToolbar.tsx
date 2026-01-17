interface ToolbarProps {
  onBold: () => void;
  onItalic: () => void;
  onHeading: () => void;
}

export function EditorToolbar({
  onBold,
  onItalic,
  onHeading,
}: ToolbarProps) {
  return (
    <div
      role="toolbar"
      aria-label="Editor formatting toolbar"
      className="flex gap-2"
    >
      <button
        type="button"
        onClick={onBold}
        aria-label="Bold"
        className="border px-2 py-1"
      >
        Bold
      </button>

      <button
        type="button"
        onClick={onItalic}
        aria-label="Italic"
        className="border px-2 py-1"
      >
        Italic
      </button>

      <button
        type="button"
        onClick={onHeading}
        aria-label="Heading"
        className="border px-2 py-1"
      >
        Heading
      </button>
    </div>
  );
}
