# Accessibility Report

## Keyboard Support
- All editor interactions are keyboard accessible.
- Text input, navigation, formatting, and slash menu can be used without a mouse.
- Toolbar buttons are native `<button>` elements and support Enter and Space by default.
- Slash menu supports ArrowUp, ArrowDown, Enter, and Escape.

## ARIA Roles and Semantics
- Editor surface uses `role="textbox"` with `aria-multiline="true"`.
- Formatting toolbar uses `role="toolbar"`.
- Slash menu uses `role="menu"` with `role="menuitem"` for options.
- ARIA labels are provided where visual text is insufficient.

## Focus Management
- Focus remains within the editor during text input.
- Slash menu receives focus when opened and returns focus to the editor on close.
- No focus traps or mouse-only focus changes are used.

## Screen Reader Considerations
- Semantic HTML is used for rendered content (p, ul, li, code).
- No div/span-only output is generated.
- Toolbar and menus expose meaningful labels to assistive technologies.

## Testing
- Accessibility checks are run using `@storybook/addon-a11y`.
- Keyboard-only usage is verified manually.
- No accessibility violations are reported in Storybook.
