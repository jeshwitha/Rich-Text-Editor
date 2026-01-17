// Define the structure for a text node
export interface TextNode {
  text: string; // The actual text content
  bold?: boolean; // Optional: Whether the text is bold
  italic?: boolean; // Optional: Whether the text is italicized
  underline?: boolean; // Optional: Whether the text is underlined
  color?: string; // Optional: Text color in hex or named format
}

// Define the structure for a block
export interface Block {
  id: string; // Unique identifier for the block
  type: 'paragraph' | 'heading' | 'blockquote'; // Type of block
  level?: number; // Optional: Level for headings (e.g., h1, h2, etc.)
  children: TextNode[]; // Array of text nodes within the block
}

// Define the structure for the document
export interface DocumentModel {
  blocks: Block[]; // Array of blocks in the document
}