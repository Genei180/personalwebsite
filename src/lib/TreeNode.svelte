<!-- src/lib/TreeNode.svelte -->
<script lang="ts">
  import TreeNode from '$lib/TreeNode.svelte';

  export let name: string;
  export let value: any;
  export let activeSlug: string;

  const isFolder = typeof value === 'object' && !value.__filePath;

  function isActive(filePath: string): boolean {
    return filePath.includes(activeSlug);
  }
</script>

<li class={isFolder ? 'folder' : 'file'}>
  {#if isFolder}
    <div class="folder-name">{name}</div>
    <ul>
      {#each Object.entries(value) as [childName, childValue]}
        <TreeNode name={childName} value={childValue} activeSlug={activeSlug} />
      {/each}
    </ul>
  {:else}
    <a
      href={`/projects/${value.__filePath}`}
      data-sveltekit-reload
      class:active={isActive(value.__filePath)}
    >
      {name.replace(/\.md$/, '')}
    </a>
  {/if}
</li>

<style>
li {
  list-style: none;
}

.folder-name {
  font-weight: bold;
  margin-top: 0.5rem;
}

a {
  text-decoration: none;
  color: var(--text-muted);
  display: inline-block;
}

a.active {
  color: var(--accent);
  border-bottom: 2px solid var(--accent);
}

.folder > ul {
  padding-left: 1.5rem;
}

li.folder {
    padding-bottom: 5px;
}
</style>
