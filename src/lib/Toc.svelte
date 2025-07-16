<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Define a type for headings
  type TocEntry = {
    id: string;
    text: string;
    level: number;
  };

  // Reactive TOC store
  const toc = writable<TocEntry[]>([]);

  // This ID should match the wrapper around <svelte:component />
  const contentSelector = '#markdown-content';

  onMount(() => {
    const container = document.querySelector(contentSelector);
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll('h1, h2, h3, h4, h5, h6')
    ) as HTMLHeadingElement[];

    const entries: TocEntry[] = headings.map((el) => ({
      id: el.id || '',
      text: el.textContent || '',
      level: parseInt(el.tagName.replace('H', ''), 10)
    }));

    toc.set(entries);
  });
</script>

<div class="toc">
  <h2>Table of Contents</h2>
  {#if $toc.length}
    <ul>
      {#each $toc as entry}
        <li style="margin-left: {(entry.level - 1) * 1.25}rem;">
          <a href={`#${entry.id}`}>{entry.text}</a>
        </li>
      {/each}
    </ul>
  {:else}
    <p><em>No headings found</em></p>
  {/if}
</div>

<style>
.toc {
  font-size: 0.9rem;
  border-left: 3px solid #ccc;
  padding-left: 1rem;
}
.toc ul {
  list-style: none;
  padding-left: 0.5rem;
}
.toc li {
  margin: 0.25rem 0;
}
.toc a {
  text-decoration: none;
  color: inherit;
}
.toc a:hover {
  text-decoration: underline;
}
</style>
