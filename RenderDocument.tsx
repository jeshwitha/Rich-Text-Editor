import React from 'react';
import { DocumentModel, Block, TextNode } from './documentModel';

// Helper function to render a text node
const renderTextNode = (node: TextNode) => {
  let content = node.text;

  if (node.bold) {
    content = <strong>{content}</strong>;
  }
  if (node.italic) {
    content = <em>{content}</em>;
  }
  if (node.underline) {
    content = <u>{content}</u>;
  }
  if (node.color) {
    content = <span style={{ color: node.color }}>{content}</span>;
  }

  return content;
};

// Helper function to render a block
const renderBlock = (block: Block) => {
  switch (block.type) {
    case 'heading':
      const HeadingTag = `h${block.level || 1}` as keyof JSX.IntrinsicElements;
      return <HeadingTag key={block.id}>{block.children.map(renderTextNode)}</HeadingTag>;

    case 'paragraph':
      return <p key={block.id}>{block.children.map(renderTextNode)}</p>;

    case 'blockquote':
      return <blockquote key={block.id}>{block.children.map(renderTextNode)}</blockquote>;

    default:
      return null;
  }
};

// Main component to render the document
const RenderDocument: React.FC<{ document: DocumentModel }> = ({ document }) => {
  return <div>{document.blocks.map(renderBlock)}</div>;
};

export default RenderDocument;