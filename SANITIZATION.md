# Paste Sanitization

The editor sanitizes pasted HTML to ensure safety and semantic output.

## Approach
- HTML is parsed using `DOMParser`
- Only a whitelist of semantic tags is allowed:
  - p, strong, em, code, ul, li, br
- All other tags are stripped
- Script and style tags are removed entirely
- Output contains no inline styles or executable code

## Verified Cases

### Script Removal
Input:
```html
<p>Hello</p><script>alert(1)</script>
