export type Operation =
  | {
      type: 'insert';
      index: number;
      text: string;
      clientId: string;
      seq: number;
    }
  | {
      type: 'delete';
      index: number;
      length: number;
      clientId: string;
      seq: number;
    };

export function applyOperation(
  content: string,
  operation: Operation
): string {
  if (operation.type === 'insert') {
    return (
      content.slice(0, operation.index) +
      operation.text +
      content.slice(operation.index)
    );
  }

  return (
    content.slice(0, operation.index) +
    content.slice(operation.index + operation.length)
  );
}

export function mergeOperations(
  operations: Operation[]
): Operation[] {
  return [...operations].sort((a, b) => {
    if (a.seq !== b.seq) {
      return a.seq - b.seq;
    }

    return a.clientId.localeCompare(b.clientId);
  });
}

export function simulateCollaboration(
  initialContent: string,
  operations: Operation[]
): string {
  let content = initialContent;

  const ordered = mergeOperations(operations);

  for (const op of ordered) {
    content = applyOperation(content, op);
  }

  return content;
}
