import { visit } from 'unist-util-visit';

export default function rehypeAddLinkReload() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'a' &&
        node.properties &&
        typeof node.properties.href === 'string' &&
        node.properties.href.startsWith('./')
      ) {
        node.properties['data-sveltekit-reload'] = true;
      }
    });
  };
}