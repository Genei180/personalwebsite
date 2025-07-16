import { visit } from 'unist-util-visit';

export default function rehypeMaxWidthMediaElements() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      const tagsToStyle = ['img', 'video', 'iframe', 'object'];

      if (tagsToStyle.includes(node.tagName)) {
        // Initialize if not set
        node.properties = node.properties || {};

        // Merge with existing inline styles, if present
        const existingStyle = node.properties.style || '';
        const additionalStyle = 'max-width: 100%; height: auto;';

        node.properties.style = existingStyle
          ? `${existingStyle}; ${additionalStyle}`
          : additionalStyle;
      }
    });
  };
}