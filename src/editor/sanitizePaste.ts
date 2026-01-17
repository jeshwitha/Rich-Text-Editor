export function sanitizeHtmlPaste(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const allowedTags = new Set([
    'P',
    'STRONG',
    'EM',
    'CODE',
    'UL',
    'LI',
    'BR',
  ]);

  function sanitizeNode(
    node: Node,
    owner: Document
  ): Node | null {
    if (node.nodeType === Node.TEXT_NODE) {
      return owner.createTextNode(node.textContent ?? '');
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;

      if (!allowedTags.has(el.tagName)) {
        const fragment = owner.createDocumentFragment();
        el.childNodes.forEach((child) => {
          const clean = sanitizeNode(child, owner);
          if (clean) fragment.appendChild(clean);
        });
        return fragment;
      }

      const cleanEl = owner.createElement(el.tagName.toLowerCase());
      el.childNodes.forEach((child) => {
        const clean = sanitizeNode(child, owner);
        if (clean) cleanEl.appendChild(clean);
      });

      return cleanEl;
    }

    return null;
  }

  const container = doc.createElement('div');

  doc.body.childNodes.forEach((node) => {
    const clean = sanitizeNode(node, doc);
    if (clean) container.appendChild(clean);
  });

  return container.innerHTML;
}
