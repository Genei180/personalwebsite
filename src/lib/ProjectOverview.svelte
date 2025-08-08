<!-- src/lib/ProjectOverview.svelte -->
<script lang="ts">
  import TreeNode from '$lib/TreeNode.svelte';

  export let filesInProject: [string][];
  export let activeSlug: string;

  const ProjectName = activeSlug.split("/")[0];

  type TreeNodeType = {
    [name: string]: TreeNodeType | { __filePath: string };
  };

  const tree: TreeNodeType = {};

  for (const [filePath] of filesInProject) {
    const cleaned = filePath.replace(/^\.\/[^/]+\//, '');
    const parts = cleaned.split('/');
    let current = tree;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        current[part] = { __filePath: filePath };
      } else {
        current[part] ??= {};
        current = current[part] as TreeNodeType;
      }
    }
  }
</script>

<div>
  <h1>{ProjectName}</h1>
  <ul class="nav-tree">
    {#each Object.entries(tree) as [name, value]}
      <TreeNode {name} {value} {activeSlug} />
    {/each}
  </ul>
</div>

<style>
div {
  padding: 0 20px;
}

.nav-tree {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-tree > li {
  margin-bottom: 1rem;
}
</style>
